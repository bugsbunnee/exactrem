'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';

import { news } from '#site/content';

import { Box, Card, Container, Flex, Heading, IconButton, Text } from '@radix-ui/themes';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { summarize } from '@/utils/lib';

import AppSlider from '@/components/ui/Slider';
import NewsItem from '@/app/[lang]/news/_components/NewsItem';

import useDictionary from '@/hooks/useDictionary';

const LatestNews : React.FC= () => {
    const dictionary = useDictionary();
    const sliderRef = useRef<Slider>(null);

    return ( 
        <section className='p-20'>
            <Container>
                <Heading className='text-center' size='8'>{dictionary.page.latest_news.title}</Heading>

                <Flex justify='center' align='center' className='mb-14 mt-5'>
                    <Text as='p' className='text-center max-w-[40rem]' size='3'>
                        {dictionary.page.latest_news.description}
                    </Text>
                </Flex>

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