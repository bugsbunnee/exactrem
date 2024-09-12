import React from 'react';
import AppButton from '@/components/ui/Button';

import { Box, Container, Flex, Heading, Text } from '@radix-ui/themes';


interface Props {
    description: string;
    title:string;
    cta: string;
}

const GeneralServiceCTA: React.FC<Props> = ({ description, cta, title}) => {
    return (
        <section className='bg-black dark:bg-white p-20 flex items-center justify-center'>
            <Container>
                <Flex align='center' gap='8' justify='center'>
                    <Box>
                        <Flex data-aos="fade-up" align='center' gap='8' justify='center' >
                            <Heading data-aos="fade-up" size='8' className='text-primary text-center max-w-3xl '>{title}</Heading>
                        </Flex>

                        <Flex data-aos="fade-down" align='center' className='mt-10 mb-20' gap='8' justify='center' >
                            <Text as='div' size='5' className='text-white text-center max-w-3xl dark:text-black '>
                                {description}
                            </Text>
                        </Flex>

                        <Flex align='center' gap='8' justify='center' >
                            <AppButton label={cta} route='/register' mode='dark' />
                        </Flex>
                    </Box>
                </Flex>
            </Container>
        </section>
    )
};

export default GeneralServiceCTA;