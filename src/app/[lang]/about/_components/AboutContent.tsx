'use client';

import React from 'react';
import Image from 'next/image';

import { Box, Container, Grid, Heading, Text } from '@radix-ui/themes';

import useDictionary from '@/hooks/useDictionary';

const AboutContent = () => {
    const dictionary = useDictionary();

    return (
        <section className="py-20">
            <Container>
                <Grid gap="9" align="center" justify="center" columns="2">
                    <Box className="w-full mb-24">
                        <figure className="block overflow-hidden relative w-full">
                            <Image src="/hero_left.png" alt="Customer" width={0} height={0} className="w-full h-96 object-cover" />
                        
                            <figcaption className="absolute bottom-6 right-6 leading-9 text-lg text-white font-semibold">
                                {dictionary.page.customer.left_caption}
                            </figcaption>
                        </figure>
                    </Box>

                    <Box className="w-full relative mb-24">
                        <Heading>Our mission.</Heading>

                        <Text as="p" className="mt-8 leading-8 text-justify max-w-md" size="3">
                            At the same time, Anthony was launching a prop-tech 
                            company and starting his MBA. Coincidentally both decided to quit their respective 
                            jobs and continue with their new ventures.
                        </Text>
                    </Box>
                    
                    <Box className="w-full">
                        <Heading>Our vision.</Heading>

                        <Text as="p" className="mt-8 leading-8 text-justify max-w-md" size="3">
                            In 2017, Ola found an opportunity where he could help individuals within the UK, 
                            especially residents with families back in Nigeria send money home by setting up 
                            an online remittance company.
                        </Text>
                    </Box>

                    <Box className="w-full relative">
                        <figure className="block overflow-hidden relative w-full">
                            <Image src="/hero_right.png" alt="Customer" width={0} height={0} className="w-full h-96 object-cover" />
                       
                            <figcaption className="absolute bottom-6 left-6 leading-9 text-lg text-white font-semibold">
                                {dictionary.page.customer.right_caption}
                            </figcaption>
                        </figure>
                    </Box>
                </Grid>
            </Container>
        </section>
    )
};

export default AboutContent;