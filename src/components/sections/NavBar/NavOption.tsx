import React from 'react';
import Link from 'next/link';

import classNames from 'classnames';

import { ChevronRightIcon } from '@radix-ui/react-icons';
import { Box, Flex, Text } from '@radix-ui/themes';

import { NavItem } from '@/utils/models';

interface Props {
    navOption: NavItem['options'][0]
}

const NavOption: React.FC<Props> = ({ navOption }) => {
    return (
        <Flex gap="4" align="start" justify="start">
            <Flex
                align="center"
                justify="center"
                className={classNames({ 'w-10 h-10 rounded-2xl': true, [navOption.color]: true })}
            >
                <navOption.Icon size={25} />
            </Flex>

            <Box className="flex-1">
                <Box className="mb-1">
                    <Link href={navOption.route} className="font-semibold text-black dark:text-white hover:text-green-700 hover:underline">
                        {navOption.title}
                    </Link>
                </Box>

                <Text className="text-gray-600 dark:text-gray-100" size="1">
                    {navOption.description}
                </Text>
            </Box>

            <ChevronRightIcon width="18" height="18" color="gray" />
        </Flex>
    )
};

export default NavOption;