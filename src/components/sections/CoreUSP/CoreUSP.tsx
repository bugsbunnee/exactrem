'use client';

import React, { useCallback } from 'react';
import Image from 'next/image';

import AppButton from '@/components/ui/Button';

import { Box, Container, Flex, Grid, Heading, Text } from '@radix-ui/themes';

import useDictionary from '@/hooks/useDictionary';

interface USP {
    src: string;
    title: string;
    description: string;
    cta: string;
}

const CoreUSP = () => {
    const dictionary = useDictionary();
    const renderImage = useCallback((usp: USP) => {
        return(
             <Box className="w-full mb-24">
                 <figure className="block overflow-hidden relative w-full">
                     <Image src={usp.src} alt={usp.title} width={0} height={0} className="w-full h-96 object-cover" />
                 
                     <figcaption className="absolute bottom-6 right-6 leading-9 text-lg text-white font-semibold">
                         {usp.title}
                     </figcaption>
                 </figure>
             </Box>
        );
     }, []);
    
    const renderText = useCallback((usp: USP) => {
        return(
             <Box className="w-full relative mb-24">
                 <Heading>
                     {usp.title}
                 </Heading>
 
                 <Text as="p" className="my-8 leading-8 text-justify max-w-md" size="3">
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
                    <Heading size='7' className='mb-32 text-center max-w-96'>
                        {dictionary.page.core_usps.title.one} <br /> <span className='font-bold text-5xl text-primary'>{dictionary.page.core_usps.title.two}</span>
                    </Heading>
                </Flex>

                <Grid gap="9" align="center" justify="center" columns="2">
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