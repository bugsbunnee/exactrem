'use client';

import React, { PropsWithChildren } from 'react';
import Slider, { ResponsiveObject } from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface SliderProps extends PropsWithChildren {
	slidesToShow: number;
	responsive?: ResponsiveObject[];
}

function AppSlider(props: SliderProps) {
	return (
		<Slider
			adaptiveHeight
			autoplay
			autoplaySpeed={5000}
			cssEase="linear"
			dots={false}
			infinite
			arrows={false}
			speed={5000}
			slidesToShow={props.slidesToShow}
			slidesToScroll={1}
			responsive={props.responsive}
		>
			{props.children}
		</Slider>
	);
}

export default AppSlider;
