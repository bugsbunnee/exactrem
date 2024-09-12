'use client';

import React, { BaseSyntheticEvent, useState } from 'react';
import Link from 'next/link';
import _ from 'lodash';

import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

import { zodResolver } from '@hookform/resolvers/zod';
import { InfoCircledIcon, PersonIcon } from '@radix-ui/react-icons';
import { Box, Callout, Container, Flex, Text, Button, Spinner, Heading, TextField } from '@radix-ui/themes';

import { registrationFormThreeSchema, ReferralFormData } from './schema';
import { addReferrer, getMatchingUser } from '@/firebase/service';

import Conditional from '@/components/common/Conditional';
import ErrorMessage from '@/components/common/ErrorMessage';

import useDictionary from '@/hooks/useDictionary';

interface Props {
    userId: string;
}

const RegistrationFormThree: React.FC<Props> = ({ userId }) => {
	const [error, setError] = useState('');

    const { page } = useDictionary();
    const { push } = useRouter();
	const { handleSubmit, register, formState } = useForm<ReferralFormData>({
		resolver: zodResolver(registrationFormThreeSchema),
		mode: 'all',
	});

	const handleCompleteUserRegistration = React.useCallback(
		async (data: ReferralFormData, event: BaseSyntheticEvent<any, any, any> | undefined) => {
			if (event) event.preventDefault();

			try {
                const existingUser = await getMatchingUser('referralCode', data.referredBy);
                if (!existingUser) return setError(page.register_three.no_referrer_error_message);

                await addReferrer(userId, data.referredBy);
				toast.success(page.register_three.success);

                push('/');
			} catch (error) {
				setError(page.register_three.generic_error_message);
			}
		},
		[userId, push, page.register_three]
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

                    <form id="registration-three-form" onSubmit={handleSubmit(handleCompleteUserRegistration)}>
                        <Heading size="7">{page.register_three.title}</Heading>
                        <Text as='p' className="my-4 text-gray-500" size="2">{page.register_three.description}</Text>

                        <Box className="w-full mt-5">
                            <Text size="2" >
                                {page.register_three.referral_code}
                            </Text>

                            <TextField.Root
                                radius="small"
                                mt="3"
                                variant="surface"
                                color="gray"
                                size="3"
                                placeholder={page.register_three.referral_code_placeholder}
                                className="focus:outline-0 text-sm"
                                {...register('referredBy')}
                            >
                                <TextField.Slot >
                                    <PersonIcon height="16" width="16" />
                                </TextField.Slot>
                            </TextField.Root>

                            {formState.errors.referredBy && (
                                <ErrorMessage>
                                    {formState.errors.referredBy.message}
                                </ErrorMessage>
                            )}
                        </Box>

                        <Button
                            className="w-full mt-4 text-sm bg-black disabled:bg-gray-600 disabled:text-white dark:bg-[#222]"
                            form="registration-three-form"
                            variant="solid"
                            size="4"
                            type="submit"
                            radius="small"
                            disabled={formState.isSubmitting || !formState.isValid}
                        >
                            {page.register_three.cta_redeem_code}
                            {formState.isSubmitting && <Spinner />}
                        </Button>
                        
                        <Button
                            className="animate__animated animate__backInUp w-full mt-4 text-sm bg-primary disabled:bg-gray-600 disabled:text-white dark:bg-[#222]"
                            variant="solid"
                            size="4"
                            type="button"
                            onClick={() => push("/")}
                        >
                            {page.register_three.cta_skip}
                        </Button>
                    </form>
                </Box>
            </Flex>
        </Container>
	);
};

export default RegistrationFormThree;
