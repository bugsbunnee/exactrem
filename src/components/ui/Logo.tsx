import React from 'react';

import { BarChartIcon } from '@radix-ui/react-icons';
import { Flex, Text } from '@radix-ui/themes';

const Logo = () => {
	return (
		<Flex gap="2" align="center">
			<BarChartIcon width="18" height="18" className="text-orange-600" />

			<Text className="uppercase font-black" size="4">
				Exact<span className="text-orange-600">rem</span>
			</Text>
		</Flex>
	);
};

export default Logo;
