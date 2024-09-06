'use client';

import React from 'react';

import { Box, Flex, Text, Heading, Container, Skeleton } from '@radix-ui/themes';
import { accountTypes } from '@/utils/constants';

const RegistrationFormOneSkeleton: React.FC = () => {
	return (
        <Container>
            <Flex flexGrow="1" justify="center" p={{ md: '9', initial: '3' }}>
                <Box as="div" className="w-full max-w-96">
                    <Heading size="7">
                        <Skeleton>
                            What type of account would you like to create?
                        </Skeleton>
                    </Heading>

                    <Text as='p' className="my-4" size="2">
                        <Skeleton>
                            Select the account type that best meets your needs.
                        </Skeleton>
                    </Text>

                    <Box className="w-full mt-2">
                        <Text size="2">
                            <Skeleton>
                                Country:
                            </Skeleton>
                        </Text>

                        <Skeleton className='w-full h-10' />
                    </Box>

                    <Box className='mt-4'>
                        <Text size="2">
                            <Skeleton>
                                Select an account type:
                            </Skeleton>
                        </Text>

                        {accountTypes.map((type) => (
                            <Flex 
                                key={type.title}
                                align='center' 
                                gap='4' 
                                className='border rounded-md p-5 mt-3'
                            >
                                <Skeleton className='w-10 h-10 rounded-full'/>

                                
                                <Box className='flex-1'>
                                    <Heading size='2' className='leading-6'>
                                        <Skeleton>{type.title}</Skeleton>
                                    </Heading>

                                    <Text as='p' size="1">
                                        <Skeleton>{type.description}</Skeleton>
                                    </Text>
                                </Box>

                                <Skeleton className='w-5 h-5 rounded-full' />
                            </Flex>
                        )
                        )}
                    </Box>
                </Box>
            </Flex>
        </Container>
	);
};

export default RegistrationFormOneSkeleton;
