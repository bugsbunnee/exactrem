'use client';

import Image from 'next/image';
import React from 'react';

import { Box, Flex, Select, Text } from '@radix-ui/themes';
import { Currency } from '@/utils/models';
import { currencies } from '@/utils/constants';

interface Props {
	defaultValue: Currency;
	onSelectCurrency: (currency: Currency) => void;
}

const CurrencySwitcher: React.FC<Props> = ({
	defaultValue,
	onSelectCurrency,
}) => {
	return (
		<Flex direction="column" maxWidth="10rem">
			<Select.Root
				defaultValue={defaultValue}
				onValueChange={(currency: Currency) => onSelectCurrency(currency)}
			>
				<Select.Trigger variant="ghost" className="focus:outline-none">
					<Flex as="span" align="center" gap="2">
						<Flex
							className="w-5 h-5 rounded-full overflow-hidden"
							justify="center"
							align="center"
						>
							<Image
								src={currencies[defaultValue].src}
								alt={currencies[defaultValue].label}
								width={500}
								height={500}
								className="w-full h-full object-contain"
							/>
						</Flex>

						<Text className="uppercase text-gray-900 font-bold">
							{currencies[defaultValue].value}
						</Text>
					</Flex>
				</Select.Trigger>

				<Select.Content className="w-full" position="popper">
					{Object.values(currencies).map((currency) => (
						<Select.Item
							className="p-5 min-h-16"
							key={currency.value}
							value={currency.value}
						>
							<Flex gap="2" justify="center" align="center" className="p-3">
								<Box className="w-8 h-8 rounded-full flex justify-center items-center bg-gray-300">
									<Image
										src={currency.src}
										alt={currency.label}
										width={10}
										height={10}
										className="w-5 h-5 object-contain"
									/>
								</Box>

								<Box className="grow">
									<Box>
										<Text className="font-bold text-gray-700" size="2">
											{currency.label}
										</Text>
									</Box>
									<Text>{currency.value}</Text>
								</Box>
							</Flex>
						</Select.Item>
					))}
				</Select.Content>
			</Select.Root>
		</Flex>
	);
};

export default CurrencySwitcher;
