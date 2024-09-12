'use client';

import Hero from '@/components/sections/Hero/Hero';
import NavBar from '@/components/sections/NavBar/NavBar';
import Calculator from '@/components/sections/Calculator/Calculator';
import Coverage from '@/components/sections/Coverage/Coverage';
import Customer from '@/components/sections/Customer/Customer';
import CoreUSP from '@/components/sections/CoreUSP/CoreUSP';
import FAQs from '@/components/sections/FAQ/Faq';
import Footer from '@/components/sections/Footer/Footer';
import LatestNews from '@/app/[lang]/about/_components/LatestNews';
import Partners from '@/components/sections/Partners/Partners';
import SectionDivider from '@/components/common/SectionDivider';
import ServiceCoverage from '@/app/[lang]/services/_components/ServiceCoverage';
import Usp from '@/components/sections/USP/Usp';

function HomePage() {
	return (
		<>
			<NavBar />

			<Hero />

            <ServiceCoverage />

			<Customer />

			<Usp />

			<Calculator />

			<FAQs />

			<Coverage />

			<SectionDivider />

			<CoreUSP />

			<SectionDivider />

			<Partners displayHeading={false} />

            <LatestNews />

			<Footer />
		</>
	);
}

export default HomePage;