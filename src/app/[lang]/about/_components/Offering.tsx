'use client';

import React from 'react';

import { Box, Container, Flex, Grid, Heading, Text } from '@radix-ui/themes';
import { FcBusinessContact, FcCurrencyExchange, FcMoneyTransfer } from 'react-icons/fc';

import useDictionary from '@/hooks/useDictionary';

const Offering = () => {
    const dictionary = useDictionary();

    const getIconFromKey = React.useCallback((key: string) => {
        switch(key) {
            case 'money-transfer':
                return <FcMoneyTransfer size={60} />;
            
            case 'currency-exchange':
                return <FcCurrencyExchange size={60} />;
            
            case 'business-contact':
                return <FcBusinessContact size={60} />;

            default:
                return <FcMoneyTransfer size={60} />;
        }
    }, []);

    return (
        <section className='p-20 max-md:p-10 bg-black dark:bg-[#222] text-white'>
            <Container>
                <Heading data-aos="zoom-in-up" className='text-center' size='8'>{dictionary.page.offering.title}</Heading>

               <Flex data-aos="zoom-in-down" justify='center' align='center'>
                    <Text as="p" className="my-12 text-center max-w-[45rem] leading-7" size="3">
                        {dictionary.page.offering.description}
                    </Text>
               </Flex>

                <Grid columns={{ initial: '1', md: '2', lg: '3' }} align='center' gap='8'>
                    {Object.values(dictionary.page.offering.values).map((value, index) => (
                        <Flex data-aos="zoom-in-up" data-aos-delay={(index * 500).toString()} key={value.title} className='w-full' align='center' justify='center'>
                            <Box className="w-full bg-white text-black dark:text-white dark:bg-[#222] dark:border dark:border-stone-50 rounded-md p-8 min-h-64 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">
                                {getIconFromKey(value.icon)}

                                <Text as='div' size='4' className='font-bold my-6'>
                                    {value.title}
                                </Text>
                                
                                <Text as='p' size='2'>
                                    {value.description}
                                </Text>
                            </Box>
                        </Flex>
                    ))}
                </Grid>
            </Container>
        </section>
    )
};

export default Offering;