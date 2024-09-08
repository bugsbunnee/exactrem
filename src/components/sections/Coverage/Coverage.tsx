import { currencies } from '@/utils/constants';
import { Box, Container, Grid, Heading, Text, Card } from '@radix-ui/themes';
import Image from 'next/image';
import React from 'react';

const Coverage = () => {
	return (
		<section className="p-20 my-10">
			<Container>
				<Heading className="text-center mb-10" size="8">
					Regulated Excellence
				</Heading>

				<Box className="text-center">
					<Text className="text-center">
						Verto upholds the highest regulatory standards globally, ensuring
						each transaction meets strict compliance requirements. Trust in
						Verto is anchored in our unwavering commitment to regulatory
						excellence.
					</Text>
				</Box>

				<Grid
					columns="3"
					className="my-20"
					gap="1"
					align="center"
					justify="center"
				>
					{Object.values(currencies).map((currency) => (
						<Box
							className="flex items-center justify-center"
							key={currency.value}
						>
							<Box className="bg-stone-50 dark:bg-[#222] w-52 h-52 rounded-2xl flex items-center justify-center">
								<Box className="text-center">
									<Image
										src={currency.src}
										alt="EUR"
										width={70}
										height={70}
										className="object-cover"
									/>

									<Box className="mt-3 mb-2">
										<Text size="4" className="font-bold uppercase">
											{currency.label}
										</Text>
									</Box>

									<Text size="2" className="uppercase">
										{currency.value}
									</Text>
								</Box>
							</Box>
						</Box>
					))}
				</Grid>
			</Container>
		</section>
	);
};

export default Coverage;
