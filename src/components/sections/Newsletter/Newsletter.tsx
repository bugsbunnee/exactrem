'use client';

import React, { BaseSyntheticEvent, useState } from 'react';
import _ from 'lodash';

import Conditional from '@/components/common/Conditional';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Callout, Container, Flex, Heading, Text, TextField, Button, Spinner } from '@radix-ui/themes';
import { InfoCircledIcon } from '@radix-ui/react-icons';

import { newsletterSchema } from '@/components/sections/Newsletter/schema';
import { addSubscription } from '@/firebase/service';

type NewsletterData = z.infer<typeof newsletterSchema>;

const Newsletter: React.FC = () => {
	const [error, setError] = useState('');

	const { handleSubmit, register, reset, formState } = useForm<NewsletterData>({
		resolver: zodResolver(newsletterSchema),
		mode: 'all',
	});

	const handleSubscribeToNewsletter = React.useCallback(
		async (data: NewsletterData, event: BaseSyntheticEvent<any, any, any> | undefined) => {
			if (event) event.preventDefault();

			try {
				addSubscription(data.email);
				toast.success("Thank you! We'll be in touch!");

				reset();
			} catch (error) {
				setError('Ooops! Looks like something went wrong. Please try again.');
			}
		},
		[reset]
	);

    const errorMessage = error || formState.errors.email?.message;

	return (
		<Flex flexGrow="1" justify="center">
			<Container>
				<Flex justify='center' align='center'>
					<form className='max-w-[40rem] rounded-sm bg-black dark:bg-white p-12' id="newsletter-form" onSubmit={handleSubmit(handleSubscribeToNewsletter)}>
						<Heading size='7' className='text-white dark:text-black text-center'>Want updates straight to your inbox?</Heading>

						<Flex align="center" className="mt-4 mb-9" justify="center">
							<Text as='p' className='text-white dark:text-black text-center'>
								Enter your email to get the latest news from the Exactrem team, and knowledge you need to build a profitable business.
							</Text>
						</Flex>

						<Flex gap="5" align="center" direction={{ lg: 'row', initial: 'column' }}>
							<Box className="w-full">
								<TextField.Root
									radius="small"
									variant="soft"
									color="gray"
									placeholder="Enter email address"
									className='bg-white dark:bg-[#222]'
									size="3"
									{...register('email')}
								/>
							</Box>

							<Button
									className="bg-primary text-sm"
									form="newsletter-form"
									variant="solid"
									size="3"
									disabled={formState.isSubmitting}
								>
									Send message
									{formState.isSubmitting && <Spinner />}
								</Button>
						</Flex>

						<Conditional isVisible={!!errorMessage}>
							<Callout.Root color="red" className="mt-5">
								<Callout.Icon>
									<InfoCircledIcon />
								</Callout.Icon>
								<Callout.Text>{errorMessage}</Callout.Text>
							</Callout.Root>
						</Conditional>
					</form>
				</Flex>
			</Container>
		</Flex>
	);
};

export default Newsletter;
