'use client';

import React, { BaseSyntheticEvent, useState } from 'react';
import _ from 'lodash';

import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

import { zodResolver } from '@hookform/resolvers/zod';
import { EnvelopeClosedIcon, InfoCircledIcon, PersonIcon } from '@radix-ui/react-icons';
import {
	Box,
	Callout,
	Flex,
	Text,
	Button,
	Spinner,
    Heading,
    Container,
    TextField,
    Checkbox,
} from '@radix-ui/themes';

import { registrationFormTwoSchema, UserFormData } from './schema';
import { FcBusiness } from 'react-icons/fc';
import { getMatchingUser, updateUser } from '@/firebase/service';

import Conditional from '@/components/common/Conditional';
import ErrorMessage from '@/components/common/ErrorMessage';

interface Props {
    userId: string;
}

const RegistrationFormTwo: React.FC<Props> = ({ userId }) => {
	const [error, setError] = useState('');

    const { push } = useRouter();
	const { control, handleSubmit, register, setValue, formState } = useForm<UserFormData>({
		resolver: zodResolver(registrationFormTwoSchema),
		mode: 'all',
        defaultValues: { promotions: false }
	});

	const handleCompleteUserRegistration = React.useCallback(
		async (data: UserFormData, event: BaseSyntheticEvent<any, any, any> | undefined) => {
			if (event) event.preventDefault();

			try {
                const existingUser = await getMatchingUser('email', data.email);
                if (existingUser) return setError('A user with the email already exists!');

                await updateUser(userId, data);
				toast.success("Account created successfully!");

                push('/');
			} catch (error) {
				setError('Ooops! Looks like something went wrong. Please try again.');
			}
		},
		[userId, push]
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

                    <form id="registration-two-form" onSubmit={handleSubmit(handleCompleteUserRegistration)}>
                        <Heading size="7">Complete your registration.</Heading>
                        <Text as='p' className="my-4 text-gray-500" size="2">Fill the form below to complete your registration.</Text>

                        <Flex justify="center" align="center" gap="6">
							<Box className="w-full">
								<Flex
									flexGrow="1"
									gap="2"
									direction={{ lg: 'row', initial: 'column' }}
								>
									<Box className="w-full">
										<Text size="2" >
											First Name:
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
											Last Name:
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
                                            Business Name:
                                        </Text>

                                        <TextField.Root
                                            mt="3"
                                            radius="small"
                                            variant="surface"
                                            color="gray"
                                            placeholder="Enter business name"
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
                                        Email:
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
                                        I agree to receive news, offers, and promotional materials from Exactrem.
                                    </label>
                                </Flex>
                            )}
                        />
                        
                 
                        <Button
                            className="w-full mt-4 text-sm bg-slate-800 disabled:bg-gray-600 disabled:text-white dark:bg-[#222]"
                            form="registration-two-form"
                            variant="solid"
                            size="4"
                            type="submit"
                            radius="small"
                            disabled={formState.isSubmitting}
                        >
                            Submit
                            {formState.isSubmitting && <Spinner />}
                        </Button>
                    </form>
                </Box>
            </Flex>
        </Container>
	);
};

export default RegistrationFormTwo;
