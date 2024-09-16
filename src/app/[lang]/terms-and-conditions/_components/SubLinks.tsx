"use client"

import React, { useEffect } from 'react';

import { Box, Heading, Text } from '@radix-ui/themes';
import { Link, scrollSpy } from 'react-scroll';

import { PrivacySection } from '@/utils/models';

interface Props {
    title: string;
    sections: PrivacySection[];
}

const SubLinks: React.FC<Props> = ({ sections, title }) => {
    useEffect(() => {
        scrollSpy.update();
    }, []);

    return ( 
        <Box className="sticky top-28 max-lg:relative max-lg:top-auto max-lg:p-10">
            <Heading size="6" mb="4">{title}</Heading>

            {sections.map((section) => (
                <Text as="div" className="hover:text-primary cursor-pointer" my="5" size="4" key={section.title}>
                    <Link 
                        activeClass="text-primary" 
                        to={section.title} 
                        spy 
                        smooth 
                        offset={50} 
                        duration={500} 
                        >
                        {section.title}
                    </Link>
                </Text>
            ))}
        </Box>
     );
};

export default SubLinks;

 