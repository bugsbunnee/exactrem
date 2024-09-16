"use client";

import React from 'react';
import { Box, Container, Flex, Heading, Text } from '@radix-ui/themes';

import Button from '@/components/ui/Button';
import Lottie from '@/components/ui/Lottie';

import useDictionary from '@/hooks/useDictionary';
import transparent from '@/animations/transparent.json';

const InviteHero = () => {
	const dictionary = useDictionary();

	return (
		<section className="py-32">
            <Container>
                <Flex gap="9" direction={{ initial: "column", md: "row" }} justify="center" align="center">
                    <Box className="max-md:px-9">
                        <Box className="text-left w-full flex justify-center items-center">
                            <Box className=" max-w-[35rem]">
                                <Heading data-aos="fade-down" className="leading-12 font-bold" size={{ initial: "8", md: "9" }}>
                                    {dictionary.page.invite.title.one} <span className='text-orange-600'>{dictionary.page.invite.title.two}</span>
                                </Heading>

                                <Text data-aos="fade-up" as="p" className="my-12 leading-7" size="3">
                                    {dictionary.page.invite.description}
                                </Text>
                            </Box>
                        </Box>


                        <Flex data-aos-delay="500" data-aos="zoom-in" justify="start" align="center" gap="4">
                            <Button label={dictionary.page.invite.cta} route="/register" />
                        </Flex>
                    </Box>
                    <Box className="flex items-center justify-center min-w-96">
                        <Lottie width={400} height={400} animationData={transparent} />
                    </Box>
                </Flex>
            </Container>
		</section>
	);
};

export default InviteHero;
