import React from 'react';

import AboutHero from './_components/Hero';
import Overview from './_components/Overview';
import Values from './_components/Values';
import NavBar from '@/components/sections/NavBar/NavBar';
import Partners from '@/components/sections/Partners/Partners';
import LatestNews from './_components/LatestNews';
import AboutContent from './_components/AboutContent';
import Footer from '@/components/sections/Footer/Footer';

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