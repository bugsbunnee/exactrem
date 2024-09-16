'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';

import { news } from '#site/content';
import { ResponsiveObject } from 'react-slick';

import { Box, Card, Container, Flex, Heading, IconButton, Text } from '@radix-ui/themes';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { summarize } from '@/utils/lib';

import AppSlider from '@/components/ui/Slider';
import NewsItem from '@/app/[lang]/news/_components/NewsItem';

import useDictionary from '@/hooks/useDictionary';

const responsive: ResponsiveObject[] = [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        arrows: false,
        slidesToShow: 1,
      }
    },
];

const LatestNews : React.FC= () => {
    const dictionary = useDictionary();
    const sliderRef = useRef<Slider>(null);

    return ( 
        <section className='p-20 max-md:p-6 bg-stone-50 dark:bg-[#222]'>
            <Container>
                <Heading data-aos="zoom-out-up" className='text-center' size='8'>{dictionary.page.latest_news.title}</Heading>

                <Flex data-aos="zoom-out-down" justify='center' align='center' className='mb-14 mt-5'>
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
                    responsive={responsive}
                >
                    {news.map((newsItem, index) => (
                        <NewsItem newsItem={newsItem} index={index} key={newsItem.slug}/>
                    ))}
                </AppSlider>

                <Flex justify='center' gap='2' align='center' my='8'>
                    <IconButton className="bg-black dark:bg-primary text-white" variant='soft' size='3' onClick={() => sliderRef.current?.slickPrev()}>
                        <ChevronLeftIcon width='30' height='30' />
                    </IconButton>
                    
                    <IconButton className="bg-black dark:bg-primary text-white" variant='soft' size='3' onClick={() => sliderRef.current?.slickNext()}>
                        <ChevronRightIcon width='30' height='30' />
                    </IconButton>
                </Flex>
            </Container>
        </section>
    );
};
 
export default LatestNews;