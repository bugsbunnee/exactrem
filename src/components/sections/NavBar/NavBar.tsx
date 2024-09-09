"use client";

import React from 'react';
import Link from 'next/link';

import { Container, Flex } from '@radix-ui/themes';
import { navigationItems } from '@/utils/constants';

import NavItem from '@/components/ui/NavItem';
import LocaleSwitcher from '@/components/common/LocaleSwitcher';
import Logo from '@/components/ui/Logo';
import ThemeSwitcher from '@/components/common/ThemeSwitcher';

import useDictionary from '@/hooks/useDictionary';

const NavBar = () => {
	const dictionary = useDictionary();

	return (
		<Flex className="border-b-2 bg-white dark:bg-[#222] sticky top-0 z-50">
			<Container>
				<Flex align="center" justify="between" className="h-16">
					<Logo />

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

						<Link
							href="/register"
							className="bg-black dark:bg-primary py-2 px-5 text-white rounded-full text-sm"
						>
							{dictionary.components.navbar.sign_up}
						</Link>
					</Flex>
				</Flex>
			</Container>
		</Flex>
	);
};

export default NavBar;
