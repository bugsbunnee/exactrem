'use client';

import React, { BaseSyntheticEvent, useState } from 'react';
import _ from 'lodash';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Callout, Text, TextField, Button, Spinner } from '@radix-ui/themes';
import { InfoCircledIcon } from '@radix-ui/react-icons';
import { Currency, CurrencyOption } from '@/utils/models';
import { FaMoneyBill } from 'react-icons/fa';

import { updateCurrencyRates } from '@/firebase/service';
import { getUpdateCurrencySchema } from './schema';

import Conditional from '@/components/common/Conditional';
import ErrorMessage from '@/components/common/ErrorMessage';
import NewCurrencySkeleton from './NewCurrencySkeleton';

import useCurrencies from '@/hooks/useCurrencies';

interface Props {
	currencyToUpdate: CurrencyOption
	onUpdateCurrency: () => void;
}

const UpdateCurrencyRate: React.FC<Props> = ({ currencyToUpdate, onUpdateCurrency }) => {
	const [error, setError] = useState('');

	const { currencies, isLoading } = useCurrencies();

	const currenciesToBeUpdated = Object.keys(currencies).filter((currency) => currency !== currencyToUpdate.value);
	const updateCurrencySchema = getUpdateCurrencySchema(currenciesToBeUpdated);
	
	type CurrencyData = z.infer<typeof updateCurrencySchema>;

	const {  handleSubmit, reset, formState, register } = useForm<CurrencyData>({
		resolver: zodResolver(updateCurrencySchema),
		mode: 'all',
	});

	const handleUpdateCurrency = React.useCallback(
		async (
			data: CurrencyData,
			event: BaseSyntheticEvent<any, any, any> | undefined
		) => {
			if (event) event.preventDefault();

			try {
				await updateCurrencyRates(currencyToUpdate.value, data);
				toast.success('Updated successfully');

				reset();
				onUpdateCurrency();
			} catch (error) {
				setError('Something failed. Try again');
			}
		},
		[reset, onUpdateCurrency, currencyToUpdate]
	);

	if (isLoading) return <NewCurrencySkeleton />;

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

			<form id="update-currency-rate-form" onSubmit={handleSubmit(handleUpdateCurrency)}>
				<Box className="w-full">
					{currenciesToBeUpdated.map((currency) => (
						<Box className="w-full mt-4" key={currency}>
							<Text size="2" className="font-bold">
								{currency}
							</Text>

							<TextField.Root
								mt="3"
								radius="small"
								variant="surface"
								color="gray"
								className="focus:border-orange-600"
								size="3"
								defaultValue={currencyToUpdate.rates[currency] || 0}
								{...register(currency, { valueAsNumber: true })}
							>
								<TextField.Slot>
									<FaMoneyBill height="16" width="16" className="text-primary" />
								</TextField.Slot>
							</TextField.Root>

							{formState.errors[currency] && (
								<ErrorMessage>
									{formState.errors[currency].message}
								</ErrorMessage>
							)}
						</Box>
					))}

					<Box className="min-w-32 max-sm:w-full" my="6">
						<Button
							className="w-full bg-black dark:bg-[#222] disabled:text-white disabled:bg-gray-400 text-sm"
							form="update-currency-rate-form"
							variant="solid"
							size="3"
							disabled={formState.isSubmitting}
						>
							Update Rates
							{formState.isSubmitting && <Spinner />}
						</Button>
					</Box>
				</Box>
			</form>
		</Box>
	);
};

export default UpdateCurrencyRate;
