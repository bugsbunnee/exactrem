'use client';

import classNames from 'classnames';

import { useCallback, useState } from 'react';
import { BoxModelIcon, CaretSortIcon, LightningBoltIcon } from '@radix-ui/react-icons';
import { Box, Flex, Text, IconButton, Button } from '@radix-ui/themes';

import { Currency, CurrencyOption } from '@/utils/models';
import { currencies } from '@/utils/constants';

import CurrencySwitcher from '@/components/common/CurrencySwitcher';
import useDictionary from '@/hooks/useDictionary';

const { NGN, USD } = currencies;

const Converter = () => {
	const [senderInfo, setSenderInfo] = useState<CurrencyOption>(USD);
	const [receiverInfo, setReceiverInfo] = useState<CurrencyOption>(NGN);
	const [activeCurrency, setActiveCurrency] = useState<Currency>(senderInfo.value);
	const [isSenderFocused, setSenderFocused] = useState(false);
	const [isReceiverFocused, setReceiverFocused] = useState(false);
	const [senderAmount, setSenderAmount] = useState(0);
	const [receiverAmount, setReceiverAmount] = useState(0);

	const dictionary = useDictionary();

	const handleSenderAmountUpdate = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const parsedSenderAmount = parseInt(event.target.value);
		const newSenderAmount = parsedSenderAmount ? parsedSenderAmount : 0;

		setSenderAmount(newSenderAmount);

		if (newSenderAmount === 0) setReceiverAmount(0);
		else {
			const rate = senderInfo.rates[receiverInfo.value];
			setReceiverAmount(parsedSenderAmount * rate);
		}
	};

	const handleReceiverAmountUpdate = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const parsedReceiverAmount = parseInt(event.target.value);
		const newReceiverAmount = parsedReceiverAmount ? parsedReceiverAmount : 0;

		setReceiverAmount(newReceiverAmount);

		if (newReceiverAmount === 0) setSenderAmount(0);
		else {
			const rate = senderInfo.rates[receiverInfo.value];
			setSenderAmount(parsedReceiverAmount / rate);
		}
	};

	const getBoxClass = useCallback((includeShadow: boolean) => {
		return classNames({
			'shadow-xl bg-white': includeShadow,
			'p-3 rounded-2xl w-full transition-all duration-500 ease-in-out relative':
				true,
		});
	}, []);

	const isSenderActive = activeCurrency === senderInfo.value;
	const isReceiverActive = activeCurrency === receiverInfo.value;

	return (
		<Box className="w-96">
			<Box className="w-full bg-stone-50 dark:bg-[#eee] rounded-2xl relative">
				<Flex gap="2" className={getBoxClass(isSenderActive)}>
					<Box className="min-w-24">
						<Text size="1" className="text-gray-700 leading-6">
							{dictionary.page.calculator.sending_from}
						</Text>

						<CurrencySwitcher
							defaultValue={senderInfo.value}
							onSelectCurrency={(currency) =>
								setSenderInfo(currencies[currency])
							}
						/>
					</Box>

					<input
						inputMode="numeric"
						onBlur={() => setSenderFocused(false)}
						value={
							isSenderFocused
								? senderAmount
								: senderAmount.toLocaleString('en-US')
						}
						className={classNames({
							'w-full rounded-lg bg-transparent hover:bg-[#eee] text-3xl font-bold h-14 px-3 text-right focus:outline-none focus:border-0':
								true,
							'text-blue-700': isSenderActive,
							'text-slate-900': !isSenderActive,
						})}
						onChange={handleSenderAmountUpdate}
						onFocus={() => {
							setSenderFocused(true);
							setActiveCurrency(senderInfo.value);
						}}
					/>
				</Flex>

				<Flex gap="2" className={getBoxClass(isReceiverActive)}>
					<Flex
						className="absolute -top-3 px-5 w-full"
						gap="4"
						justify="between"
					>
						<IconButton
							color="blue"
							radius="full"
							size="1"
							className="transition-all duration-500 ease-in-out hover:rotate-180"
							onClick={() => {
								const currentSender = senderInfo;
								const currentReceiver = receiverInfo;

								setSenderInfo(currentReceiver);
								setReceiverInfo(currentSender);
								setActiveCurrency(currentReceiver.value);
							}}
						>
							<CaretSortIcon width="18" height="18" />
						</IconButton>

						<Box>
							<Text className="bg-slate-900 rounded-full text-white text-xs py-1 px-2">
								1 {senderInfo.value} = {senderInfo.rates[receiverInfo.value]}{' '}
								{receiverInfo.value}
							</Text>
						</Box>
					</Flex>

					<Box className="min-w-24">
						<Text size="1" className="text-gray-700 leading-6">
							{dictionary.page.calculator.receiver_gets}
						</Text>

						<CurrencySwitcher
							defaultValue={receiverInfo.value}
							onSelectCurrency={(currency) =>
								setReceiverInfo(currencies[currency])
							}
						/>
					</Box>

					<input
						inputMode="numeric"
						onBlur={() => setReceiverFocused(false)}
						onChange={handleReceiverAmountUpdate}
						className={classNames({
							'w-full rounded-lg bg-transparent hover:bg-[#eee] dark:hover:bg-[#eee] text-3xl font-bold h-14 px-3 text-right focus:outline-none focus:border-0': true,
							'text-blue-700': isReceiverActive,
							'text-slate-900': !isReceiverActive,
						})}
						onFocus={() => {
							setReceiverFocused(true);
							setActiveCurrency(receiverInfo.value);
						}}
						value={
							isReceiverFocused
								? receiverAmount
								: receiverAmount.toLocaleString('en-US')
						}
					/>
				</Flex>
			</Box>

			<Flex justify="between" align="center" className="my-10">
				<Flex gap="2" align="center">
					<LightningBoltIcon
						className="text-yellow-400"
						width="18"
						height="18"
					/>

					<Text size="2" className="font-semibold">
						{dictionary.page.calculator.arrives_in_minutes}
					</Text>
				</Flex>

				<Flex className="bg-yellow-400 p-1 rounded-md" gap="1" align="center">
					<BoxModelIcon width="16" height="16" />

					<Text size="1" className="font-semibold uppercase">
						{dictionary.page.calculator.free}
					</Text>
				</Flex>
			</Flex>

			<Button color="blue" className="w-full text-sm" size="4">
				{dictionary.page.calculator.cta}
			</Button>
		</Box>
	);
};

export default Converter;
