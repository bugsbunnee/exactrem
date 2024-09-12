'use client';

import React, { useCallback } from 'react';
import { Box, Container, Flex, Grid, Heading, Text } from '@radix-ui/themes';

import Image from 'next/image';
import AppButton from '@/components/ui/Button';

import classNames from 'classnames';

interface CoreService {
    src: string;
    title: string;
    description: string;
}

interface Props {
    titleOne: string;
    titleTwo: string;
    serviceList: CoreService[];
    bgClass: string;
    id: string;
}

const ServiceSectionContent: React.FC<Props> = ({ bgClass, id, serviceList, titleOne, titleTwo }) => {
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
             </Box>
        );
     }, []);

    return (
        <section id={id} className={classNames({
            'py-20': true,
            [bgClass]: true,
        })}>
            <Container>
                <Flex justify='center' align='center'>
                    <Heading data-aos="zoom-in-down" size='7' className='mb-32 text-center max-w-96'>
                        {titleOne} <br /> <span className='font-bold text-5xl text-primary'>{titleTwo}</span>
                    </Heading>
                </Flex>

                <Grid gap="9" align="center" justify="center" columns="2">
                    {serviceList.map((service, index) => {
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

export default ServiceSectionContent;