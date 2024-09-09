
'use client';

import React, { useRef } from 'react';
import _ from 'lodash';

import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';

import { Box, Container, Flex, Grid, Heading, IconButton, Text } from '@radix-ui/themes';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { FcEmptyFilter, FcHome } from 'react-icons/fc';

import AppSlider from '@/components/ui/Slider';
import BlogCategoryFilter from '@/app/[lang]/blog/_components/BlogCategoryFilter';
import BlogPostSearch from '@/app/[lang]/blog/_components/BlogPostSearch';
import BlogCategoryFilterLoading from '@/app/[lang]/blog/_components/BlogCategoryFilterLoading';
import Conditional from '@/components/common/Conditional';
import Footer from '@/components/sections/Footer/Footer';
import TrendingNewsLoading from '@/app/[lang]/news/_components/TrendingNewsLoading';
import NewsItemLoading from '@/app/[lang]/news/_components/NewsItemLoading';
import NewsItem from '@/app/[lang]/news/_components/NewsItem';
import NavBar from '@/components/sections/NavBar/NavBar';
import Pagination from '@/components/common/Pagination';

import { summarize } from '@/utils/lib';
import { SearchParams } from '@/utils/models';

import useNews from '@/hooks/useNews';

interface Props {
    searchParams: SearchParams;
}

const Blog: React.FC<Props> = ({ searchParams }) => {
    const { categories, isLoading, page, pageSize, newsCount, allNews, trendingNews } = useNews(searchParams);
    const sliderRef = useRef<Slider>(null);
   
    return ( 
        <>
            <NavBar />

            <section>
                <Box className='p-16'>
                    <Container>
                        <Flex className='w-full' align='center' justify='center'>
                            <Box className="text-center max-w-[35rem]">
                                <Heading size='8'>Newsroom</Heading>

                                <Box className='mb-7 mt-5'>
                                    <Text>
                                        If you’re in the mood for some reading, you found the right place. 
                                        Dive right into our latest stories, or explore the topics 
                                        you’re most interested in.
                                    </Text>
                                </Box>

                                <Box className='mt-12'>
                                    <Link className='bg-slate-900 text-white dark:border dark:border-stone-50 dark:bg-transparent text-sm p-5 rounded-full ' href='/contact'>
                                        Contact sales
                                    </Link>
                                </Box>
                            </Box>
                        </Flex>

                        <Conditional isVisible={!isLoading}>
                            <AppSlider
                                autoplay
                                autoplaySpeed={3000}
                                arrows={false}
                                speed={500}
                                infinite
                                dots
                                slidesToShow={1}
                            >
                                {trendingNews.map((news) => (
                                    <Flex key={news.slug} className='mt-16 mb-3' justify='center' align='center'>
                                        <Flex align='center' className='p-10 bg-black dark:bg-[#222] border rounded-sm' gap='7'>
                                            <figure className='relative w-[30rem] h-[20rem]'>
                                                <Image
                                                    src={news.src}
                                                    alt={news.title}
                                                    fill
                                                    className='rounded-sm object-cover' 
                                                />

                                                <figcaption className='uppercase text-white font-semibold tracking-wide bg-primary p-2 rounded-md text-xs top-4 right-4 absolute'>
                                                    {news.category}
                                                </figcaption>
                                            </figure>

                                            <Box className='max-w-[30rem] text-white dark:text-white'>
                                                <Heading size='8' className='mt-3 mb-5'>
                                                    <Link href={`/news/${news.slug}`} className='hover:underline'>{news.title}</Link>
                                                </Heading>

                                                <Text as='p' size='5' >
                                                    {summarize(news.description, 90)}
                                                </Text>

                                                <Box className='mt-9'>
                                                    <Link className='bg-primary dark:bg-black text-white dark:border dark:border-white text-sm p-3 rounded-sm ' href={`/news/${news.slug}`}>
                                                        Read more
                                                    </Link>
                                                </Box>
                                            </Box>
                                        </Flex>
                                    </Flex>
                                ))}
                            </AppSlider>

                            <Flex justify='end' gap='6' align='center' my='8'>
                                <IconButton className='bg-black dark:bg-primary' variant='ghost' size='3' onClick={() => sliderRef.current?.slickPrev()}>
                                    <ChevronLeftIcon width='25' height='25' className='text-white' />
                                </IconButton>
                                
                                <IconButton className='bg-black dark:bg-primary' variant='ghost' size='3' onClick={() => sliderRef.current?.slickNext()}>
                                    <ChevronRightIcon width='25' height='25' className='text-white' />
                                </IconButton>
                            </Flex>
                        </Conditional>

                        <Conditional isVisible={isLoading}>
                            <TrendingNewsLoading />
                        </Conditional>

                        <BlogPostSearch redirectPath='/news' placeholder='Search news' />
                    </Container>
                </Box>

                <Conditional isVisible={!isLoading}>
                    <BlogCategoryFilter categories={categories} redirectPath='/news' />
                </Conditional>

                <Conditional isVisible={isLoading}>
                    <BlogCategoryFilterLoading />
                </Conditional>

                <Container className='py-16'>
                    <Heading className='mb-12' size='8'>Latest News</Heading>

                    <Conditional isVisible={!isLoading && allNews.length === 0}>
                        <Flex align='center' justify='center'>
                            <Box className='w-96 border border-stone-200 dark:bg-[#222] text-center p-9 rounded-2xl'>
                                <Flex className='w-full' justify='center' align='center'>
                                    <Flex className='w-20 h-20 bg-orange-100 rounded-3xl' justify='center' align='center'>
                                        <FcEmptyFilter size={50} />
                                    </Flex>
                                </Flex>

                                <Heading className='mt-7'>No news found</Heading>
                                <Text as='p' className='mt-3'>Oops! Looks like no news has been added yet.</Text>

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
                        <Conditional isVisible={!isLoading && allNews.length > 0}>
                            {allNews.map((newsItem) => (
                                <NewsItem key={newsItem.slug} newsItem={newsItem} />
                            ))}
                        </Conditional>

                        <Conditional isVisible={isLoading}>
                            <NewsItemLoading />
                        </Conditional>
                    </Grid>

                    <Conditional isVisible={!isLoading}>
                        <Flex align='center' className='mt-10' justify='center'>
                            <Pagination
                                pageSize={pageSize}
                                currentPage={page}
                                itemCount={newsCount}
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