'use client';

import React from 'react';
import dynamic from "next/dynamic";

const DynamicLottie = dynamic(() => import("lottie-react"), { ssr: false });

interface Props {
    animationData: object;
    width: number;
    height: number;
}

const Lottie: React.FC<Props> = ({ animationData, height, width }) => {
    return (
        <DynamicLottie 
            style={{ width, height }}
            animationData={animationData}
            loop
            autoPlay
            rendererSettings={{
                preserveAspectRatio: 'xMidYMid slice'
            }}
        />
    )
};

export default Lottie;