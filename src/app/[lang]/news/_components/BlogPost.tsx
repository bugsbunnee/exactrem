import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Post } from '#site/content';
import { Box, Flex, Heading, Text } from '@radix-ui/themes';

import { formatDate, getReadingTime } from '@/utils/lib';

interface Props {
    blogPost: Post
}

const BlogPost: React.FC<Props> = ({ blogPost }) => {
    return (
        <Flex className="max-w-80" align='center' justify='center'>
            <Box className="max-w-80">
                <Image
                    src={blogPost.src}
                    alt={blogPost.title} 
                    width={0} 
                    height={0} 
                    className='rounded-3xl w-full h-52 object-cover' 
                />


                <Box className='p-3 rounded-lg mt-3'>
                    <Text className='uppercase text-sky-500 font-semibold tracking-wide' size='2'>
                        {blogPost.category}
                    </Text>

                    <Heading size='4' className='my-3 hover:underline capitalize min-h-24'>
                        <Link href={`/blog/${blogPost.slug}`}>
                            {blogPost.title}
                        </Link>
                    </Heading>

                    <Box className='mt-5'>
                        <Text size='1' className='font-semibold uppercase'>{formatDate(blogPost.createdAt)} · <span className='text-gray-500 font-medium'>{getReadingTime(blogPost.content)}</span> </Text>
                    </Box>
                </Box>
            </Box>
        </Flex>
    );
};

export default BlogPost;