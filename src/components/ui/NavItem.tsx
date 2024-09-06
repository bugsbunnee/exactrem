import React, { useState } from 'react';
import classNames from 'classnames';

import { ChevronRightIcon } from '@radix-ui/react-icons';
import { Box, Button, DropdownMenu, Flex, Text } from '@radix-ui/themes';
import { NavItem as NavItemModel } from '@/utils/models';

import Conditional from '@/components/common/Conditional';

const NavItem: React.FC<NavItemModel> = ({ label, options }) => {
	const [isOpen, setOpen] = useState(false);

	if (options.length === 0) {
		return (
			<Button
				variant="ghost"
				className="text-slate-800 dark:text-white active:bg-orange-100 active:outline-0 hover:bg-orange-100 font-medium "
			>
				{label}
			</Button>
		);
	}

	return (
		<DropdownMenu.Root open={isOpen} onOpenChange={setOpen}>
			<DropdownMenu.Trigger onMouseOver={() => setOpen(true)}>
				<Button
					variant="ghost"
					className="text-slate-800 dark:text-white active:outline-0 hover:bg-orange-100 font-medium"
				>
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
