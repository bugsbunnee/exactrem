'use client';

import React, { useRef } from 'react';
import Image from 'next/image';

import { Box, Card, Container, Flex, Heading, IconButton, Text } from '@radix-ui/themes';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';

import AppSlider from '@/components/ui/Slider';
import Slider from 'react-slick';

const Team : React.FC= () => {
    const sliderRef = useRef<Slider>(null);

    const teamMembers = [
        {
            src: 'https://picsum.photos/200/300',
            firstName: 'Simon',
            lastName: 'moran',
            description: 'No behaviour escapes his scrutiny. No pattern evades his grasp. He’s our all-knowing Chief Data and Analytics Officer.',
        },
        {
            src: 'https://picsum.photos/200/300',
            firstName: 'Joe',
            lastName: 'bernard',
            description: 'No behaviour escapes his scrutiny. No pattern evades his grasp. He’s our all-knowing Chief Data and Analytics Officer.',
        },
        {
            src: 'https://picsum.photos/200/300',
            firstName: 'Ric',
            lastName: 'banjo',
            description: 'No behaviour escapes his scrutiny. No pattern evades his grasp. He’s our all-knowing Chief Data and Analytics Officer.',
        },
        {
            src: 'https://picsum.photos/200/300',
            firstName: 'Fadeke',
            lastName: 'Morenike',
            description: 'No behaviour escapes his scrutiny. No pattern evades his grasp. He’s our all-knowing Chief Data and Analytics Officer.',
        },
        {
            src: 'https://picsum.photos/200/300',
            firstName: 'Mayowa',
            lastName: 'Joseph',
            description: 'No behaviour escapes his scrutiny. No pattern evades his grasp. He’s our all-knowing Chief Data and Analytics Officer.',
        },
    ];

    return ( 
        <section className='p-20'>
            <Container>
                <Heading className='text-center' size='8'>Meet the team!</Heading>

                <Text as='p' className='mb-14 mt-5 text-center' size='3'>
                    Meet the TransferGo talent leading the way towards a fairer future.
                </Text>

                <Flex justify='end' gap='2' align='center' my='4'>
                    <IconButton variant='soft' size='3' onClick={() => sliderRef.current?.slickPrev()}>
                        <ChevronLeftIcon width='30' height='30' />
                    </IconButton>
                    
                    <IconButton variant='soft' size='3' onClick={() => sliderRef.current?.slickNext()}>
                        <ChevronRightIcon width='30' height='30' />
                    </IconButton>
                </Flex>

                <AppSlider 
                    ref={sliderRef}
                    autoplay
                    autoplaySpeed={3000}
                    arrows={false}
                    speed={500}
                    infinite
                    dots={false}
                    slidesToShow={4}
                >
                    {teamMembers.map((member) => (
                        <Flex className="max-w-80" align='center' justify='center' key={member.firstName + member.lastName}>
                            <Card className="max-w-80">
                                <Image 
                                    src={member.src}
                                    alt={member.firstName} 
                                    width={0} 
                                    height={0} 
                                    className='rounded-lg w-full h-52 object-cover' 
                                />


                                <Box className='bg-stone-50 dark:bg-[#222] border border-stone-300 dark:border-stone-600 p-3 rounded-lg mt-3'>
                                    <Heading size='4' className='font-semibold mb-2 capitalize'>
                                        {member.firstName} {member.lastName}
                                    </Heading>

                                    <Text size='2'>
                                        {member.description}
                                    </Text>
                                </Box>
                            </Card>
                        </Flex>
                    ))}
                </AppSlider>
            </Container>
        </section>
    );
};
 
export default Team;