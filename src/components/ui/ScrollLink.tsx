"use client"

import React, { useEffect } from 'react';
import { Link, scrollSpy } from 'react-scroll';

interface Props {
    id: string;
    title: string;
    className: string,
}

const ScrollLink: React.FC<Props> = ({ id, title, className }) => {
    useEffect(() => {
        scrollSpy.update();
    }, []);

    return ( 
        <Link 
            activeClass="text-primary" 
            to={id} 
            spy 
            smooth 
            offset={50} 
            duration={500} 
            className={className}
            >
            {title}
        </Link>
     );
};

export default ScrollLink;

 