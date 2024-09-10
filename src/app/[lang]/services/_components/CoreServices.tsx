'use client';

import React, { useCallback } from 'react';
import Image from 'next/image';

import AppButton from '@/components/ui/Button';
import { Box, Container, Flex, Grid, Heading, Text } from '@radix-ui/themes';

import useDictionary from '@/hooks/useDictionary';

interface CoreService {
    src: string;
    title: string;
    description: string;
    cta: string;
}

const CoreServices = () => {
    const dictionary = useDictionary();

    const renderImage = useCallback((service: CoreService) => {
        return(
             <Box data-aos="zoom-out-down" className="w-full mb-24">
                 <figure className="block overflow-hidden relative w-full">
                     <Image src={service.src} alt={service.title} width={0} height={0} className="w-full h-96 object-cover" />
                 
                     <figcaption className="absolute bottom-6 right-6 leading-9 text-lg text-white font-semibold">
                         {service.title}
                     </figcaption>
                 </figure>
             </Box>
        );
     }, []);
    
    const renderText = useCallback((service: CoreService) => {
        return(
             <Box data-aos="zoom-out-up" className="w-full relative mb-24">
                 <Heading>
                     {service.title}
                 </Heading>
 
                 <Text as="p" className="my-8 leading-8 text-justify max-w-md" size="3">
                     {service.description}
                 </Text>
 
                 <AppButton label={service.cta} route='/register' />
             </Box>
        );
     }, []);

    return (
        <section className='py-20'>
            <Container>
                <Flex justify='center' align='center'>
                    <Heading data-aos="zoom-in-down" size='7' className='mb-32 text-center max-w-96'>
                        {dictionary.page.core_services.title.one} <br /> <span className='font-bold text-5xl text-primary'>{dictionary.page.core_services.title.two}</span>
                    </Heading>
                </Flex>

                <Grid gap="9" align="center" justify="center" columns="2">
                    {Object.values(dictionary.page.core_services.services).map((service, index) => {
                        const isEven = (index + 1) % 2 === 0;

                        return (
                            <React.Fragment key={service.title}>
                                {isEven ? renderText(service) : renderImage(service)}
                                
                                {isEven ? renderImage(service) : renderText(service)}
                            </React.Fragment>
                        )
                    })}
                </Grid>
            </Container>
        </section>
    )
};

export default CoreServices;