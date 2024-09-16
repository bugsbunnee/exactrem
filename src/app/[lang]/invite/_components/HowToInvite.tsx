'use client';

import React from 'react';

import { Box, Container, Flex, Heading, Text } from '@radix-ui/themes';
import { FaGift, FaSearchDollar, FaUserFriends } from 'react-icons/fa';

import useDictionary from '@/hooks/useDictionary';

const HowToInvite = () => {
	const dictionary = useDictionary();
    
    const getIconFromKey = React.useCallback((key: string) => {
        switch(key) {
            case 'one':
                return <FaSearchDollar size={80} className='text-primary' />;
            
            case 'two':
                return <FaUserFriends size={80} className='text-primary' />;
            
            case 'three':
                return <FaGift size={80} className='text-primary' />;

            default:
                return <FaGift size={80} className='text-primary' />;
        }
    }, []);

    return (
        <section className='bg-black dark:bg-white p-20 max-lg:p-10 flex items-center justify-center'>
            <Container>
                <Flex align='center' gap='8' justify='center'>
                    <Box>
                        <Flex data-aos="fade-up" align='center' justify='center' >
                            <Heading size={{ initial: '6', md: '9' }} className='text-primary text-center'>{dictionary.page.invite.how_to.title}</Heading>
                        </Flex>

                        <Flex data-aos="fade-down" align='center' className='mt-10 mb-20' gap='8' justify='center' >
                            <Text as='div' size={{ initial: '2', md: '5' }} className='text-white text-center max-w-96 max-lg:max-w-screen dark:text-black '>
                                {dictionary.page.invite.how_to.description}
                            </Text>
                        </Flex>

                        <Flex direction={{ initial: 'column', md: 'row' }} align='center' gap='8' justify='center' >
                            {Object.values(dictionary.page.invite.how_to.steps).map((step, index) => (
                                <Box data-aos="fade-down" data-aos-delay={(index * 500).toString()} key={step.key}>
                                    <Flex align='center' gap='8' justify='center' >
                                        {getIconFromKey(step.key)}
                                    </Flex>

                                    <Text as='p' size='5' className='text-white text-center dark:text-black mt-6 max-w-40'>{step.text}</Text>
                                </Box>
                            ))}
                        </Flex>
                    </Box>
                </Flex>
            </Container>
        </section>
    )
};

export default HowToInvite;