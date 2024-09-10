
import React from 'react';
import Image from 'next/image';
import _ from 'lodash';

import { notFound } from 'next/navigation';
import { News, news } from '#site/content';

import { Avatar, Box, Container, Flex, Grid, Heading, Separator, Text } from '@radix-ui/themes';
import { formatDate, getInitials, getReadingTime, paginate } from '@/utils/lib';

import Conditional from '@/components/common/Conditional';
import Footer from '@/components/sections/Footer/Footer';
import NavBar from '@/components/sections/NavBar/NavBar';
import MDXContent from '@/components/ui/MDXContent';
import NewsItem from '@/app/[lang]/news/_components/NewsItem';

interface Props {
    params: { slug: string };
}

const getNewsBySlug = (slug: string) => {
    return news.find(newsItem => newsItem.slug === slug)
};

const getSimilarNews = (referenceNews: News) => {
    const similarNews = news.filter((newsItem) => newsItem.slug !== referenceNews.slug && newsItem.category === referenceNews.category);
    const orderedNews = _.orderBy(similarNews, ['createdAt'], 'desc');

    return paginate(orderedNews, 1, 3);
};

const NewsPostPage: React.FC<Props> = ({ params }) => {
    const newsItem = getNewsBySlug(params.slug);
    if (!newsItem || !newsItem.isPublished) notFound();

    const similarNews = getSimilarNews(newsItem);

    return ( 
        <>
            <NavBar />

            <Container className='py-16'>
                <Image
                    src={newsItem.src}
                    alt={newsItem.title}
                    width={0} 
                    height={0} 
                    className='rounded-sm w-full h-[35rem] object-cover' 
                />

                <Box className='text-center mt-10'>
                    <Text className='uppercase text-primary font-semibold tracking-wide text-center' size='2'>
                        {newsItem.category}
                    </Text>

                    <Heading size='5' className='mt-3 mb-5'>
                        {newsItem.title}
                    </Heading>

                    <Box className='my-5 text-center'>
                        <Text size='1' className='font-semibold uppercase'>
                            {formatDate(newsItem.createdAt)} · <span className='text-gray-500 font-medium'>{getReadingTime(newsItem.content)}</span>
                        </Text>
                    </Box>
                </Box>

                <Separator orientation='horizontal' size='4' className='my-10' />

                <Grid columns='30% 70%' align='start' gap='4'>
                    <Flex gap='3' align='center' className='py-5'>
                        <Avatar fallback={getInitials(newsItem.author)} />

                        <Box>
                            <Text as='div' size='2' className='font-semibold'>Published by</Text>
                            <Text as='div' size='1' className='font-semibold'>{newsItem.author}</Text>
                        </Box>
                    </Flex>
                
                    <article>
                        <MDXContent source={newsItem.content} />
                    </article>
                </Grid>

                <Conditional isVisible={similarNews.length > 0}>
                    <Separator orientation='horizontal' size='4' className='my-10' />

                    <Box className='my-12'>
                        <Heading size='5' className='mb-6 underline'>More like this</Heading>

                        <Grid columns='3' align='start' gap='4'>
                            {similarNews.map((newsItem, index) => (
                                <NewsItem key={newsItem.slug} newsItem={newsItem} index={index} />
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
    const post = getNewsBySlug(params.slug);
    if (!post) return {};
  
    return {
        title: post.title,
        description: post.description,
    }
};

export const generateStaticParams = async () => {
    return news.map(({ slug }) => ({ slug }))
}

export default NewsPostPage;