"use client";

import React, { useCallback, useMemo, useState } from 'react';
import classNames from 'classnames';

import { ChevronRightIcon } from '@radix-ui/react-icons';
import { Box, Button, DropdownMenu, Flex, Text } from '@radix-ui/themes';
import { useParams, usePathname, useRouter } from 'next/navigation';

import { NavItem as NavItemModel } from '@/utils/models';
import { Locale } from '../../../i18n.config';

import Conditional from '@/components/common/Conditional';

const NavItem: React.FC<NavItemModel> = ({ label, options, route }) => {
	const [isOpen, setOpen] = useState(false);

	const pathname = usePathname();
	const router = useRouter();
	const params = useParams<{ lang: Locale; }>();

	const handleClick = useCallback(() => {
		router.push(`/${params.lang}/${route}`);
	}, [route, router, params.lang]);

	const className = useMemo(() => {
		const isRouteMatch = `/${params.lang}/${route}` === pathname;

		return classNames({
			"cursor-pointer active:bg-stone-50 active:outline-0 hover:bg-stone-50 dark:hover:text-black font-medium": true,
			"bg-stone-50 text-slate-800 dark:border dark:border-stone-100": isRouteMatch,
			"dark:text-white ": !isRouteMatch
		});
	}, [params, pathname, route]);

	if (options.length === 0) {
		return (
			<Button variant="ghost" onClick={handleClick} className={className}>
				{label}
			</Button>
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
				{options.map((option, index) => (
					<React.Fragment key={option.title}>
						<DropdownMenu.Item className="p-5 min-h-24 mb-3 hover:bg-transparent cursor-pointer">
							<Flex gap="4" align="start" justify="start">
								<Flex
									align="center"
									justify="center"
									className={classNames({
										'w-10 h-10 rounded-2xl': true,
										[option.color]: true,
									})}
								>
									<option.Icon size={25} />
								</Flex>

								<Box className="flex-1">
									<Box>
										<Text
											color="gray"
											className="mb-5 font-semibold text-slate-800 hover:text-green-700"
											size="2"
										>
											{option.title}
										</Text>
									</Box>

									<Text className="text-gray-600" size="1">
										{option.description}
									</Text>
								</Box>

								<ChevronRightIcon width="18" height="18" color="gray" />
							</Flex>
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
