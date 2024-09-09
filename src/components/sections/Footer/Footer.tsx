import React from "react";
import Link from "next/link";

import Logo from "@/components/ui/Logo";
import Newsletter from "../Newsletter/Newsletter";
import SocialLinks from "@/components/ui/SocialLinks";

import { Box, Container, Flex, Grid, Heading, Separator, Text } from "@radix-ui/themes";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";


const Footer = () => {
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
                                © {new Date().getFullYear()} Exactrem. All Rights Reserved.
                            </Text>
                        </Box>
                    </Box>
                    
                    <Box>
                        <Heading size='5'>Company</Heading>

                        <Box className="my-3">
                            <Link className='underline' href='/about'>
                                About us
                            </Link>
                        </Box>
                        
                        <Box className="my-3">
                            <Link className='underline' href='/blog'>
                                Blog
                            </Link>
                        </Box>
                        
                        <Box className="my-3">
                            <Link className='underline' href='/news'>
                                Newsroom
                            </Link>
                        </Box>
                    </Box>
                    
                    <Box>
                        <Heading size='5'>Product</Heading>

                        <Box className="my-3">
                            <Link className='underline' href='/register'>
                               Get started
                            </Link>
                        </Box>

                        <Box className="my-3">
                            <Link className='underline' href='/'>
                                Services
                            </Link>
                        </Box>
                        
                        <Box className="my-3">
                            <Link className='underline' href='/'>
                                Invite a friend
                            </Link>
                        </Box>
                    </Box>
                    
                    <Box>
                        <Heading size='5'>Contact</Heading>

                        <Box className="my-3">
                            <Link className='underline' href='/contact'>
                                Send us a message
                            </Link>
                        </Box>

                        <Flex align='center' className="my-3" gap="2">
                            <EnvelopeClosedIcon width='18' height='18' />

                            <Link href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}>
                                {process.env.NEXT_PUBLIC_EMAIL}
                            </Link>
                        </Flex>
                        
                        <Box className="my-3">
                            <Heading size='5' className='my-6'>Connect</Heading>

                            <SocialLinks />
                        </Box>
                    </Box>
                </Grid>
            </Container>
        </footer>
     );
}
 
export default Footer;