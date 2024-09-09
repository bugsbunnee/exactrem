import React from 'react';
import { Box, Flex, Heading, Skeleton, Text } from '@radix-ui/themes';
import _ from 'lodash';

const NewsItemLoading = () => {
    const fillers = _.range(1, 7);

    return ( 
       <>
            {fillers.map((filler) => (
                <Flex className="max-w-80" align='center' justify='center' key={filler}>
                    <Box className="max-w-80">
                        <Skeleton className='rounded-3xl w-full h-52 object-cover'  />
        
                        <Box className='rounded-lg mt-7'>
                            <Skeleton>
                                Sample category
                            </Skeleton>

                            <Heading size='5' className='mt-5 mb-3 hover:underline capitalize'>
                                <Skeleton>
                                    Former Citi Middle East and Africa CFO
                                </Skeleton>
                            </Heading>

                            <Text as='p' className='tracking-wide min-h-24 text-justify text-gray-500 dark:text-white' size='3'>
                                <Skeleton>
                                    Africa’s leading payments technology company, has announced the appointment 
                                    of Mitesh Popat as the company’s Chief Financial Officer.
                                </Skeleton>
                            </Text>

                            <Box className='mt-9'>
                                <Skeleton className='bg-primary text-white dark:border dark:border-stone-50 dark:bg-transparent text-sm p-3 rounded-sm'>
                                    Read more
                                </Skeleton>
                            </Box>
                        </Box>
                    </Box>
                </Flex>
            ))}
       </>
     );
};
 
export default NewsItemLoading;