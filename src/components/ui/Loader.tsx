'use client';

import React from 'react';

import { navigationItems } from '@/utils/constants';
import { Container, Flex, Skeleton, Spinner } from '@radix-ui/themes';

const Loader = () => {
    return (
        <>
            <Flex className="border-b-2 bg-white dark:bg-[#222] sticky top-0 z-50">
                <Container>
                    <Flex align="center" justify="between" className="h-16">
                        <Skeleton className='w-10 h-10 rounded-sm' />

                        <Flex flexGrow="1" gap="7" align="center" justify="center">
                            {navigationItems.map((navigationItem) => (
                                <Skeleton key={navigationItem.label} className='w-10 h-4' />
                            ))}
                        </Flex>

                        <Flex gap="3" align="center">
                            <Skeleton className='w-4 h-4' />
                            <Skeleton className='w-4 h-4' />
                            <Skeleton className='w-4 h-4' />
                        </Flex>
                    </Flex>
                </Container>
            </Flex>

            <Flex justify='center' align='center' className='bg-stone-50 dark:bg-[#222] w-dvw h-dvh z-50'>
                <Spinner />
            </Flex>
        </>
    )
};

export default Loader;