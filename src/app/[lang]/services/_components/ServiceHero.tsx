"use client";

import React from 'react';

import { Box, Button, Flex, Heading, Text } from '@radix-ui/themes';

import AppButton from '@/components/ui/Button';
import useDictionary from '@/hooks/useDictionary';

const ServiceHero = () => {
	const dictionary = useDictionary();

	return (
		<section className="p-20 bg-orange-50 dark:bg-white">
			<Box className="text-center w-full flex justify-center items-center">
			    <Box className="text-center max-w-[35rem]">
                    <Heading className="leading-12 font-bold dark:text-black" size="9">
                        {dictionary.page.services.hero.title}<span className='text-orange-600'>{dictionary.page.services.hero.title_one}</span>
                    </Heading>

                    <Flex justify='center' align='center'>
                        <Text as="p" className="my-12 leading-7 max-w-62 dark:text-black" size="6">
							{dictionary.page.services.hero.description}
                        </Text>
                    </Flex>
			    </Box>
			</Box>

			<Flex justify="center" align="center" gap="4">
				<AppButton label={dictionary.page.services.hero.cta} route='/register'  />
			</Flex>
		</section>
	);
};

export default ServiceHero;
