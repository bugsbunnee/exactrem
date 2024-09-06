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
import Partners from '@/components/sections/Partners/Partners';
import Coverage from '@/components/sections/Coverage/Coverage';

export default function Home() {
	return (
		<>
			<NavBar />

			<Hero />

			<Partners />

			<Usp />

			{/* <Box className="w-full mt-5 mb-30">
				<AppSlider slidesToShow={6}>
					<TransferCard
						backgroundColor="bg-yellow-400"
						userFirstName="Victoria"
						countryName="Canada"
						userSrc="https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png"
						flagSrc="https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png"
						price={2500}
						currency="CAD"
					/>

					<TransferCard
						backgroundColor="bg-blue-700"
						userFirstName="Victoria"
						countryName="Canada"
						userSrc="https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png"
						flagSrc="https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png"
						price={5000}
						currency="USD"
					/>

					<TransferCard
						backgroundColor="bg-sky-950"
						userFirstName="Victoria"
						countryName="Canada"
						userSrc="https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png"
						flagSrc="https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png"
						price={5000}
						currency="USD"
					/>

					<TransferCard
						backgroundColor="bg-yellow-600"
						userFirstName="Victoria"
						countryName="Canada"
						userSrc="https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png"
						flagSrc="https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png"
						price={2500}
						currency="CAD"
					/>

					<TransferCard
						backgroundColor="bg-blue-700"
						userFirstName="Victoria"
						countryName="Canada"
						userSrc="https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png"
						flagSrc="https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png"
						price={5000}
						currency="USD"
					/>

					<TransferCard
						backgroundColor="bg-sky-950"
						userFirstName="Victoria"
						countryName="Canada"
						userSrc="https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png"
						flagSrc="https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png"
						price={5000}
						currency="USD"
					/>
				</AppSlider>
			</Box> */}

			<Calculator />

			<FAQs />

			<Coverage />

			<Contact />
		</>
	);
}
