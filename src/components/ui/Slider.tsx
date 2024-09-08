'use client';

import React, { PropsWithChildren } from 'react';
import Slider, { ResponsiveObject } from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface SliderProps extends PropsWithChildren {
	slidesToShow: number;
	responsive?: ResponsiveObject[];
	autoplaySpeed?: number;
	arrows: boolean;
	speed: number;
	autoplay: boolean;
	infinite: boolean;
	dots: boolean;
}

const AppSlider = React.forwardRef<Slider, SliderProps>((props, ref) => {
	return (
		<Slider
			ref={ref}
			adaptiveHeight
			autoplay={props.autoplay}
			autoplaySpeed={props.autoplaySpeed}
			dots={props.dots}
			infinite={props.infinite}
			arrows={props.arrows}
			speed={props.speed}
			slidesToShow={props.slidesToShow}
			slidesToScroll={1}
			responsive={props.responsive}
		>
			{props.children}
		</Slider>
	)
});

AppSlider.displayName = 'AppSlider';

export default AppSlider;
