import React from 'react';
import Converter from '@/components/common/Converter';

import { Box, Container, Flex, Heading, Text } from '@radix-ui/themes';

import useDictionary from '@/hooks/useDictionary';

const Calculator: React.FC = () => {
	const dictionary = useDictionary();

	return (
		<section className="mt-32 mb-10">
			<Container>
				<Flex className="p-10 py-20" align="center" gap="7">
					<Box className="flex-1">
						<Heading size="8" className="leading-10">
							{dictionary.page.calculator.title}
						</Heading>

						<Box className="mt-10">
							<Text size="4">{dictionary.page.calculator.description}</Text>
						</Box>
					</Box>

					<Flex className="flex-1 justify-center">
						<Converter />
					</Flex>
				</Flex>
			</Container>
		</section>
	);
};

export default Calculator;
