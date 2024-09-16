
'use client';

import React, { useRef } from 'react';
import _ from 'lodash';

import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';

import Button from '@/components/ui/Button';

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
import ScrollLink from '../../../components/ui/ScrollLink';

import { summarize } from '@/utils/lib';
import { SearchParams } from '@/utils/models';

import useDictionary from '@/hooks/useDictionary';
import useNews from '@/hooks/useNews';

interface Props {
    searchParams: SearchParams;
}

const NewsPage: React.FC<Props> = ({ searchParams }) => {
    const { categories, isLoading, page, pageSize, newsCount, allNews, trendingNews } = useNews(searchParams);
    
    const sliderRef = useRef<Slider>(null);
    const dictionary = useDictionary();
   
    return ( 
        <>
            <NavBar />

            <section>
                <Box className='p-16 max-lg:p-10'>
                    <Container>
                        <Flex className='w-full' align='center' justify='center'>
                            <Box className="text-center max-w-[35rem] max-lg:max-w-screen">
                                <Heading size='8'>{dictionary.page.news.title}</Heading>

                                <Box className='mb-7 mt-5'>
                                    <Text>
                                        {dictionary.page.news.description}
                                    </Text>
                                </Box>

                                <Flex className='mt-12' justify='center' align='center'>
                                    <ScrollLink 
                                        id="newsletter" 
                                        title={dictionary.page.news.cta} 
                                        className="flex items-center gap-4 bg-black dark:bg-primary py-4 px-6 rounded-sm border border-orange-600 text-white"
                                    />
                                </Flex>
                            </Box>
                        </Flex>

                        <Conditional isVisible={!isLoading}>
                            <AppSlider
                                ref={sliderRef}
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
                                        <Flex align='center' className='p-10 max-lg:p-6 bg-black dark:bg-[#222] max-sm:flex-col border rounded-sm overflow-hidden' gap='7'>
                                            <figure className='relative w-[30rem] max-lg:w-full h-[20rem]'>
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
                                                        {dictionary.page.news.read_more}
                                                    </Link>
                                                </Box>
                                            </Box>
                                        </Flex>
                                    </Flex>
                                ))}
                            </AppSlider>

                            <Flex justify={{ initial: 'center', md: 'end' }} gap='6' align='center' my='8'>
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

                <Container className='py-16 max-lg:px-8'>
                    <Heading className='mb-12' size='8'>Latest News</Heading>

                    <Conditional isVisible={!isLoading && allNews.length === 0}>
                        <Flex align='center' justify='center'>
                            <Box className='w-96 border border-stone-200 dark:bg-[#222] text-center p-9 rounded-2xl'>
                                <Flex className='w-full' justify='center' align='center'>
                                    <Flex className='w-20 h-20 bg-orange-100 rounded-3xl' justify='center' align='center'>
                                        <FcEmptyFilter size={50} />
                                    </Flex>
                                </Flex>

                                <Heading className='mt-7'>{dictionary.page.news.empty_content.title}</Heading>
                                <Text as='p' className='mt-3'>{dictionary.page.news.empty_content.description}</Text>

                                <Flex justify='center' className='mt-9'>
                                    <Link href='/' className='flex items-center gap-4 bg-slate-900 text-white dark:bg-stone-100 dark:text-black p-4 rounded-full'>
                                        <FcHome />
                                        
                                        {dictionary.page.news.empty_content.cta}
                                    </Link>
                                </Flex>
                            </Box>
                        </Flex>
                    </Conditional>

                    <Grid columns={{ initial: '1', md: '3' }} className='max-lg:p-8' align='center' justify='center' gap='9'>
                        <Conditional isVisible={!isLoading && allNews.length > 0}>
                            {allNews.map((newsItem, index) => (
                                <NewsItem key={newsItem.slug} newsItem={newsItem} index={index} />
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
 
export default NewsPage;