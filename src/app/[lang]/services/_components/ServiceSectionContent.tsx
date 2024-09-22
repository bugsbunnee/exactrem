'use client';

import React, { useCallback } from 'react';
import { Box, Container, Flex, Grid, Heading, Text } from '@radix-ui/themes';
import { ServiceListItem } from '@/utils/models';

import Conditional from '@/components/common/Conditional';
import Image from 'next/image';

import classNames from 'classnames';

interface CoreService {
    src: string;
    title: string;
    description: string;
}

interface Props extends ServiceListItem {
    id: string;
    index: number;
}

const ServiceSectionContent: React.FC<Props> = ({ bgClass, id, description, src, titleOne, titleTwo, index, labels }) => {
    const [firstLabel, secondLabel] = labels;

    const renderImage = useCallback(() => {
        return(
             <Box data-aos="zoom-out-down" className="w-full mb-24">
                 <figure className="block overflow-hidden relative w-full">
                     <Image src={src} alt={id} width={0} height={0} className="w-full h-96 object-cover" />
                 
                     <figcaption className="absolute bottom-6 right-6 leading-9 text-lg text-white font-semibold">
                         {secondLabel}
                     </figcaption>
                 </figure>
             </Box>
        );
     }, [id, src]);
    
    const renderText = useCallback(() => {
        return(
             <Box data-aos="zoom-out-up" className="w-full relative mb-24 max-lg:px-9">
                 <Heading>
                    {firstLabel}
                 </Heading>
 
                 <Text as="p" className="my-8 leading-8 text-justify max-w-md" size="3">
                     {description}
                 </Text>
             </Box>
        );
     }, [description, id]);

    const isEven = (index + 1) % 2 === 0;

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

                <Grid gap="9" align="center" justify="center" columns={{ initial: "1", md: "2" }}>
                    <Conditional isVisible={isEven}>
                        {renderText()}
                        {renderImage()}
                    </Conditional>
                    
                    <Conditional isVisible={!isEven}>
                        {renderImage()}
                        {renderText()}
                    </Conditional>
                </Grid>
            </Container>
        </section>
    )
};

export default ServiceSectionContent;