"use client";

import React from 'react';
import Link from 'next/link';

import { Box, Flex } from '@radix-ui/themes';
import { navigationItems } from '@/utils/constants';

import NavItem from '@/components/ui/NavItem';
import LocaleSwitcher from '@/components/common/LocaleSwitcher';
import Logo from '@/components/ui/Logo';
import ThemeSwitcher from '@/components/common/ThemeSwitcher';
import MobileNavBar from './MobileNavBar';

import useDictionary from '@/hooks/useDictionary';

const NavBar = () => {
	const dictionary = useDictionary();

	return (
		<Flex className="border-b-2 border-orange-600 bg-black dark:bg-white sticky top-0 z-50">
			<Flex align="center" justify="between" className="w-full h-16" px="6">
				<Logo />

				<Flex direction="row" justify="between" align="center" flexGrow="1" className='flex flex-1 max-lg:hidden'>
					<Flex flexGrow="1" gap="7" align="center" justify="center">
						{navigationItems.map((navigationItem) => (
							<NavItem
								key={navigationItem.label}
								route={navigationItem.route}
								options={navigationItem.options}
								label={navigationItem.label}
							/>
						))}
					</Flex>

					<Flex gap="3" align="center">
						<LocaleSwitcher />

						<ThemeSwitcher />

						<Link href="/register" className="bg-white dark:bg-black py-2 px-5 text-primary dark:text-white rounded-full text-sm">
							{dictionary.components.navbar.sign_up}
						</Link>
					</Flex>
				</Flex>

				<Box className='hidden relative max-lg:block'>
					<MobileNavBar />
				</Box>
			</Flex>
		</Flex>
	);
};

export default NavBar;
