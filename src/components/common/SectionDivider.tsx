'use client';

import React from 'react';
import AppSlider from '../ui/Slider';

import { Box, Flex } from '@radix-ui/themes';

const SectionDivider: React.FC= () => {
    const usps = ['International Payments', 'Fast & reliable', 'Safe & Secure', '24/7 Customer Support', 'Top-Tier Security', 'Transparent pricing'];

    return ( 
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
                {usps.map((usp) => (
                    <Box key={usp} className='uppercase border-r border-stone-300 font-semibold tracking-wide text-sm text-black hover:text-primary min-w-96 text-center'>
                        {usp}
                    </Box>
                ))}
            </AppSlider>
        </section>
     );
};
 
export default SectionDivider;