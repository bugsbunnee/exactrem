import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import { Box, Flex, Text } from '@radix-ui/themes';
import { Currency } from '@/utils/models';
import { formatMoney } from '@/utils/lib';

interface Props {
	userSrc: string;
	flagSrc: string;
	backgroundColor: string;
	userFirstName: string;
	countryName: string;
	currency: Currency;
	price: number;
}

const TransferCard: React.FC<Props> = ({
	backgroundColor,
	countryName,
	currency,
	userFirstName,
	userSrc,
	flagSrc,
	price,
}) => {
	return (
		<Box className="h-auto">
			<Box
				className={classNames({
					'sample-transfer-card relative': true,
					[backgroundColor]: true,
				})}
			>
				<Image
					src={userSrc}
					alt={userFirstName}
					width={600}
					height={1000}
					className="absolute bottom-0 object-cover"
				/>

				<Flex justify="center">
					<Box className="w-30 z-50 absolute -bottom-20 rounded-md bg-white p-3 shadow-2xl">
						<Flex className="w-max flex items-center justify-center" gap="3">
							<Box className="w-10 h-10 rounded-full">
								<Image src={flagSrc} alt={countryName} width={40} height={40} />
							</Box>

							<Box>
								<Box>
									<Text size="1" className="text-gray-500">
										From
									</Text>
								</Box>
								<Text size="2" className="text-gray-800 font-bold">
									{userFirstName}
								</Text>
							</Box>
						</Flex>

						<Box className="mt-2">
							<Box>
								<Text size="1" className="text-gray-500">
									To {countryName}
								</Text>
							</Box>
							<Text size="2" className="text-gray-800 font-semibold">
								{formatMoney(currency, price)}
							</Text>
						</Box>
					</Box>
				</Flex>
			</Box>
		</Box>
	);
};

export default TransferCard;
