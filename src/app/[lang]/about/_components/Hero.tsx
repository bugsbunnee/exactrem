"use client";

import React from 'react';

import Conditional from '@/components/common/Conditional';
import Link from 'next/link';

import { Box, Button, Flex, Heading, Text } from '@radix-ui/themes';

import useDictionary from '@/hooks/useDictionary';

const AboutHero = () => {
	const dictionary = useDictionary();

	return (
		<section className="p-20">
			<Box className="text-center w-full flex justify-center items-center">
			    <Box className="text-center max-w-[45rem]">
                    <Heading className="leading-10 font-bold" size="9">
                        About <span className='text-orange-600'>Extractem</span>
                    </Heading>

                    <Text as="p" className="my-12 leading-7" size="3">
                        Exactrem Canada is a MSB licenced Company has been approved 
                        by FINTRAC for Money transferring services, Dealing in virtual 
                        currencies and Payment service provider services.
                    </Text>
			    </Box>
			</Box>

			<Flex justify="center" align="center" gap="4">
				<Button  size='4' className="bg-stone-950 text-sm font-semibold">
                    Meet the team
                </Button>
				
                <Button variant='outline' size='4' color='orange' className="text-sm font-semibold">
                    Our investors
                </Button>
			</Flex>
		</section>
	);
};

export default AboutHero;
