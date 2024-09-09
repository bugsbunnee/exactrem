import React from 'react';

import AboutContent from './_components/AboutContent';
import AboutHero from './_components/Hero';
import Footer from '@/components/sections/Footer/Footer';
import LatestNews from './_components/LatestNews';
import NavBar from '@/components/sections/NavBar/NavBar';
import Overview from './_components/Overview';
import Partners from '@/components/sections/Partners/Partners';
import Values from './_components/Offering';

const About = () => {
    return (
        <>
            <NavBar />

            <AboutHero />
            
            <Values />

            <AboutContent />

            <Partners displayHeading={false} />

            <Overview />

            <LatestNews />

            <Footer />
        </>
    )
};

export default About;