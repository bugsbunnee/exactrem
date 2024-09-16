'use client';

import React from 'react';

import { Box, Container, Flex, Grid, Text } from '@radix-ui/themes';
import { FcBusinessContact, FcCurrencyExchange, FcLock, FcCustomerSupport, FcGlobe, FcPositiveDynamic, FcMoneyTransfer } from 'react-icons/fc';
import { Section } from '@/utils/models';
import ScrollLink from '@/components/ui/ScrollLink';

interface ServiceItem extends Section {
    iconKey: string;
}

interface Props {
    list: ServiceItem[];
}

const Summary: React.FC<Props> = ({ list }) => {
    const getIconFromKey = React.useCallback((key: string) => {
        switch(key) {
            case 'money-transfer':
                return <FcMoneyTransfer size={60} />;
            
            case 'currency-exchange':
                return <FcCurrencyExchange size={60} />;
            
            case 'business-contact':
                return <FcBusinessContact size={60} />;
            
            case 'globe':
                return <FcGlobe size={60} />;
            
            case 'customer-support':
                return <FcCustomerSupport size={60} />;

            case 'cutting-edge':
                return <FcPositiveDynamic size={60} />;
            
            case 'lock':
                return <FcLock size={60} />;

            default:
                return <FcMoneyTransfer size={60} />;
        }
    }, []);

    return (
        <section className='p-20 max-md:p-6 bg-orange-50 dark:bg-[#222] text-white'>
            <Container>
                <Grid columns={{ initial: '1', md: '3' }} align='center' gap='8'>
                    {list.map((value, index) => (
                        <Flex data-aos="zoom-in-up" data-aos-delay={(index * 500).toString()} key={value.title} className='w-full' align='center' justify='center'>
                            <Box className="w-full bg-white text-black dark:text-white dark:bg-[#222] dark:border dark:border-stone-50 rounded-md p-8 min-h-64 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">
                                {getIconFromKey(value.iconKey)}

                                <Text as='div' size='4' className='font-bold mt-6'>
                                    {value.title}
                                </Text>
                                
                                <Text as='p' size='2' mt="4" mb="7">
                                    {value.description}
                                </Text>

                                <ScrollLink 
                                    id={value.title} 
                                    title='Read more...' 
                                    className="text-sm bg-slate-800 dark:bg-primary text-white p-2 rounded-sm" 
                                />
                            </Box>
                        </Flex>
                    ))}
                </Grid>
            </Container>
        </section>
    )
};

export default Summary;