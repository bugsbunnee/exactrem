'use client';

import React from 'react';

import AppSlider from '@/components/ui/Slider';
import Conditional from '@/components/common/Conditional';

import { Box } from '@radix-ui/themes';

import useDictionary from '@/hooks/useDictionary';

const SectionDivider: React.FC= () => {
    const dictionary = useDictionary();

    return ( 
        <Conditional isVisible={false}>
            <section className='border-y border-dashed border-stone-600 p-7'>
                <AppSlider
                    autoplay
                    autoplaySpeed={3000}
                    arrows={false}
                    speed={500}
                    infinite
                    dots={false}
                    cssEase='linear'
                    slidesToShow={3}
                >
                    {dictionary.components.section_divider.map((usp) => (
                        <Box key={usp} className='uppercase border-r border-orange-600 dark:border-white font-semibold tracking-wide text-sm text-black dark:text-primary min-w-96 text-center'>
                            {usp}
                        </Box>
                    ))}
                </AppSlider>
            </section>
        </Conditional>
     );
};
 
export default SectionDivider;