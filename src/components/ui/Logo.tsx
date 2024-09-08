import React from 'react';

import { BarChartIcon } from '@radix-ui/react-icons';
import { Flex, Text } from '@radix-ui/themes';
import Link from 'next/link';

const Logo = () => {
	return (
		<Flex gap="2" align="center">
			<BarChartIcon width="18" height="18" className="text-orange-600" />

			<Link className="uppercase font-black" href='/'>
				Exact<span className="text-orange-600">rem</span>
			</Link>
		</Flex>
	);
};

export default Logo;
