
'use client';

import React from 'react';
import _ from 'lodash';

import { Box, Container, Grid, Heading, Text } from '@radix-ui/themes';

import ContactForm from '@/components/sections/Contact/Contact';
import Footer from '@/components/sections/Footer/Footer';
import NavBar from '@/components/sections/NavBar/NavBar';

import useDictionary from '@/hooks/useDictionary';

const ContactPage: React.FC = () => {
    const { page } = useDictionary();

    return ( 
        <>
            <NavBar />

            <section className='p-16 max-md:p-6'>
                <Container>
                    <Grid columns={{ initial: '1', md: '2' }} gap={{ initial: '9', md: '4' }}>
                        <Box data-aos="zoom-in-up">
                            <Box className='max-w-96'>
                                <Heading size='9' className='leading-12'>{page.contact.title}</Heading>

                                <Text as='p' className='mt-10 mb-6'>
                                    {page.contact.description_one}
                                </Text>

                                <Text as='p'>
                                    {page.contact.description_two}
                                </Text>
                            </Box>
                        </Box>
                        <Box>
                            <ContactForm />
                        </Box>
                    </Grid>
                </Container>
            </section>

            <Footer />
        </>
    );
};
 
export default ContactPage;