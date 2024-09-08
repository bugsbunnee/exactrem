import React from 'react';

import AboutHero from './_components/Hero';
import Overview from './_components/Overview';
import Values from './_components/Values';
import NavBar from '@/components/sections/NavBar/NavBar';
import Partners from '@/components/sections/Partners/Partners';
import Team from './_components/Team';
import AboutContent from './_components/AboutContent';
import Footer from '@/components/sections/Footer/Footer';

const About = () => {
    return (
        <>
            <NavBar />

            <AboutHero />

            <Partners displayHeading={false} />

            <Overview />
            
            <Values />

            <AboutContent />

            <Team />

            <Footer />
        </>
    )
};

export default About;