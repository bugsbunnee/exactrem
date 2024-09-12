'use client';

import React, { BaseSyntheticEvent, useState } from 'react';
import _ from 'lodash';

import { z } from 'zod';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Callout, Text, TextField, Button, Spinner } from '@radix-ui/themes';
import { ChatBubbleIcon, InfoCircledIcon } from '@radix-ui/react-icons';
import { CountryOption, CurrencyOption, PickerOption } from '@/utils/models';

import { addCurrency } from '@/firebase/service';
import { newCurrencySchema } from './schema';

import Conditional from '@/components/common/Conditional';
import ErrorMessage from '@/components/common/ErrorMessage';
import NewCurrencySkeleton from './NewCurrencySkeleton';
import Picker from '@/components/common/Picker';

import useCountries from '@/hooks/useCountries';
import useCurrencies from '@/hooks/useCurrencies';

type CurrencyData = z.infer<typeof newCurrencySchema>;

interface Props {
	onAddCurrency: () => void;
}

const NewCurrency: React.FC<Props> = ({ onAddCurrency }) => {
	const [error, setError] = useState('');
	const [selectedCountry, setSelectedCountry] = useState<CountryOption>();
	const [selectedCurrency, setSelectedCurrency] = useState<PickerOption>();

	const { currencies } = useCurrencies();
	const { countries, isFetching } = useCountries();
	const { control, handleSubmit, reset, formState, setValue, watch } = useForm<CurrencyData>({
		resolver: zodResolver(newCurrencySchema),
		mode: 'all',
	});

	const handleCreateCurrency = React.useCallback(
		async (
			data: CurrencyData,
			event: BaseSyntheticEvent<any, any, any> | undefined
		) => {
			if (event) event.preventDefault();

			const currencyList = Object.values(currencies);

			const matchingCurrency = currencyList.find((currency) => currency.value === data.value);
			if (matchingCurrency) return setError('Currency already added!');

			const rates: Record<string, number> = {};
			currencyList.forEach((currency) => rates[currency.value] = 0);

			try {
				await addCurrency({ ...data, rates } as CurrencyOption);
				toast.success('Added successfully');

				reset({ label: '', src: '', value: '' });
				onAddCurrency();
			} catch (error) {
				setError('Something failed. Try again');
			}
		},
		[reset, currencies, onAddCurrency]
	);

	React.useEffect(() => {
		const subscription = watch((value, option) => {
			if (option.name === 'src' && value.src) {
				if (selectedCurrency) setSelectedCurrency(undefined);

				const option = countries.find((country) => country.src === value.src);
				if (option) setSelectedCountry(option);
			}
		});

		return () => subscription.unsubscribe();
	}, [watch, countries, selectedCurrency]);
	
	React.useEffect(() => {
		const subscription = watch((value, option) => {
			if (option.name === 'value' && value.value && selectedCountry) {
				const option = selectedCountry.currencies.find((option) => option.value === value.value)
				if (option) {
					setSelectedCurrency(option);
					setValue('label', option.label);
				}
			}
		});

		return () => subscription.unsubscribe();
	}, [watch, countries, selectedCountry, setValue]);

	if (isFetching) return <NewCurrencySkeleton />;

	return (
		<Box>
			<Conditional isVisible={!!error}>
				<Callout.Root color="red" className="mb-5">
					<Callout.Icon>
						<InfoCircledIcon />
					</Callout.Icon>
					<Callout.Text>{error}</Callout.Text>
				</Callout.Root>
			</Conditional>

			<form id="new-currency-form" onSubmit={handleSubmit(handleCreateCurrency)}>
				<Box className="w-full">
					<Box className="w-full">
						<Text size="2" className="font-bold">
							Country
						</Text>

						<Box className="mt-4">
							<Controller
								name="src"
								control={control}
								render={({ field }) => (
									<Picker {...field} options={countries.map((country) => ({ ...country, value: country.src }))} placeholder="Select a country" />
								)}
							/>
						</Box>

						{formState.errors.src && (
							<ErrorMessage>
								{formState.errors.src.message}
							</ErrorMessage>
						)}
					</Box>

					{selectedCountry && (
						<Box className="w-full mt-4">
							<Text size="2" className="font-bold">
								Value
							</Text>

							<Controller
								name="value"
								control={control}
								render={({ field }) => (
									<Picker {...field} options={selectedCountry.currencies} placeholder="Select a currency" />
								)}
							/>

							{formState.errors.value && (
								<ErrorMessage>
									{formState.errors.value.message}
								</ErrorMessage>
							)}
						</Box>
					)}

					{selectedCurrency && (
						<Box className="w-full mt-4">
							<Text size="2" className="font-bold">
								Currency Label
							</Text>

							<TextField.Root
								mt="3"
								radius="small"
								variant="surface"
								color="gray"
								className="focus:border-orange-600"
								size="3"
								disabled
								value={selectedCurrency.label}
							>
								<TextField.Slot>
									<ChatBubbleIcon height="16" width="16" />
								</TextField.Slot>
							</TextField.Root>

							{formState.errors.label && (
								<ErrorMessage>
									{formState.errors.label.message}
								</ErrorMessage>
							)}
						</Box>
					)}
					
					<Box className="min-w-32 max-sm:w-full" my="6">
						<Button
							className="w-full bg-black dark:bg-[#222] disabled:text-white disabled:bg-gray-400 text-sm"
							form="new-currency-form"
							variant="solid"
							size="3"
							disabled={formState.isSubmitting}
						>
							Add currency
							{formState.isSubmitting && <Spinner />}
						</Button>
					</Box>
				</Box>
			</form>
		</Box>
	);
};

export default NewCurrency;
