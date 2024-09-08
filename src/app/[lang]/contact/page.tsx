
import React from 'react';
import _ from 'lodash';

import { Box, Container, Grid, Heading, Text } from '@radix-ui/themes';

import Conditional from '@/components/common/Conditional';
import ContactForm from '@/components/sections/Contact/Contact';
import Footer from '@/components/sections/Footer/Footer';
import NavBar from '@/components/sections/NavBar/NavBar';

const ContactPage: React.FC = () => {
    return ( 
        <>
            <NavBar />

            <section className='p-16'>
                <Container>
                    <Grid columns='2' gap='4'>
                        <Box>
                            <Box className='max-w-96'>
                                <Heading size='9' className='leading-12'>Contact our sales team</Heading>

                                <Text as='p' className='mt-10 mb-6'>
                                    With Flutterwave you can Sell online, process payments, build 
                                    financial products, or use business tools designed to grow your business.
                                </Text>

                                <Text as='p'>
                                    With Flutterwave you can Sell online, process payments, build 
                                    financial products, or use business tools designed to grow your business.
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