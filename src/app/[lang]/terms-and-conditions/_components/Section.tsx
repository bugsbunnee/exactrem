'use client';

import React from 'react';
import Conditional from "@/components/common/Conditional";

import { Box, Heading, Text,  } from '@radix-ui/themes';
import { TermAndCondition } from '@/utils/models';
import { formatDate } from '@/utils/lib';

interface Props {
    termAndCondition: TermAndCondition;
}

const Section: React.FC<Props> = ({ termAndCondition }) => {
    return ( 
        <Box>
            <Text as="p" size="2" mb="6" className="text-gray-600 dark:text-white">
                {formatDate(termAndCondition.last_updated, 'MMMM, YYYY')}
            </Text>

            <Heading size="8">{termAndCondition.title}</Heading>

            <Text as="p" my="5" size="4" className="max-w-xl leading-8">
                {termAndCondition.description}
            </Text>

            {termAndCondition.list.map((term, index) => (
                <Box id={term.title} key={term.title}>
                    <Heading size="8">{index + 1}. {term.title}</Heading>

                    <Text as="p" my="5" size="4" className="max-w-xl leading-8">
                        {term.description}
                    </Text>

                    <Conditional isVisible={term.subSections.length > 0}>
                        <ul className="max-w-lg mb-5 list-disc">
                            {term.subSections.map((subSection) => (
                                <li className="text-lg mb-3" key={subSection.description}>
                                    {subSection.title && <strong>{subSection.title}</strong>}
                                    {subSection.description}
                                </li>
                            ))}
                        </ul>
                    </Conditional>
                    
                    {term.paragraphs && (
                        <ul className="max-w-lg mb-5 list-none">
                            {term.paragraphs.map((paragraph) => (
                                <li className="text-lg mb-3" key={paragraph}>{paragraph}</li>
                            ))}
                        </ul>
                    )}
                </Box>
            ))}
        </Box>
     );
}
 
export default Section;