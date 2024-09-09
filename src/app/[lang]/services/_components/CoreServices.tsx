'use client';

import React from 'react';
import Image from 'next/image';

import AppButton from '@/components/ui/Button';

import { Box, Container, Flex, Grid, Heading, Text } from '@radix-ui/themes';

const CoreServices = () => {
    return (
        <section className='py-32'>
            <Container>
                <Flex justify='center' align='center'>
                    <Heading size='7' className='mb-32 text-center max-w-96'>
                        One platform for all your <br /> <span className='font-bold text-5xl text-primary'>payments international</span>
                    </Heading>
                </Flex>

                <Grid gap="9" align="center" justify="center" columns="2">
                    <Box className="w-full mb-24">
                        <figure className="block overflow-hidden relative w-full">
                            <Image src="/hero_left.png" alt="Customer" width={0} height={0} className="w-full h-96 object-cover" />
                        
                            <figcaption className="absolute bottom-6 right-6 leading-9 text-lg text-white font-semibold">
                                Individual to individual (P2P)
                            </figcaption>
                        </figure>
                    </Box>

                    <Box className="w-full relative mb-24">
                        <Heading>
                            Individual to individual (P2P)
                        </Heading>

                        <Text as="p" className="my-8 leading-8 text-justify max-w-md" size="3">
                            At the same time, Anthony was launching a prop-tech 
                            company and starting his MBA. Coincidentally both decided to quit their respective 
                            jobs and continue with their new ventures.
                        </Text>

                        <AppButton label='Get started' onClick={() => {}} />
                    </Box>
                    
                    <Box className="w-full">
                        <Heading>Individual to Business (P2B)</Heading>

                        <Text as="p" className="my-8 leading-8 text-justify max-w-md" size="3">
                            In 2017, Ola found an opportunity where he could help individuals within the UK, 
                            especially residents with families back in Nigeria send money home by setting up 
                            an online remittance company.
                        </Text>

                        <AppButton label='Get started' onClick={() => {}} />
                    </Box>

                    <Box className="w-full relative mb-24">
                        <figure className="block overflow-hidden relative w-full">
                            <Image src="/hero_right.png" alt="Customer" width={0} height={0} className="w-full h-96 object-cover" />
                       
                            <figcaption className="absolute bottom-6 left-6 leading-9 text-lg text-white font-semibold">
                                Individual to Business (P2B)
                            </figcaption>
                        </figure>
                    </Box>

                    <Box className="w-full mb-24">
                        <figure className="block overflow-hidden relative w-full">
                            <Image src="/hero_left.png" alt="Customer" width={0} height={0} className="w-full h-96 object-cover" />
                        
                            <figcaption className="absolute bottom-6 right-6 leading-9 text-lg text-white font-semibold">
                                Individual to individual (P2P)
                            </figcaption>
                        </figure>
                    </Box>

                    <Box className="w-full relative mb-24">
                        <Heading>
                            Individual to individual (P2P)
                        </Heading>

                        <Text as="p" className="my-8 leading-8 text-justify max-w-md" size="3">
                            At the same time, Anthony was launching a prop-tech 
                            company and starting his MBA. Coincidentally both decided to quit their respective 
                            jobs and continue with their new ventures.
                        </Text>

                        <AppButton label='Get started' onClick={() => {}} />
                    </Box>
                    
                    <Box className="w-full">
                        <Heading>Individual to Business (P2B)</Heading>

                        <Text as="p" className="my-8 leading-8 text-justify max-w-md" size="3">
                            In 2017, Ola found an opportunity where he could help individuals within the UK, 
                            especially residents with families back in Nigeria send money home by setting up 
                            an online remittance company.
                        </Text>

                        <AppButton label='Get started' onClick={() => {}} />
                    </Box>

                    <Box className="w-full relative">
                        <figure className="block overflow-hidden relative w-full">
                            <Image src="/hero_right.png" alt="Customer" width={0} height={0} className="w-full h-96 object-cover" />
                       
                            <figcaption className="absolute bottom-6 left-6 leading-9 text-lg text-white font-semibold">
                                Individual to Business (P2B)
                            </figcaption>
                        </figure>
                    </Box>
                </Grid>
            </Container>
        </section>
    )
};

export default CoreServices;