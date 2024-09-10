'use client';

import React, { BaseSyntheticEvent, useState } from 'react';

import classNames from 'classnames';
import _ from 'lodash';

import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import { zodResolver } from '@hookform/resolvers/zod';
import { InfoCircledIcon } from '@radix-ui/react-icons';
import { Box, Callout, Flex, Text, Button, Spinner, Heading, Container, Radio } from '@radix-ui/themes';

import { accountTypes } from '@/utils/constants';
import { registrationFormOneSchema, RegistrationFormData } from './schema';
import { getMatchingUser, initializeUser } from '@/firebase/service';
import { CountryOption } from '@/utils/models';

import Conditional from '@/components/common/Conditional';
import ErrorMessage from '@/components/common/ErrorMessage';
import Picker from '@/components/common/Picker';
import PhoneInput from '@/components/ui/PhoneInput';
import RegistrationFormOneSkeleton from './RegistrationFormOneSkeleton';

import useCountries from '@/hooks/useCountries';
import useDictionary from '@/hooks/useDictionary';

interface Props {
    onInitializeUser: (userId: string) => void;
}

const RegistrationFormOne: React.FC<Props> = ({ onInitializeUser }) => {
	const [error, setError] = useState('');
	const [selectedCountry, setSelectedCountry] = useState<CountryOption>();

    const dictionary = useDictionary();

	const { countries, isFetching } = useCountries();
	const { control, handleSubmit, setError: setFieldError, setValue, watch, formState } = useForm<RegistrationFormData>({
		resolver: zodResolver(registrationFormOneSchema),
		mode: 'all',
	});

	const handleSubmitRegistrationFormOne = React.useCallback(
		async (data: RegistrationFormData, event: BaseSyntheticEvent<any, any, any> | undefined) => {
			if (event) event.preventDefault();

            try {
                const existingUser = await getMatchingUser('phoneNumber', data.phoneNumber);
                if (existingUser) return setError(dictionary.page.register_one.unique_error_message);

                const userId = await initializeUser(data);
				toast.success(dictionary.page.register_one.success);

                onInitializeUser(userId);
			} catch (error) {
				setError(dictionary.page.register_one.generic_error_message);
			}
		},
		[onInitializeUser, dictionary.page.register_one]
	);

    React.useEffect(() => {
		const subscription = watch((value, option) => {
			if (option.name === 'country' && value.country) {
				const option = countries.find((country) => country.value === value.country);
				if (option) setSelectedCountry(option);
			}
		});

		return () => subscription.unsubscribe();
	}, [watch, countries]);

	if (isFetching) return <RegistrationFormOneSkeleton />;

	return (
        <Container>
            <Flex flexGrow="1" justify="center" p={{ md: '9', initial: '3' }}>
                <Box as="div" className="w-full max-w-[30rem]">
                    <Conditional isVisible={!!error}>
                        <Callout.Root color="red" className="mb-5">
                            <Callout.Icon>
                                <InfoCircledIcon />
                            </Callout.Icon>
                            <Callout.Text>{error}</Callout.Text>
                        </Callout.Root>
                    </Conditional>

                    <form id="registration-one-form" onSubmit={handleSubmit(handleSubmitRegistrationFormOne)}>
                        <Heading size="7">{dictionary.page.register_one.title}</Heading>
                        <Text as='p' className="my-4 text-gray-500" size="2">{dictionary.page.register_one.description}</Text>

                        <Box className='mt-4' data-aos="fade-left">
                            <Text size="2" className="font-bold">
                                {dictionary.page.register_one.select_account_type}
                            </Text>

                            <Controller
                                name='accountType'
                                control={control}
                                render={({ field }) => {
                                    return (
                                        <>
                                            {accountTypes.map((type) => {
                                                const isSelected = field.value === type.title;

                                                return (
                                                    <Flex 
                                                        as="div"
                                                        key={type.title}
                                                        role="button"
                                                        onClick={() => setValue('accountType', type.title as RegistrationFormData['accountType'])}
                                                        align='center' 
                                                        gap='4' 
                                                        className={classNames({
                                                            'border rounded-md p-5 mt-3': true,
                                                            'bg-orange-50 border-orange-400': isSelected
                                                        })}
                                                    >
                                                        <Flex align='center' justify='center' width="3.5rem" height="3.5rem" className={classNames({
                                                            'rounded-full': true,
                                                            [type.color]: true,
                                                        })}>
                                                            <type.Icon size={30} />
                                                        </Flex>
            
                                                        <Box className='flex-1'>
                                                            <Heading size='2' className='leading-6'>{type.title}</Heading>
                                                            <Text as='p' size="1">{type.description}</Text>
                                                        </Box>
            
                                                        <Radio color="orange" checked={isSelected} {...field} value={type.title}  variant='classic' size='3'  />
                                                    </Flex>
                                                )
                                            })}
                                        </>
                                    );
                                }}
                            />

                            {formState.errors.accountType && (
                                <ErrorMessage>
                                    {formState.errors.accountType.message}
                                </ErrorMessage>
                            )}
                        </Box>

                        <Box className="w-full mt-5" data-aos="fade-right">
                            <Text size="2" className="font-bold">
                                {dictionary.page.register_one.country}
                            </Text>

                            <Box className="mt-2">
                                <Controller
                                    name="country"
                                    control={control}
                                    render={({ field }) => (
                                        <Picker {...field} options={countries} />
                                    )}
                                />
                            </Box>

                            {formState.errors.country && (
                                <ErrorMessage>
                                    {formState.errors.country.message}
                                </ErrorMessage>
                            )}
                        </Box>

                        <Box className="w-full mt-5" data-aos="fade-left">
                            <PhoneInput
                                name="phoneNumber"
                                control={control as any} 
                                selectedCountry={selectedCountry}
                                label={dictionary.page.register_one.phone_number}
                                onSetError={(errorMessage?: string) => setFieldError('phoneNumber', { message: errorMessage })}
                                onSetValue={(phoneNumber: string) => setValue('phoneNumber', phoneNumber)}
                                errorMessage={formState.errors.phoneNumber ? formState.errors.phoneNumber.message : undefined}
                            />
                        </Box>
                 
                        <Button
                            data-aos="zoom-in-up"
                            className="w-full mt-9 text-sm bg-primary disabled:bg-gray-600 disabled:text-white dark:bg-[#222]"
                            form="registration-one-form"
                            variant="solid"
                            size="4"
                            radius="small"
                            disabled={formState.isSubmitting}
                        >
                            {dictionary.page.register_one.cta}
                            {formState.isSubmitting && <Spinner />}
                        </Button>
                    </form>
                </Box>
            </Flex>
        </Container>
	);
};

export default RegistrationFormOne;
