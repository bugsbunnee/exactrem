'use client';

import React from 'react';

import { ArrowRightIcon } from '@radix-ui/react-icons';
import { Box, Button, Text } from '@radix-ui/themes';

interface Props {
	label: string;
	onClick: () => void;
}

const AppButton: React.FC<Props> = ({ label, onClick }) => {
	return (
		<Button
			className="cursor-pointer h-14 w-72 p-0 relative flex justify-start items-center overflow-hidden bg-primary dark:bg-[#222]"
			onClick={onClick}
			size="4"
		>
			<Box className="w-10/12 hover:w-full transition-all duration-300 ease-in-out h-full absolute bg-black dark:bg-primary rounded-r-sm" />
			<Box className="w-10/12 p-0 flex items-center justify-center h-full">
				<Text size="2" className="z-50 font-bold capitalize">
					{label}
				</Text>
			</Box>
			<Box className="w-2/12 h-full flex flex items-center justify-center">
				<ArrowRightIcon width="20" height="20" className="z-50" />
			</Box>
		</Button>
	);
};

export default AppButton;
