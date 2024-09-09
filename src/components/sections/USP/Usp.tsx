import React from 'react';

import { Box, Container, Flex, Grid, Heading, Text } from '@radix-ui/themes';
import { FcCustomerSupport, FcFlashOn, FcPrivacy } from 'react-icons/fc';

import AppButton from '@/components/ui/Button';
import UspSkeleton from './UspSkeleton';

import useDictionary from '@/hooks/useDictionary';

const Usp = () => {
	const dictionary = useDictionary();
	if (!dictionary) return <UspSkeleton />;

	const getMatchingIcon = (icon: string) => {
		switch (icon) {
			case 'safe':
				return <FcPrivacy size={50} />;
			case 'fast':
				return <FcFlashOn size={50} />;
			case 'support':
				return <FcCustomerSupport size={50} />;
		}
	};

	return (
		<section className="p-16">
			<Heading className="text-center mb-20" size="8">
				{dictionary.page.usp.heading}
			</Heading>

			<Container>
				<Grid columns="3" justify="center" align="center" gap="8">
					{Object.values(dictionary.page.usp.cards).map((card) => (
						<Box className="transition-all duration-300 hover:shadow-xl hover:scale-105 p-10 rounded-sm bg-stone-50 dark:bg-transparent dark:border-stone-50 dark:border" key={card.description}>
							<Flex align="center" justify="center">
								<Box className="w-20 h-20 flex items-center justify-center mb-8 rounded-3xl bg-stone-100 dark:bg-[#222]">
									{getMatchingIcon(card.image)}
								</Box>
							</Flex>

							<Heading
								className="leading-3 font-bold text-center my-6"
								size="4"
							>
								{card.title}
							</Heading>

							<Box className="min-h-28">
								<Text as="p" className="leading-6 text-center" size="2">
									{card.description}
								</Text>
							</Box>

							<Box mt="5" className="flex items-center justify-center">
								<AppButton
									label={card.cta}
									onClick={() => console.log(card.cta)}
								/>
							</Box>
						</Box>
					))}
				</Grid>
			</Container>
		</section>
	);
};

export default Usp;
