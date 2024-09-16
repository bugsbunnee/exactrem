import React from 'react';
import Image from 'next/image';

import { Box, Container, Grid, Text } from '@radix-ui/themes';
import useDictionary from '@/hooks/useDictionary';

const Customer = () => {
    const dictionary = useDictionary();

    return (
        <section className="my-20 py-24">
            <Container>
                <Grid gap={{ md: "9", initial: "0" }} justify="center" columns={{ md: "58% 42%", initial: "1" }}>
                    <Box className="w-full animate__animated animate__backInLeft" data-aos-delay="1000" data-aos="fade-up"> 
                        <figure className="block overflow-hidden relative w-full">
                            <Image src={dictionary.page.customer.left_url} alt="Customer" width={0} height={0} className="w-full h-[45rem] max-md:h-auto object-cover" />
                        
                            <figcaption className="absolute bottom-6 right-6 leading-9 text-lg text-white font-semibold">
                                {dictionary.page.customer.left_caption}
                            </figcaption>
                        </figure>
                    </Box>
                    <Box className="-mt-28 max-lg:mt-0 w-full relative animate__animated animate__backInRight">
                        <figure className="block overflow-hidden relative w-full" data-aos-delay="1000" data-aos="fade-down">
                            <Image src={dictionary.page.customer.right_url} alt="Customer" width={0} height={0} className="w-full h-[35rem] object-cover" />
                       
                            <figcaption className="absolute bottom-6 left-6 leading-9 text-lg text-white font-semibold">
                                {dictionary.page.customer.right_caption}
                            </figcaption>
                        </figure>

                        <Text as="p" className="mt-24 max-lg:px-12 max-lg:max-w-xl leading-8 text-justify max-w-md" size="4" data-aos-delay="1000" data-aos="fade-left">
                            {dictionary.page.customer.description}
                        </Text>
                    </Box>
                </Grid>
            </Container>
        </section>
    )
};

export default Customer;