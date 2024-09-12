import React from 'react';
import { Box, Flex, Heading, Skeleton, Text } from '@radix-ui/themes';

const TrendingNewsLoading = () => {
    return (
        <Flex justify='center' align='center'>
            <Flex align='center' className='p-10 mt-16 mb-8 bg-stone-50 dark:bg-[#222] border rounded-sm' gap='7'>
                <figure className='relative w-[30rem] h-[20rem]'>
                    <Skeleton className='rounded-sm w-full h-full object-cover' />

                    <figcaption className='uppercase text-sky-500 font-semibold tracking-wide p-2 rounded-md text-xs top-4 right-4 absolute'>
                        <Skeleton>Money Transfer</Skeleton>
                    </figcaption>
                </figure>

                <Box className='max-w-[30rem]'>
                    <Heading size='8' className='mt-3 mb-5'>
                        <Skeleton>
                            This is an example of a title
                        </Skeleton>
                    </Heading>

                    <Text as='p' size='5' >
                        <Skeleton>
                            This ideally will be a very very very long description which would span multiple lines.
                            It could even span up to three lines
                        </Skeleton>
                    </Text>

                    <Skeleton className='w-24 h-14 rounded-sm mt-5' />
                </Box>
            </Flex>
        </Flex>
    )
};

export default TrendingNewsLoading;