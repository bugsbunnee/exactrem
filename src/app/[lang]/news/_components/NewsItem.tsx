import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { News } from '#site/content';
import { Box, Flex, Heading, Text } from '@radix-ui/themes';

import { formatDate, getReadingTime, summarize } from '@/utils/lib';

interface Props {
    newsItem: News;
}

const NewsItem: React.FC<Props> = ({ newsItem }) => {
    return (
        <Flex className="max-w-80" align='center' justify='center'>
            <Box className="max-w-80">
                <Image
                    src={newsItem.src}
                    alt={newsItem.title} 
                    width={0} 
                    height={0} 
                    className='rounded-3xl w-full h-52 object-cover' 
                />


                <Box className='rounded-lg mt-7'>
                    <Box className='p-1 bg-sky-500 text-white dark:bg-white dark:text-sky-500 inline-block rounded-sm'>
                        <Text className='uppercase font-semibold tracking-wide' size='1'>
                            {newsItem.category}
                        </Text>
                    </Box>

                    <Heading size='5' className='mt-5 mb-3 hover:underline capitalize'>
                        <Link href={`/news/${newsItem.slug}`}>
                            {newsItem.title}
                        </Link>
                    </Heading>

                    <Text as='p' className='tracking-wide min-h-24 text-gray-500 dark:text-white' size='3'>
                        {summarize(newsItem.description, 150)}
                    </Text>

                    <Box className='mt-9'>
                        <Link className='bg-orange-600 text-white dark:border dark:border-stone-50 dark:bg-transparent text-sm p-5 rounded-full ' href={`/news/${newsItem.slug}`}>
                            Read more
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Flex>
    );
};

export default NewsItem;