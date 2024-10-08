'use client';

import React from 'react';
import Image from 'next/image';

import { Box, Container, Grid, Heading, Text } from '@radix-ui/themes';

import useDictionary from '@/hooks/useDictionary';

const AboutContent = () => {
    const dictionary = useDictionary();

    return (
        <section className="py-20">
            <Container>
                <Grid gap="9" align="center" justify="center" columns={{ initial: "1", md: "2" }}>
                    <Box data-aos="zoom-in-up" className="w-full mb-24">
                        <figure className="block overflow-hidden relative w-full">
                            <Image src={dictionary.page.about.about_content.mission.src} alt={dictionary.page.about.about_content.mission.title} width={0} height={0} className="w-full h-96 object-cover" />
                        
                            <figcaption className="absolute bottom-6 right-6 leading-9 text-lg text-white font-semibold">
                                {dictionary.page.about.about_content.mission.title}
                            </figcaption>
                        </figure>
                    </Box>

                    <Box data-aos="zoom-in-down"  className="w-full relative mb-24 max-md:px-9">
                        <Heading size="8">{dictionary.page.about.about_content.mission.title}</Heading>

                        <Text as="p" className="mt-8 leading-8 text-justify max-w-md" size="3">
                            {dictionary.page.about.about_content.mission.description} 
                        </Text>
                    </Box>
                    
                    <Box data-aos="zoom-in-down"  className="w-full max-md:px-9">
                        <Heading size="8">{dictionary.page.about.about_content.vision.title}</Heading>

                        <Text as="p" className="mt-8 leading-8 text-justify max-w-md" size="3">
                            {dictionary.page.about.about_content.vision.description}
                        </Text>
                    </Box>

                    <Box data-aos="zoom-in-up" className="w-full relative">
                        <figure className="block overflow-hidden relative w-full">
                            <Image src={dictionary.page.about.about_content.vision.src} alt={dictionary.page.about.about_content.vision.title} width={0} height={0} className="w-full h-96 object-cover" />
                       
                            <figcaption className="absolute bottom-6 left-6 leading-9 text-lg text-white font-semibold">
                                {dictionary.page.about.about_content.vision.title}
                            </figcaption>
                        </figure>
                    </Box>
                </Grid>
            </Container>
        </section>
    )
};

export default AboutContent;