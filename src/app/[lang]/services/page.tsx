import React from 'react';

import { Container } from '@radix-ui/themes';

import CoreServices from '@/app/[lang]/services/_components/CoreServices';
import Footer from '@/components/sections/Footer/Footer';
import NavBar from '@/components/sections/NavBar/NavBar';
import ServiceHero from '@/app/[lang]/services/_components/ServiceHero';
import ServiceCoverage from '@/app/[lang]/services/_components/ServiceCoverage';
import ServiceUSP from '@/app/[lang]/services/_components/ServiceUSP';

const ServicesPage = () => {
    return (
        <>
            <NavBar />
            
            <ServiceHero />

            <ServiceCoverage />
            
            <CoreServices />
            
            <ServiceUSP />

            <Footer />
        </>
    )
};

export default ServicesPage;