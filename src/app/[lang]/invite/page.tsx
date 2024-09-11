import React from 'react';

import Footer from '@/components/sections/Footer/Footer';
import NavBar from '@/components/sections/NavBar/NavBar';

import InviteHero from './_components/InviteHero';
import HowToInvite from './_components/HowToInvite';

const InvitePage = () => {
    return (
        <>
            <NavBar />

            <InviteHero />

            <HowToInvite />

            <Footer />
        </>
    )
};

export default InvitePage;