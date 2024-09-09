"use client";

import React from 'react';
import { Box, Button, Flex, Heading, Text } from '@radix-ui/themes';

import useDictionary from '@/hooks/useDictionary';

const AboutHero = () => {
	const dictionary = useDictionary();

	return (
		<section className="p-20">
			<Box className="text-center w-full flex justify-center items-center">
			    <Box className="text-center max-w-[45rem]">
                    <Heading className="leading-10 font-bold" size="9">
                        {dictionary.page.about.title.one} <span className='text-orange-600'>{dictionary.page.about.title.two}</span>
                    </Heading>

                    <Text as="p" className="my-12 leading-7" size="3">
                        {dictionary.page.about.description}
                    </Text>
			    </Box>
			</Box>

			<Flex justify="center" align="center" gap="4">
				<Button  size='4' className="bg-stone-950 text-sm font-semibold">
                    {dictionary.page.about.cta_one}
                </Button>
				
                <Button variant='outline' size='4' color='orange' className="text-sm font-semibold">
                    {dictionary.page.about.cta_two}
                </Button>
			</Flex>
		</section>
	);
};

export default AboutHero;
