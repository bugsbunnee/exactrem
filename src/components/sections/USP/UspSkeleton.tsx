import React from 'react';
import _ from 'lodash';

import { Box, Grid, Heading, Skeleton, Text } from '@radix-ui/themes';

const UspSkeleton = () => {
	const filler = _.range(1, 4);

	return (
		<>
			<Heading className="text-center my-20" size="9">
				<Skeleton>Section Header</Skeleton>
			</Heading>

			<Grid columns="3" align="center" className="px-40" gap="6">
				{filler.map((fill) => (
					<Box
						className="p-12 bg-sky-50 dark:bg-[#222] h-[32rem] rounded-3xl"
						key={fill}
					>
						<Skeleton className="w-36 h-36 rounded-3xl mb-20" />

						<Box>
							<Text className="leading-8" size="4">
								<Skeleton>
									This is a really long text spanning across multiple lines
								</Skeleton>
							</Text>
						</Box>
					</Box>
				))}
			</Grid>
		</>
	);
};

export default UspSkeleton;
