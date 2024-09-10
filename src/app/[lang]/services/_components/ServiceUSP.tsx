'use client';

import React from 'react';

import { Box, Container, Flex, Heading, Text } from '@radix-ui/themes';
import { BsPiggyBank } from 'react-icons/bs';
import { GiTakeMyMoney } from 'react-icons/gi';
import { TbWorldCancel } from 'react-icons/tb';

import useDictionary from '@/hooks/useDictionary';

const ServiceUSP = () => {
	const dictionary = useDictionary();
    
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

    return (
        <section className='bg-black dark:bg-white p-20 flex items-center justify-center'>
            <Container>
                <Flex align='center' gap='8' justify='center'>
                    <Box>
                        <Heading data-aos="fade-up" size='9' className='text-primary'>{dictionary.page.core_services.usp_overview.title}</Heading>

                        <Flex data-aos="fade-down" align='center' className='mt-10 mb-20' gap='8' justify='center' >
                            <Text as='div' size='5' className='text-white text-center max-w-96 dark:text-black '>
                                {dictionary.page.core_services.usp_overview.description_one}<Text as='div' className='bg-primary dark:text-white rounded-full inline-block px-2 py-1' size='3'>{dictionary.page.core_services.usp_overview.description_two}</Text> {dictionary.page.core_services.usp_overview.description_three}
                            </Text>
                        </Flex>

                        <Flex align='center' gap='8' justify='center' >
                            {Object.values(dictionary.page.core_services.usps).map((usp, index) => (
                                <Box data-aos="fade-down" data-aos-delay={(index * 500).toString()} key={usp.key}>
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