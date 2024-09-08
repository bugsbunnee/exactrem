import React from 'react';
import { Box, Flex, Heading, Skeleton, Text } from '@radix-ui/themes';
import _ from 'lodash';

const BlogPostLoading = () => {
    const fillers = _.range(1, 7);

    return ( 
       <>
            {fillers.map((filler) => (
                <Flex className="max-w-80" align='center' justify='center' key={filler}>
                    <Box className="max-w-80">
                        <Skeleton className='rounded-3xl w-full h-52 object-cover'  />
        
                        <Box className='p-3 rounded-lg mt-3'>
                            <Text className='uppercase text-sky-500 font-semibold tracking-wide' size='2'>
                                <Skeleton>
                                    Sample Category
                                </Skeleton>
                            </Text>
        
                            <Heading size='4' className='my-3 capitalize min-h-24'>
                                <Skeleton>
                                    How to Safely Send Money to Banrural in Guatemala in 5 Easy Steps
                                </Skeleton>
                            </Heading>
        
                            <Box className='mt-5'>
                                <Text size='1' className='font-semibold uppercase'>
                                    <Skeleton>
                                        January 01, 2024 · 5 minute read
                                    </Skeleton>
                                </Text>
                            </Box>
                        </Box>
                    </Box>
                </Flex>
            ))}
       </>
     );
};
 
export default BlogPostLoading;