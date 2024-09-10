import React from 'react';
import Converter from '@/components/common/Converter';

import { Box, Container, Flex, Heading, Text } from '@radix-ui/themes';

import useDictionary from '@/hooks/useDictionary';

const Calculator: React.FC = () => {
	const dictionary = useDictionary();

	return (
		<section className="mt-32 mb-10 bg-black text-white dark:bg-white dark:text-black">
			<Container>
				<Flex className="p-10 py-20" align="center" gap="7" data-aos="zoom-in-left">
					<Box className="flex-1">
						<Heading size="8" className="leading-10">
							{dictionary.page.calculator.title}
						</Heading>

						<Box className="mt-10">
							<Text size="4">{dictionary.page.calculator.description}</Text>
						</Box>
					</Box>

					<Flex className="flex-1 justify-center" data-aos="zoom-in-right" data-aos-delay="500">
						<Converter />
					</Flex>
				</Flex>
			</Container>
		</section>
	);
};

export default Calculator;
