"use client";

import React from 'react';
import { Box, Flex, Heading, Text } from '@radix-ui/themes';

import Button from '@/components/ui/Button';
import useDictionary from '@/hooks/useDictionary';

const AboutHero = () => {
	const dictionary = useDictionary();

	return (
		<section className="p-20">
			<Box className="text-center w-full flex justify-center items-center">
			    <Box className="text-center max-w-[45rem]">
                    <Heading data-aos="fade-down" className="leading-12 font-bold" size="9">
                        {dictionary.page.about.title.one} <span className='text-orange-600'>{dictionary.page.about.title.two}</span>
                    </Heading>

                    <Text data-aos="fade-up" as="p" className="my-12 leading-7" size="3">
                        {dictionary.page.about.description}
                    </Text>
			    </Box>
			</Box>


			<Flex data-aos-delay="500" data-aos="zoom-in" justify="center" align="center" gap="4">
				<Button label={dictionary.page.about.cta} route="/contact" />
			</Flex>
		</section>
	);
};

export default AboutHero;
