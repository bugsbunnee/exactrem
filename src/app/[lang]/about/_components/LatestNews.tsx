'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';

import { news } from '#site/content';

import { Box, Card, Container, Flex, Heading, IconButton, Text } from '@radix-ui/themes';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { summarize } from '@/utils/lib';

import AppSlider from '@/components/ui/Slider';
import NewsItem from '@/app/[lang]/news/_components/NewsItem';
import Link from 'next/link';

const LatestNews : React.FC= () => {
    const sliderRef = useRef<Slider>(null);

    return ( 
        <section className='p-20'>
            <Container>
                <Heading className='text-center' size='8'>Latest News</Heading>

                <Text as='p' className='mb-14 mt-5 text-center' size='3'>
                    Here is some of the latest information on what is going on at Exactrem. Finance news, current exchange rates and much more
                </Text>

                <AppSlider 
                    ref={sliderRef}
                    autoplay
                    autoplaySpeed={3000}
                    arrows={false}
                    speed={500}
                    infinite
                    dots={false}
                    slidesToShow={3}
                >
                    {news.map((newsItem) => (
                        <Flex key={newsItem.slug} justify='center' align='center'>
                            <NewsItem newsItem={newsItem} />
                        </Flex>
                    ))}
                </AppSlider>

                <Flex justify='center' gap='2' align='center' my='8'>
                    <IconButton variant='soft' size='3' onClick={() => sliderRef.current?.slickPrev()}>
                        <ChevronLeftIcon width='30' height='30' />
                    </IconButton>
                    
                    <IconButton variant='soft' size='3' onClick={() => sliderRef.current?.slickNext()}>
                        <ChevronRightIcon width='30' height='30' />
                    </IconButton>
                </Flex>
            </Container>
        </section>
    );
};
 
export default LatestNews;