import React from 'react';
import _ from 'lodash';

import { Box, Card, Flex, Heading, Skeleton, Text } from '@radix-ui/themes';

const FaqSkeleton = () => {
	const fillers = _.range(1, 6);

	return (
		<>
			<Heading className="text-center mt-20 mb-10" size="9">
				<Skeleton>Frequently asked questions</Skeleton>
			</Heading>

			<Flex justify="center" align="center" className="p-5">
				<Box className="flex-1 z-40 -mr-20 pl-28">
					{fillers.map((filler) => (
						<Card
							key={filler}
							className="flex min-h-24 w-full flex items-center p-6 shadow-2xl rounded-xl"
						>
							<Skeleton className="w-12 h-12 rounded-full" />

							<Box className="flex-1 text-left ml-3">
								<Skeleton className="w-44 h-8" />
							</Box>

							<Skeleton className="w-8 h-8 rounded-full" />
						</Card>
					))}
				</Box>

				<Box className="flex-1 bg-gray-100 dark:bg-[#222] p-20 pl-40 rounded-2xl h-[43rem]">
					<Text>
						<Skeleton>
							This is a really really really long description. It should ideally
							span over severally lines so as to simulate loading text.
						</Skeleton>
					</Text>
				</Box>
			</Flex>
		</>
	);
};

export default FaqSkeleton;
