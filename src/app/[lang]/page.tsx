'use client';

import Converter from '@/components/common/Converter';
import FAQs from '@/components/sections/FAQ/Faq';
import LocaleSwitcher from '@/components/common/LocaleSwitcher';
import ThemeSwitcher from '@/components/common/ThemeSwitcher';
import AppButton from '@/components/ui/Button';
import AppSlider from '@/components/ui/Slider';
import TransferCard from '@/components/ui/TransferCard';

import { Box, Skeleton } from '@radix-ui/themes';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import Usp from '@/components/sections/USP/Usp';
import Hero from '@/components/sections/Hero/Hero';
import NavBar from '@/components/sections/NavBar/NavBar';
import Calculator from '@/components/sections/Calculator/Calculator';
import Contact from '@/components/sections/Contact/Contact';
import CoreUSP from '@/components/sections/CoreUSP/CoreUSP';
import Partners from '@/components/sections/Partners/Partners';
import Coverage from '@/components/sections/Coverage/Coverage';
import Customer from '@/components/sections/Customer/Customer';
import Footer from '@/components/sections/Footer/Footer';
import SectionDivider from '@/components/common/SectionDivider';

export default function Home() {
	return (
		<>
			<NavBar />

			<Hero />

			<Customer />

			<Usp />

			<Calculator />

			<FAQs />

			<Coverage />

			<SectionDivider />

			<CoreUSP />

			<SectionDivider />

			<Partners displayHeading={false} />

			<section className='my-32'>
				<Contact />
			</section>

			<Footer />
		</>
	);
}
