import React from 'react';

import Button from '@/components/ui/Button';
import Conditional from '@/components/common/Conditional';
import Link from 'next/link';

import { Box, Flex, Heading, Text } from '@radix-ui/themes';

import useDictionary from '@/hooks/useDictionary';

const Hero = () => {
	const dictionary = useDictionary();

	return (
		<section className="p-20">
			<Box className="text-center">
				<Heading data-aos="fade-down" className="leading-10 text-orange-600 font-bold" size="9">
					{dictionary.page.hero.heading_one}
				</Heading>
				<Heading data-aos="fade-up" className="font-bold mt-5" size="9">
					{dictionary.page.hero.heading_two}
				</Heading>
			</Box>

			<Flex
				direction="column"
				justify="center"
				align="center"
				className="mt-10"
				data-aos-delay="500"
				data-aos="zoom-in"
			>
				<Button label={dictionary.page.hero.cta} route='/register' />

				<Conditional isVisible={false}>
					<Box className="mt-5">
						<Text className="font-semibold" color="gray" size="2">
							{dictionary.page.hero.rating}
						</Text>
					</Box>

					<Box className="mt-2">
						<Text color="gray" size="2">
							{dictionary.page.hero.reviews}{' '}
							<Link className="underline" href="/pilot">
								{dictionary.page.hero.review_link}
							</Link>
						</Text>
					</Box>
				</Conditional>
			</Flex>
		</section>
	);
};

export default Hero;
