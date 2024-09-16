import React from 'react';
import { Box, Flex, Heading, Skeleton, Text } from '@radix-ui/themes';

const BlogHeroLoading = () => {
    return (
        <Flex data-aos="zoom-in" align='center' direction={{ initial: 'column', md: 'row' }} className='p-10 max-lg:p-4 mt-16 mb-8 bg-stone-50 dark:bg-[#222] border-stone-200 border rounded-sm' gap='7'>
            <Skeleton className='rounded-xl w-96 h-72 max-lg:w-full object-cover' />

            <Box>
                <Text className='uppercase text-sky-500 font-semibold tracking-wide' size='2'>
                    <Skeleton>Sample Category</Skeleton>
                </Text>

                <Heading size='5' className='mt-3 mb-5'>
                    <Skeleton>
                        This is an example of a title
                    </Skeleton>
                </Heading>

                <Text as='p' className='max-w-[40rem]'>
                    <Skeleton>
                        This ideally will be a very very very long description which would span multiple lines.
                    </Skeleton>
                </Text>

                <Box className='mt-5'>
                    <Text size='1' className='font-semibold uppercase'>
                        <Skeleton>
                            January 01, 2024 · 5 minute read
                        </Skeleton>
                    </Text>
                </Box>

                <Skeleton className='w-24 h-14 rounded-full mt-5' />
            </Box>
        </Flex>
    )
};

export default BlogHeroLoading;