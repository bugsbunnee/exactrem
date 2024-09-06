import React from 'react';

import { Button, Container, Flex, Text } from '@radix-ui/themes';
import { navigationItems } from '@/utils/constants';

import NavItem from '@/components/ui/NavItem';
import LocaleSwitcher from '@/components/common/LocaleSwitcher';
import Logo from '@/components/ui/Logo';
import ThemeSwitcher from '@/components/common/ThemeSwitcher';

const NavBar = () => {
	return (
		<Flex className="border-b border-orange-400">
			<Container>
				<Flex align="center" justify="between" className="h-20">
					<Logo />

					<Flex flexGrow="1" gap="7" align="center" justify="center">
						{navigationItems.map((navigationItem) => (
							<NavItem
								key={navigationItem.label}
								options={navigationItem.options}
								label={navigationItem.label}
							/>
						))}
					</Flex>

					<Flex gap="3" align="center">
						<LocaleSwitcher />

						<ThemeSwitcher />

						<Button
							className="bg-slate-800 dark:bg-[#222]"
							radius="full"
							size="2"
						>
							Get started
						</Button>
					</Flex>
				</Flex>
			</Container>
		</Flex>
	);
};

export default NavBar;
