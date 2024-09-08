
'use client';

import React from 'react';
import _ from 'lodash';

import Image from 'next/image';
import Link from 'next/link';

import BlogCategoryFilter from './_components/BlogCategoryFilter';
import BlogHeroLoading from './_components/BlogHeroLoading';
import BlogPostLoading from './_components/BlogPostLoading';
import BlogPostSearch from './_components/BlogPostSearch';
import BlogPost from './_components/BlogPost';
import BlogCategoryFilterLoading from './_components/BlogCategoryFilterLoading';
import Conditional from '@/components/common/Conditional';
import Footer from '@/components/sections/Footer/Footer';
import NavBar from '@/components/sections/NavBar/NavBar';
import Pagination from '@/components/common/Pagination';

import { formatDate, getReadingTime, summarize } from '@/utils/lib';
import { SearchParams } from '@/utils/models';
import { Box, Container, Flex, Grid, Heading, Text } from '@radix-ui/themes';
import { FcEmptyFilter, FcHome } from 'react-icons/fc';

import useBlogPosts from '@/hooks/useBlogPosts';

interface Props {
    searchParams: SearchParams;
}

const Blog: React.FC<Props> = ({ searchParams }) => {
    const { allBlogPosts, blogPostCount, categories, hero, isLoading, page, pageSize } = useBlogPosts(searchParams);
   
    return ( 
        <>
            <NavBar />

            <section>
                <Box className='p-16'>
                    <Container>
                        <Flex className='w-full' align='center' justify='center'>
                            <Box className="text-center max-w-[35rem]">
                                <Heading size='8'>Blog</Heading>

                                <Box className='mb-7 mt-5'>
                                    <Text>
                                        If you’re in the mood for some reading, you found the right place. 
                                        Dive right into our latest stories, or explore the topics 
                                        you’re most interested in.
                                    </Text>
                                </Box>

                                <Box className='mt-12'>
                                    <Link className='bg-slate-900 text-white dark:border dark:border-stone-50 dark:bg-transparent text-sm p-5 rounded-full ' href='/register'>
                                        Create account
                                    </Link>
                                </Box>
                            </Box>
                        </Flex>

                        <Conditional isVisible={!isLoading}>
                            {hero ? (
                                <Flex align='center' className='p-10 mt-16 bg-stone-50 dark:bg-[#222] border-stone-200 border rounded-2xl' gap='7'>
                                    <Image
                                        src={hero.src}
                                        alt={hero.title}
                                        width={0} 
                                        height={0} 
                                        className='rounded-xl w-96 h-72 object-cover' 
                                    />

                                    <Box>
                                        <Text className='uppercase text-sky-500 font-semibold tracking-wide' size='2'>
                                            {hero.category}
                                        </Text>

                                        <Heading size='5' className='mt-3 mb-5'>
                                            <Link href={`/blog/${hero.slug}`}>{hero.title}</Link>
                                        </Heading>

                                        <Text as='p' className='max-w-[40rem]'>
                                            {summarize(hero.description, 150)}
                                        </Text>

                                        <Box className='my-5'>
                                            <Text size='1' className='font-semibold uppercase'>
                                                {formatDate(hero.createdAt)} · <span className='text-gray-500 font-medium'>{getReadingTime(hero.content)}</span>
                                            </Text>
                                        </Box>

                                        <Box className='mt-9'>
                                            <Link className='bg-slate-900 text-white dark:border dark:border-stone-50 dark:bg-transparent text-sm p-5 rounded-full ' href={`/blog/${hero.slug}`}>
                                                Read more
                                            </Link>
                                        </Box>
                                    </Box>
                                </Flex>
                            ) : null}
                        </Conditional>

                        <Conditional isVisible={isLoading}>
                            <BlogHeroLoading />
                        </Conditional>

                        <BlogPostSearch />
                    </Container>
                </Box>

                <Conditional isVisible={!isLoading}>
                    <BlogCategoryFilter categories={categories} />
                </Conditional>

                <Conditional isVisible={isLoading}>
                    <BlogCategoryFilterLoading />
                </Conditional>

                <Container className='py-16'>
                    <Conditional isVisible={!isLoading && allBlogPosts.length === 0}>
                        <Flex align='center' justify='center'>
                            <Box className='w-96 border border-stone-200 dark:bg-[#222] text-center p-9 rounded-2xl'>
                                <Flex className='w-full' justify='center' align='center'>
                                    <Flex className='w-20 h-20 bg-orange-100 rounded-3xl' justify='center' align='center'>
                                        <FcEmptyFilter size={50} />
                                    </Flex>
                                </Flex>

                                <Heading className='mt-7'>No blog posts found</Heading>
                                <Text as='p' className='mt-3'>Oops! Looks like no blog posts have been added yet.</Text>

                                <Flex justify='center' className='mt-9'>
                                    <Link href='/' className='flex items-center gap-4 bg-slate-900 text-white dark:bg-stone-100 dark:text-black p-4 rounded-full'>
                                        <FcHome />
                                        
                                        Go Home
                                    </Link>
                                </Flex>
                            </Box>
                        </Flex>
                    </Conditional>

                    <Grid columns='3' align='center' justify='center' gap='9'>
                        <Conditional isVisible={!isLoading && allBlogPosts.length > 0}>
                            {allBlogPosts.map((post) => (
                                <BlogPost key={post.slug} blogPost={post} />
                            ))}
                        </Conditional>

                        <Conditional isVisible={isLoading}>
                            <BlogPostLoading />
                        </Conditional>
                    </Grid>

                    <Conditional isVisible={!isLoading}>
                        <Flex align='center' className='mt-10' justify='center'>
                            <Pagination
                                pageSize={pageSize}
                                currentPage={page}
                                itemCount={blogPostCount}
                            />
                        </Flex>
                    </Conditional>
                </Container>
            </section>

            <Footer />
        </>
    );
};
 
export default Blog;