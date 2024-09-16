"use client";

import React from 'react';

import { Box,  Container,  Flex, Heading, Text } from '@radix-ui/themes';

import AppButton from '@/components/ui/Button';
import Converter from '@/components/common/Converter';

interface Props {
    titleOne: string;
    titleTwo: string;
    description: string;
    ctaText: string;
}

const ServiceSlugHero: React.FC<Props> = ({ ctaText, description, titleOne, titleTwo }) => {
	return (
		<section className='py-32 max-lg:px-10 bg-gray-800'>
			<Container> 
                <Flex gap={{ initial: '9', md: '5' }} direction={{ initial: 'column', md: 'row' }} justify="center" align="start">
                    <Box className="flex-1">
                        <Box className="text-left rounded-br-full w-full flex justify-start items-center">
                            <Box className="max-w-xl">
                                <Heading data-aos="fade-up" className="leading-12 font-bold text-white" size={{ initial: "8", md: "9" }}>
                                    {titleOne}<span className='text-orange-600'>{titleTwo}</span>
                                </Heading>

                                <Flex data-aos="fade-down" justify='start' align='center'>
                                    <Text as="p" className="my-12 leading-7  text-white" size={{ initial: "4", md: "6" }}>
                                        {description}
                                    </Text>
                                </Flex>
                            </Box>
                        </Box>

                        <Flex data-aos="zoom-in-up" data-aos-delay="500" justify="start" align="center">
                            <AppButton label={ctaText} route='/register' mode='dark'  />
                        </Flex>
                    </Box>

                    <Box className="text-white animate__animated animate__backInUp max-lg:flex-1 max-lg:flex max-lg:justify-center max-lg:items-center">
                        <Converter />
                    </Box>
                </Flex>
			</Container>
			
		</section>
	);
};

export default ServiceSlugHero;
