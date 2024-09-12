'use client';

import React, { BaseSyntheticEvent, useState } from 'react';
import _ from 'lodash';

import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import { zodResolver } from '@hookform/resolvers/zod';
import { EnvelopeClosedIcon, InfoCircledIcon, PersonIcon } from '@radix-ui/react-icons';
import { Box, Callout, Flex, Text, Button, Spinner, Heading, Container, TextField, Checkbox } from '@radix-ui/themes';

import { registrationFormTwoSchema, UserFormData } from './schema';
import { FcBusiness } from 'react-icons/fc';
import { getMatchingUser, updateUser } from '@/firebase/service';

import Conditional from '@/components/common/Conditional';
import ErrorMessage from '@/components/common/ErrorMessage';

import useDictionary from '@/hooks/useDictionary';

interface Props {
    userId: string;
    onCreateUser: (referralCode: string) => void;
}

const RegistrationFormTwo: React.FC<Props> = ({ userId, onCreateUser }) => {
	const [error, setError] = useState('');

    const { page } = useDictionary();
	const { control, handleSubmit, register, setValue, formState } = useForm<UserFormData>({
		resolver: zodResolver(registrationFormTwoSchema),
		mode: 'all',
        defaultValues: { promotions: false }
	});

	const handleUpdateUserAccount = React.useCallback(
		async (data: UserFormData, event: BaseSyntheticEvent<any, any, any> | undefined) => {
			if (event) event.preventDefault();

			try {
                const existingUser = await getMatchingUser('email', data.email);
                if (existingUser) return setError(page.register_two.unique_error_message);

                const referralCode = await updateUser(userId, data);
                onCreateUser(referralCode);

				toast.success(page.register_two.success);
			} catch (error) {
				setError(page.register_two.generic_error_message);
			}
		},
		[userId, page.register_two, onCreateUser]
	);

	return (
        <Container>
            <Flex flexGrow="1" justify="center" p={{ md: '9', initial: '3' }}>
                <Box as="div" className="w-full max-w-96">
                    <Conditional isVisible={!!error}>
                        <Callout.Root color="red" className="mb-5">
                            <Callout.Icon>
                                <InfoCircledIcon />
                            </Callout.Icon>
                            <Callout.Text>{error}</Callout.Text>
                        </Callout.Root>
                    </Conditional>

                    <form id="registration-two-form" onSubmit={handleSubmit(handleUpdateUserAccount)}>
                        <Heading size="7">{page.register_two.title}</Heading>
                        <Text as='p' className="my-4 text-gray-500" size="2">{page.register_two.description}</Text>

                        <Flex justify="center" align="center" gap="6">
							<Box className="w-full">
								<Flex
									flexGrow="1"
									gap="2"
									direction={{ lg: 'row', initial: 'column' }}
								>
									<Box className="w-full">
										<Text size="2" >
											{page.register_two.first_name}
										</Text>

										<TextField.Root
											mt="3"
											radius="small"
											variant="surface"
											color="gray"
											size="3"
                                            placeholder="John"
                                            className="text-sm"
											{...register('firstName')}
										>
											<TextField.Slot >
												<PersonIcon height="16" width="16" />
											</TextField.Slot>
										</TextField.Root>

										{formState.errors.firstName && (
											<ErrorMessage>
												{formState.errors.firstName.message}
											</ErrorMessage>
										)}
									</Box>

									<Box className="w-full">
										<Text size="2">
											{page.register_two.last_name}
										</Text>

										<TextField.Root
											mt="3"
											radius="small"
											variant="surface"
											color="gray"
											size="3"
                                            placeholder="Doe"
                                            className="text-sm"
											{...register('lastName')}
										>
											<TextField.Slot >
												<PersonIcon height="16" width="16" />
											</TextField.Slot>
										</TextField.Root>

										{formState.errors.lastName && (
											<ErrorMessage>
												{formState.errors.lastName.message}
											</ErrorMessage>
										)}
									</Box>
								</Flex>

                                <Conditional isVisible>
                                    <Box className="w-full mt-5">
                                        <Text size="2" >
                                            {page.register_two.business_name}
                                        </Text>

                                        <TextField.Root
                                            mt="3"
                                            radius="small"
                                            variant="surface"
                                            color="gray"
                                            placeholder={page.register_two.business_name_placeholder}
                                            size="3"
                                            className="text-sm"
                                            {...register('businessName')}
                                        >
                                            <TextField.Slot >
                                                <FcBusiness size={16} />
                                            </TextField.Slot>
                                        </TextField.Root>

                                        {formState.errors.businessName && (
                                            <ErrorMessage>
                                                {formState.errors.businessName.message}
                                            </ErrorMessage>
                                        )}
                                    </Box>
                                </Conditional>

                                <Box className="w-full mt-5">
                                    <Text size="2" >
                                        {page.register_two.email}
                                    </Text>

                                    <TextField.Root
                                        radius="small"
                                        mt="3"
                                        variant="surface"
                                        color="gray"
                                        size="3"
                                        placeholder="name@email.com"
                                        className="focus:outline-0 text-sm"
                                        {...register('email')}
                                    >
                                        <TextField.Slot >
                                            <EnvelopeClosedIcon height="16" width="16" />
                                        </TextField.Slot>
                                    </TextField.Root>

                                    {formState.errors.email && (
                                        <ErrorMessage>
                                            {formState.errors.email.message}
                                        </ErrorMessage>
                                    )}
                                </Box>
                            </Box>
						</Flex>

                        <Controller
                            name="promotions"
                            control={control}
                            render={({ field }) => (
                                <Flex align="center" className="my-5" gap="3">
                                    <Checkbox 
                                        size='3'
                                        color="orange" 
                                        id="promotions"
                                        checked={field.value}
                                        onClick={() => setValue('promotions', !field.value)}
                                    />
        
                                    <label htmlFor="promotions" className="leading-5 text-sm">
                                        {page.register_two.promotions_message}
                                    </label>
                                </Flex>
                            )}
                        />
                        
                 
                        <Button
                            className="animate__animated animate__backInUp w-full mt-4 text-sm bg-slate-800 disabled:bg-gray-600 disabled:text-white dark:bg-[#222]"
                            form="registration-two-form"
                            variant="solid"
                            size="4"
                            type="submit"
                            radius="small"
                            disabled={formState.isSubmitting}
                        >
                            {page.register_two.cta}
                            {formState.isSubmitting && <Spinner />}
                        </Button>
                    </form>
                </Box>
            </Flex>
        </Container>
	);
};

export default RegistrationFormTwo;
