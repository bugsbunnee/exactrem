'use client';

import React from 'react';
import Image from 'next/image';

import AppButton from '@/components/ui/Button';

import { Box, Container, Flex, Grid, Heading, Text } from '@radix-ui/themes';

const CoreUSP = () => {
    return (
        <section className='py-20'>
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
                                Seamless Transactions
                            </figcaption>
                        </figure>
                    </Box>

                    <Box className="w-full relative mb-24">
                        <Heading>
                            Seamless Transactions
                        </Heading>

                        <Text as="p" className="my-8 leading-8 text-justify max-w-md" size="3">
                            Experience effortless international transfers with Exactrem. 
                            Our user-friendly platform is designed for simplicity, 
                            making it easy to send money anywhere in the world 
                            with just a few clicks. Enjoy a smooth and intuitive 
                            process every time you use our service. 
                        </Text>

                        <AppButton label='Get started' onClick={() => {}} />
                    </Box>
                    
                    <Box className="w-full">
                        <Heading>Lightning-Fast Transfers</Heading>

                        <Text as="p" className="my-8 leading-8 text-justify max-w-md" size="3">
                            Say goodbye to delays and hello to speed. At Exactrem, 
                            we prioritize quick transactions so your money arrives
                            at its destination in seconds. Whether it&apos;s a personal or 
                            business transfer, our advanced technology ensures 
                            your funds move swiftly and efficiently. 
                        </Text>

                        <AppButton label='Get started' onClick={() => {}} />
                    </Box>

                    <Box className="w-full relative mb-24">
                        <figure className="block overflow-hidden relative w-full">
                            <Image src="/hero_right.png" alt="Customer" width={0} height={0} className="w-full h-96 object-cover" />
                       
                            <figcaption className="absolute bottom-6 left-6 leading-9 text-lg text-white font-semibold">
                                Lightning-Fast Transfers
                            </figcaption>
                        </figure>
                    </Box>

                    <Box className="w-full mb-24">
                        <figure className="block overflow-hidden relative w-full">
                            <Image src="/hero_left.png" alt="Customer" width={0} height={0} className="w-full h-96 object-cover" />
                        
                            <figcaption className="absolute bottom-6 right-6 leading-9 text-lg text-white font-semibold">
                                Top-Tier Security
                            </figcaption>
                        </figure>
                    </Box>

                    <Box className="w-full relative mb-24">
                        <Heading>
                            Top-Tier Security 
                        </Heading>

                        <Text as="p" className="my-8 leading-8 text-justify max-w-md" size="3">
                            Your security is our top priority. Exactrem uses 
                            cutting-edge encryption and robust security measures to 
                            protect your personal and financial information. 
                            Trust that your transactions are safeguarded with the 
                            highest standards of security, ensuring peace of 
                            mind with every transfer. 
                        </Text>

                        <AppButton label='Get started' onClick={() => {}} />
                    </Box>
                    
                    <Box className="w-full">
                        <Heading>Transparent Pricing</Heading>

                        <Text as="p" className="my-8 leading-8 text-justify max-w-md" size="3">
                            Enjoy clear and straightforward pricing with no hidden fees. 
                            Exactrem provides a transparent fee structure so you know 
                            exactly what you’re paying and how much your recipient will 
                            receive. Simplify your financial management with 
                            our easy-to-understand pricing model. 
                        </Text>

                        <AppButton label='Get started' onClick={() => {}} />
                    </Box>

                    <Box className="w-full relative">
                        <figure className="block overflow-hidden relative w-full">
                            <Image src="/hero_right.png" alt="Customer" width={0} height={0} className="w-full h-96 object-cover" />
                       
                            <figcaption className="absolute bottom-6 left-6 leading-9 text-lg text-white font-semibold">
                                Transparent Pricing
                            </figcaption>
                        </figure>
                    </Box>
                </Grid>
            </Container>
        </section>
    )
};

export default CoreUSP;