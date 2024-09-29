import React from 'react';
import Image from 'next/image';

import { Flex } from '@radix-ui/themes';

import Link from 'next/link';

const Logo = () => {
	return (
		<Flex gap="2" align="center">
			<Link className="uppercase font-black" href='/'>
				<Image 
					width={30}
					height={30}
					src='/exactrem.png'
					alt='Exactrem'
					className='w-32 h-10 rounded-sm object-fit'
				/>
			</Link>
		</Flex>
	);
};

export default Logo;
