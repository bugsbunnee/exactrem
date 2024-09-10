'use client';

import React from 'react';
import Image from 'next/image';

import { Container, Flex, Text } from '@radix-ui/themes';

import useDictionary from '@/hooks/useDictionary';
import useCurrencies from '@/hooks/useCurrencies';

const ServiceCoverage = () => {
    const currencies = useCurrencies();
	const dictionary = useDictionary();

    return (
        <section className='bg-black dark:bg-primary h-20 flex items-center justify-center'>
            <Container>
                <Flex align='center' gap='8' justify='center'>
                    <Text data-aos-delay="500" data-aos="fade-left" as='div' size='3' className='text-white'>{dictionary.page.services.coverage.title}</Text>
                    <Flex data-aos-delay="500" data-aos="fade-right" align='center' gap='4' justify='center'>
                        {Object.values(currencies).map((currency) => (
                            <Flex align='center' justify='center' key={currency.value} className='bg-white relative w-10 h-10 overflow-hidden rounded-full'>
                                <Image 
                                    width={20}
                                    height={20}
                                    className='object-contain w-6 h-6'
                                    alt={currency.label}
                                    src={currency.src}
                                />
                            </Flex>
                        ))}
                    </Flex>
                </Flex>
            </Container>
        </section>
    )
};

export default ServiceCoverage;