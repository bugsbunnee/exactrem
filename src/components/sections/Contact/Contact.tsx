'use client';

import React, { BaseSyntheticEvent, useState } from 'react';
import _ from 'lodash';

import { z } from 'zod';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import { zodResolver } from '@hookform/resolvers/zod';
import {
	Box,
	Callout,
	Card,
	Flex,
	Text,
	TextField,
	Button,
	Spinner,
	Separator,
	TextArea,
} from '@radix-ui/themes';
import { EnvelopeClosedIcon, InfoCircledIcon, PersonIcon } from '@radix-ui/react-icons';

import { contactSchema } from '@/components/sections/Contact/schema';
import { CountryOption } from '@/utils/models';

import Conditional from '@/components/common/Conditional';
import ContactSkeleton from '@/components/sections/Contact/ContactSkeleton';
import ErrorMessage from '@/components/common/ErrorMessage';
import Picker from '@/components/common/Picker';
import PhoneInput from '@/components/ui/PhoneInput';
import SocialLinks from '@/components/ui/SocialLinks';

import useCountries from '@/hooks/useCountries';

type ContactData = z.infer<typeof contactSchema>;

const Contact: React.FC = () => {
	const [error, setError] = useState('');
	const [selectedCountry, setSelectedCountry] = useState<CountryOption>();

	const { countries, isFetching } = useCountries();
	const {
		control,
		handleSubmit,
		register,
		reset,
		setValue,
		setError: setFieldError,
		watch,
		formState,
	} = useForm<ContactData>({
		resolver: zodResolver(contactSchema),
		mode: 'all',
	});

	const handleSubmitContact = React.useCallback(
		async (
			data: ContactData,
			event: BaseSyntheticEvent<any, any, any> | undefined
		) => {
			if (event) event.preventDefault();

			try {
				// await sendEmail({
				// 	first_name: data.firstName,
				// 	last_name: data.lastName,
				// 	message: data.message,
				// 	from_email: data.email,
				// });

				toast.success("Thank you! We'll be in touch!");

				reset();
			} catch (error) {
				setError('Ooops! Looks like something went wrong. Please try again.');
			}
		},
		[reset]
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

	if (isFetching) return <ContactSkeleton />;

	return (
		<Flex flexGrow="1" justify="center">
			<Box as="div" className='rounded-tl-3xl rounded-br-3xl md:max-w-2xl w-full border-white border-2 p-4'>
				<Card className="shadow-lg p-8">
					<Conditional isVisible={!!error}>
						<Callout.Root color="red" className="mb-5">
							<Callout.Icon>
								<InfoCircledIcon />
							</Callout.Icon>
							<Callout.Text>{error}</Callout.Text>
						</Callout.Root>
					</Conditional>

					<form id="contact-form" onSubmit={handleSubmit(handleSubmitContact)}>
						<Flex justify="center" align="center" gap="6">
							<Box className="w-full">
								<Flex
									flexGrow="1"
									gap="9"
									direction={{ lg: 'row', initial: 'column' }}
								>
									<Box className="w-full">
										<Text size="2" className="font-bold">
											First Name:
										</Text>

										<TextField.Root
											mt="3"
											radius="small"
											variant="surface"
											color="gray"
											size="3"
											{...register('firstName')}
										>
											<TextField.Slot>
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
										<Text size="2" className="font-bold">
											Last Name:
										</Text>

										<TextField.Root
											mt="3"
											radius="small"
											variant="surface"
											color="gray"
											size="3"
											{...register('lastName')}
										>
											<TextField.Slot>
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

								<Separator my="5" orientation="horizontal" size="4" />

								<Box className="w-full">
									<Text size="2" className="font-bold">
										Company Name:
									</Text>

									<TextField.Root
										mt="3"
										radius="small"
										variant="surface"
										color="gray"
										size="3"
										{...register('companyName')}
									>
										<TextField.Slot>
											<PersonIcon height="16" width="16" />
										</TextField.Slot>
									</TextField.Root>

									{formState.errors.companyName && (
										<ErrorMessage>
											{formState.errors.companyName.message}
										</ErrorMessage>
									)}
								</Box>

								<Separator my="5" orientation="horizontal" size="4" />

								<Flex
									flexGrow="1"
									gap="9"
									direction={{ lg: 'row', initial: 'column' }}
								>
									<Box className="w-full">
										<Text size="2" className="font-bold">
											Email:
										</Text>

										<TextField.Root
											radius="small"
											mt="3"
											variant="surface"
											color="gray"
											size="3"
											className="focus:outline-0 text-sm"
											{...register('email')}
										>
											<TextField.Slot>
												<EnvelopeClosedIcon height="16" width="16" />
											</TextField.Slot>
										</TextField.Root>

										{formState.errors.email && (
											<ErrorMessage>
												{formState.errors.email.message}
											</ErrorMessage>
										)}
									</Box>

									<Box className="w-full">
										<Text size="2" className="font-bold">
											Country:
										</Text>

										<Box className="mt-4">
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
								</Flex>

								<Separator my="5" orientation="horizontal" size="4" />

								<Flex
									flexGrow="1"
									gap="9"
									direction={{ lg: 'row', initial: 'column' }}
								>
									<PhoneInput 
										name="phoneNumber"
										control={control as any} 
										selectedCountry={selectedCountry}
										label="Phone number:"
										onSetError={(errorMessage) => setFieldError('phoneNumber', { message: errorMessage })}
										onSetValue={(phoneNumber) => setValue('phoneNumber', phoneNumber)}
										errorMessage={formState.errors.phoneNumber ? formState.errors.phoneNumber.message : undefined}
									/>

									<Box className="w-full">
										<Text size="2" className="font-bold">
											Message:
										</Text>

										<Box className="mt-4">
											<TextArea
												radius="small"
												mt="1"
												variant="surface"
												placeholder="Enter a message"
												color="gray"
												size="3"
												className="focus:outline-0 text-sm"
												{...register('message')}
											/>
										</Box>

										{formState.errors.message && (
											<ErrorMessage>
												{formState.errors.message.message}
											</ErrorMessage>
										)}
									</Box>
								</Flex>

								<Flex
									flexGrow="1"
									justify={{ sm: 'between', initial: 'center' }}
									gap={{ sm: '9', initial: '1' }}
									direction={{ sm: 'row', initial: 'column' }}
								>
									<Box className="min-w-32 max-sm:w-full" my="6">
										<Button
											className="w-full bg-slate-800 dark:bg-[#222] text-sm"
											form="contact-form"
											variant="solid"
											size="3"
											disabled={formState.isSubmitting}
										>
											Send message
											{formState.isSubmitting && <Spinner />}
										</Button>
									</Box>

									<SocialLinks />
								</Flex>
							</Box>
						</Flex>
					</form>
				</Card>
			</Box>
		</Flex>
	);
};

export default Contact;
