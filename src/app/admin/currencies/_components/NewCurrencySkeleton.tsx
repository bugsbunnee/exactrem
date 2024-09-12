import React from 'react';
import { Box,  Skeleton, Text } from '@radix-ui/themes';

const NewCurrencySkeleton = () => {
	return (
		<Box className="w-full">
			<Box className="w-full">
				<Text size="2" className="font-bold">
					<Skeleton>Currency Label</Skeleton>
				</Text>

				<Skeleton className='w-full h-10' />
			</Box>

			<Box className="w-full mt-4">
				<Text size="2" className="font-bold">
					<Skeleton>Value</Skeleton>
				</Text>

				<Skeleton className='w-full h-10' />
			</Box>

			<Box className="w-full mt-4">
				<Text size="2" className="font-bold">
					<Skeleton>Country</Skeleton>
				</Text>

				<Skeleton className='w-full h-10' />
			</Box>
			
			<Box className="min-w-32 max-sm:w-full" my="6">
				<Skeleton className='w-full h-10' />
			</Box>
		</Box>
	);
};

export default NewCurrencySkeleton;
