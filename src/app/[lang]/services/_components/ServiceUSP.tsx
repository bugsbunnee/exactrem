'use client';

import React from 'react';

import { Box, Button, Container, Flex, Heading, Text } from '@radix-ui/themes';
import { BsPiggyBank } from 'react-icons/bs';
import { GiTakeMyMoney } from 'react-icons/gi';
import { TbWorldCancel } from 'react-icons/tb';

const ServiceUSP = () => {
    
    const getIconFromKey = React.useCallback((key: string) => {
        switch(key) {
            case 'piggy':
                return <BsPiggyBank size={80} className='text-primary' />;
            
            case 'minimum-fees':
                return <GiTakeMyMoney size={80} className='text-primary' />;
            
            case 'zero-fees':
                return <TbWorldCancel size={80} className='text-primary' />;

            default:
                return <BsPiggyBank size={80} className='text-primary' />;
        }
    }, []);

    const USP = [
        {
            key: 'piggy',
            text: 'No monthly or subscription fees',
        },
        {
            key: 'minimum-fees',
            text: 'No minimum balance',
        },
        {
            key: 'zero-fees',
            text: 'Zero foreign transfer fees',
        },
    ];

    return (
        <section className='bg-black dark:bg-white p-20 flex items-center justify-center'>
            <Container>
                <Flex align='center' gap='8' justify='center'>
                    <Box>
                        <Heading size='9' className='text-primary'>Say bye-bye to fees</Heading>

                        <Flex align='center' className='mt-10 mb-20' gap='8' justify='center' >
                            <Text as='div' size='5' className='text-white text-center max-w-96 dark:text-black '>
                                We charge <Text as='div' className='bg-primary dark:text-white rounded-full inline-block px-2 py-1' size='3'>Zero transfer fees</Text> for you to spend your own money. 
                                Take back control of your financial life with LemFi.
                            </Text>
                        </Flex>

                        <Flex align='center' gap='8' justify='center' >
                            {USP.map((usp) => (
                                <Box key={usp.key}>
                                    <Flex align='center' gap='8' justify='center' >
                                        {getIconFromKey(usp.key)}
                                    </Flex>

                                    <Text as='p' size='5' className='text-white text-center dark:text-black mt-6 max-w-40'>{usp.text}</Text>
                                </Box>
                            ))}
                        </Flex>
                    </Box>
                </Flex>
            </Container>
        </section>
    )
};

export default ServiceUSP;