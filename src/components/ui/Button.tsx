'use client';

import React from 'react';

import { ArrowRightIcon } from '@radix-ui/react-icons';
import { Box, Button, Text } from '@radix-ui/themes';

import { useRouter } from 'next/navigation';
import classNames from 'classnames';

interface Props {
	label: string;
	route: string;
	mode?: 'dark' | 'light';
}

const AppButton: React.FC<Props> = ({ label, route, mode = 'light' }) => {
	const router = useRouter();

	return (
		<Button
			className={classNames({
				"cursor-pointer h-14 w-72 p-0 relative flex justify-start items-center overflow-hidden": true,
				"bg-primary dark:bg-white": mode === 'light',
				"bg-white": mode === 'dark',
			})}
			onClick={() => router.push(route)}
			size="4"
		>
			<Box className={classNames({
				"w-10/12 hover:w-full transition-all duration-300 ease-in-out h-full absolute rounded-r-sm": true,
				"bg-black dark:bg-primary": mode === 'light',
				"bg-primary": mode === 'dark'
			})} />
			<Box className="w-10/12 p-0 flex items-center justify-center h-full">
				<Text size="2" className="z-30 font-bold capitalize">
					{label}
				</Text>
			</Box>
			<Box className="w-2/12 h-full flex flex items-center justify-center">
				<ArrowRightIcon width="20" height="20" className={classNames({
					"z-30 text-black": true,
					"text-white dark:text-black": mode === 'light',
				})} />
			</Box>
		</Button>
	);
};

export default AppButton;
