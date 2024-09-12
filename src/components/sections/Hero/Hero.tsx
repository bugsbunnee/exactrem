import React from 'react';

import Button from '@/components/ui/Button';

import { Box, Container, Flex, Heading, Text } from '@radix-ui/themes';

import useDictionary from '@/hooks/useDictionary';

const Hero = () => {
	const dictionary = useDictionary();

	return (
		<section className='p-24 bg-gradient-to-r from-orange-100 via-purple-100 to-orange-100 dark:from-transparent'>
			<Container>
				<Flex justify='center' align='center'>
					<Box className='max-w-[42rem] text-center'>
						<Heading data-aos="fade-down" className="leading-12 text-orange-600 font-bold" size="9">
							{dictionary.page.hero.heading_one} <span className="text-black dark:text-white">{dictionary.page.hero.heading_two}</span>
						</Heading>

						<Text as="p" data-aos="fade-up" className="text-black dark:text-white mt-7 mb-14" size="5">
							{dictionary.page.hero.description}
						</Text>

						<Flex justify='center' align='center'>
							<Box data-aos="fade-down" data-aos-delay="500">
								<Button label={dictionary.page.hero.cta} route="/register" />
							</Box>
						</Flex>
					</Box>
				</Flex>
			</Container>
		</section>
	);
};

export default Hero;
