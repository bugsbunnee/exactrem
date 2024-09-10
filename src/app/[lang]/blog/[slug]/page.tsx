
'use server';

import React from 'react';
import Image from 'next/image';
import _ from 'lodash';

import { notFound } from 'next/navigation';
import { Post, posts } from '#site/content';

import { Avatar, Box, Container, Flex, Grid, Heading, Separator, Text } from '@radix-ui/themes';
import { formatDate, getInitials, getReadingTime, paginate } from '@/utils/lib';

import Conditional from '@/components/common/Conditional';
import Footer from '@/components/sections/Footer/Footer';
import NavBar from '@/components/sections/NavBar/NavBar';
import MDXContent from '@/components/ui/MDXContent';
import BlogPost from '../_components/BlogPost';

interface Props {
    params: { slug: string };
}

const getPostBySlug = (slug: string) => {
    return posts.find(post => post.slug === slug)
};

const getSimilarBlogPosts = (post: Post) => {
    const similarPosts = posts.filter((blogPost) => blogPost.slug !== post.slug && blogPost.category === post.category);
    const orderedPosts = _.orderBy(similarPosts, ['createdAt'], 'desc');

    return paginate(orderedPosts, 1, 3);
};

const BlogPostPage: React.FC<Props> = ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post || !post.isPublished) notFound();

    const similarPosts = getSimilarBlogPosts(post);

    return ( 
        <>
            <NavBar />

            <Container className='py-16'>
                <Image
                    src={post.src}
                    alt={post.title}
                    width={0} 
                    height={0} 
                    className='rounded-sm w-full h-[35rem] object-cover' 
                />

                <Box className='text-center mt-10'>
                    <Text className='uppercase text-primary font-semibold tracking-wide text-center' size='2'>
                        {post.category}
                    </Text>

                    <Heading size='5' className='mt-3 mb-5'>
                        {post.title}
                    </Heading>

                    <Box className='my-5 text-center'>
                        <Text size='1' className='font-semibold uppercase'>
                            {formatDate(post.createdAt)} · <span className='text-gray-500 font-medium'>{getReadingTime(post.content)}</span>
                        </Text>
                    </Box>
                </Box>

                <Separator orientation='horizontal' size='4' className='my-10' />

                <Grid columns='30% 70%' align='start' gap='4'>
                    <Flex gap='3' align='center' className='py-5'>
                        <Avatar fallback={getInitials(post.author)} />

                        <Box>
                            <Text as='div' size='2' className='font-semibold'>Published by</Text>
                            <Text as='div' size='1' className='font-semibold'>{post.author}</Text>
                        </Box>
                    </Flex>
                
                    <article>
                        <MDXContent source={post.content} />
                    </article>
                </Grid>

                <Conditional isVisible={similarPosts.length > 0}>
                    <Separator orientation='horizontal' size='4' className='my-10' />

                    <Box className='my-12'>
                        <Heading size='5' className='mb-6 underline'>More like this</Heading>

                        <Grid columns='3' align='start' gap='4'>
                            {similarPosts.map((blogPost, index) => (
                                <BlogPost key={blogPost.slug} blogPost={blogPost} index={index} />
                            ))}
                        </Grid>
                    </Box>
                </Conditional>
            </Container>


            <Footer />
        </>
    );
};

export const generateMetadata = async ({ params }: Props) => {
    const post = getPostBySlug(params.slug);
    if (!post) return {};
  
    return {
        title: post.title,
        description: post.description,
    }
};

export const generateStaticParams = async () => {
    return posts.map(({ slug }) => ({ slug }))
}

export default BlogPostPage;