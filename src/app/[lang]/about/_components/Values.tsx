import React from 'react';

import { Box, Container, Flex, Grid, Heading, Text } from '@radix-ui/themes';
import { FcBusinessContact, FcCurrencyExchange, FcMoneyTransfer } from 'react-icons/fc';

const Values = () => {
    const values = [
        {
            title: 'Money transfer',
            description: 'We are approved by FINTRACT to provide money transfer services in USD, EUR, NGN, and CAD',
            Icon: FcMoneyTransfer,
        },
        {
            title: 'Virtual currencies',
            description: 'We are open, take appropriate risks, adopt a results-driven approach, and are the best at what we do.',
            Icon: FcCurrencyExchange,
        },
        {
            title: 'Payment service provider',
            description: 'We are determined, seek challenges, take ownership of tasks, act fast and deliver results.',
            Icon: FcBusinessContact,
        },
    ];

    return (
        <section className='p-20 bg-stone-50 dark:bg-[#222]'>
            <Container>
                <Heading className='text-center' size='8'>What we offer</Heading>

               <Flex justify='center' align='center'>
                <Text as="p" className="my-12 text-center max-w-[45rem] leading-7" size="3">
                        Exactrem Canada is a MSB licenced Company has been approved 
                        by FINTRAC for Money transferring services, Dealing in virtual 
                        currencies and Payment service provider services.
                    </Text>
               </Flex>

                <Grid columns='3' align='center' gap='8'>
                    {values.map((value) => (
                        <Flex key={value.title} className='w-full' align='center' justify='center'>
                            <Box className="w-full bg-white dark:bg-[#222] dark:border dark:border-stone-50 rounded-md p-8 min-h-64 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">
                                <value.Icon size={60} />

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

export default Values;