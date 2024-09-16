'use client';

import React, { useCallback } from 'react';
import classNames from 'classnames';

import AppButton from '@/components/ui/Button';
import Lottie from '@/components/ui/Lottie';

import { Box, Container, Flex, Grid, Heading, Text } from '@radix-ui/themes';

import useDictionary from '@/hooks/useDictionary';

import fast from '@/animations/fast.json';
import money from '@/animations/money.json';
import safe from '@/animations/safe.json';
import transparent from '@/animations/transparent.json';


interface USP {
    src: string;
    title: string;
    description: string;
    cta: string;
    color: string;
}

const CoreUSP = () => {
    const dictionary = useDictionary();

    const getLottie = (key: string) => {
        switch(key) {
            case "seamless":
                return money;
            case "safe":
                return safe;
            case "fast":
                return fast;
            case "transparent":
                return transparent;
            default:
                return fast;
        }
    }

    const renderImage = useCallback((usp: USP) => {
        return(
             <Flex 
                data-aos="zoom-out-right" 
                justify='center'
                align='center'
                className={`w-full mb-24 h-full ${usp.color + '/10'} rounded-md`}
            >
                 <Lottie animationData={getLottie(usp.src)} width={300} height={300} />
             </Flex>
        );
     }, []);
    
    const renderText = useCallback((usp: USP) => {
        return(
             <Box className="w-full relative mb-24 max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center" data-aos="zoom-out-left">
                 <Heading>
                     {usp.title}
                 </Heading>
 
                 <Text as="p" className="my-8 leading-8 max-md:px-12 text-justify max-w-md" size="3">
                     {usp.description}
                 </Text>
 
                 <AppButton label={usp.cta} route='/register' />
             </Box>
        );
     }, []);

    return (
        <section className='py-20'>
            <Container>
                <Flex justify='center' align='center'>
                    <Heading data-aos="fade-down" size='7' className='mb-32 text-center max-w-96'>
                        {dictionary.page.core_usps.title.one} <br /> <span className='font-bold text-5xl text-primary'>{dictionary.page.core_usps.title.two}</span>
                    </Heading>
                </Flex>

                <Grid gap="9" align="center" justify="center" columns={{ initial: "1", md: "2" }}>
                    {Object.values(dictionary.page.core_usps.usps).map((usp, index) => {
                        const isEven = (index + 1) % 2 === 0;

                        return (
                            <React.Fragment key={usp.title}>
                                {isEven ? renderText(usp) : renderImage(usp)}
                                
                                {isEven ? renderImage(usp) : renderText(usp)}
                            </React.Fragment>
                        )
                    })}
                </Grid>
            </Container>
        </section>
    )
};

export default CoreUSP;