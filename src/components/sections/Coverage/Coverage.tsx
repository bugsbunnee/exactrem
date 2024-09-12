import React from 'react';
import Image from 'next/image';

import { Box, Container, Flex, Grid, Heading, Text } from '@radix-ui/themes';

import useDictionary from '@/hooks/useDictionary';
import useCurrencies from '@/hooks/useCurrencies';

const Coverage = () => {
	const { currencies } = useCurrencies();
	const { page } = useDictionary();

	return (
		<section className="p-20 my-10">
			<Container>
				<Heading className="text-center mb-10" size="8" data-aos="fade-left" >
					{page.coverage.title} 
				</Heading>

				<Flex justify='center'>
					<Text className="text-center max-w-[40rem]" data-aos="fade-right" >
						{page.coverage.description} 
					</Text>
				</Flex>

				<Grid
					columns="4"
					className="my-20"
					gap="1"
					align="center"
					justify="center"
				>
					{Object.values(currencies).map((currency, index) => (
						<Box
							className="flex items-center justify-center"
							key={currency.value}
							data-aos="flip-up" 
							data-aos-delay={index * 300} 
						>
							<Box className="bg-stone-50 dark:bg-[#222] w-52 h-52 rounded-sm flex items-center justify-center">
								<Box className="text-center">
									<Flex justify='center' align='center'>
										<Image
											src={currency.src}
											alt={currency.label}
											width={70}
											height={70}
											className="object-cover"
										/>
									</Flex>

									<Box className="mt-3 mb-2">
										<Text size="4" className="font-bold capitalize">
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
