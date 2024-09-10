'use client';

import React from "react";
import Link from "next/link";

import Logo from "@/components/ui/Logo";
import Newsletter from "../Newsletter/Newsletter";
import SocialLinks from "@/components/ui/SocialLinks";

import { Box, Container, Flex, Grid, Heading, Separator, Text } from "@radix-ui/themes";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";

import useDictionary from "@/hooks/useDictionary";

const Footer = () => {
    const dictionary = useDictionary();

    return ( 
        <footer className="p-20 bg-primary text-white dark:bg-[#222]">
            <Container>
                <Newsletter />

                <Separator className='my-10 bg-white' size='4' />

                <Grid columns='4'>
                    <Box>
                        <Logo />

                        <Box className="my-3 max-w-24">
                            <Text>
                                © {new Date().getFullYear()} {dictionary.page.footer.copyright}
                            </Text>
                        </Box>
                    </Box>
                    
                    <Box>
                        <Heading size='5'>{dictionary.page.footer.company}</Heading>

                        <Box className="my-3">
                            <Link className='underline' href={dictionary.page.footer.links.about.url}>
                                {dictionary.page.footer.links.about.title}
                            </Link>
                        </Box>
                        
                        <Box className="my-3">
                            <Link className='underline' href={dictionary.page.footer.links.blog.url}>
                                {dictionary.page.footer.links.blog.title}
                            </Link>
                        </Box>
                        
                        <Box className="my-3">
                            <Link className='underline' href={dictionary.page.footer.links.news.url}>
                                {dictionary.page.footer.links.news.title}
                            </Link>
                        </Box>
                    </Box>
                    
                    <Box>
                        <Heading size='5'>{dictionary.page.footer.product}</Heading>

                        <Box className="my-3">
                            <Link className='underline' href={dictionary.page.footer.links.register.url}>
                                {dictionary.page.footer.links.register.title}
                            </Link>
                        </Box>

                        <Box className="my-3">
                            <Link className='underline' href={dictionary.page.footer.links.services.url}>
                                {dictionary.page.footer.links.services.title}
                            </Link>
                        </Box>
                    </Box>
                    
                    <Box>
                        <Heading size='5'>{dictionary.page.footer.contact}</Heading>

                        <Box className="my-3">
                            <Link className='underline' href={dictionary.page.footer.links.contact.url}>
                                {dictionary.page.footer.links.contact.title}
                            </Link>
                        </Box>

                        <Flex align='center' className="my-3" gap="2">
                            <EnvelopeClosedIcon width='18' height='18' />

                            <Link href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}>
                                {process.env.NEXT_PUBLIC_EMAIL}
                            </Link>
                        </Flex>
                        
                        <Box className="my-3">
                            <Heading size='5' className='my-6'>{dictionary.page.footer.connect}</Heading>

                            <SocialLinks />
                        </Box>
                    </Box>
                </Grid>
            </Container>
        </footer>
     );
};
 
export default Footer;