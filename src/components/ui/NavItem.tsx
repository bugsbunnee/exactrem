"use client";

import React, { useState } from 'react';
import Link from 'next/link';

import { Button, DropdownMenu } from '@radix-ui/themes';

import { NavItem as NavItemModel } from '@/utils/models';

import Conditional from '@/components/common/Conditional';
import NavOption from '@/components/sections/NavBar/NavOption';

import useRouteMatch from '@/hooks/useRouteMatch';

const NavItem: React.FC<NavItemModel> = ({ label, options, route }) => {
	const [isOpen, setOpen] = useState(false);

	const { className, handleClick } = useRouteMatch(options, route);

	if (options.length === 0) {
		return (
			<Link href={route} className={className}>
				{label}
			</Link>
		);
	}

	return (
		<DropdownMenu.Root open={isOpen} onOpenChange={setOpen}>
			<DropdownMenu.Trigger onMouseOver={() => setOpen(true)}>
				<Button variant="ghost" className={className}>
					{label}
					<DropdownMenu.TriggerIcon className="ml-2" />
				</Button>
			</DropdownMenu.Trigger>
			<DropdownMenu.Content
				className="w-96"
				onMouseLeave={() => setOpen(false)}
			>
				{options.map((option) => (
					<React.Fragment key={option.title}>
						<DropdownMenu.Item onSelect={() => handleClick(option.route)} className="p-5 min-h-24 mb-3 hover:bg-transparent cursor-pointer">
							<NavOption navOption={option} />
						</DropdownMenu.Item>

						<Conditional isVisible={false}>
							<DropdownMenu.Separator />
						</Conditional>
					</React.Fragment>
				))}
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	);
};

export default NavItem;
