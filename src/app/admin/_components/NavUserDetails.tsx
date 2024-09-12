"use client";

import React from 'react';
import ThemeSwitcher from '@/components/common/ThemeSwitcher';

import { Avatar, Box, Flex, Separator, Text } from '@radix-ui/themes';
import { DefaultSession } from 'next-auth';
import { getInitials } from '@/utils/lib';

interface Props {
    sessionUser: DefaultSession['user']
}

const NavUserDetails: React.FC<Props> = ({sessionUser }) => {
    if (!sessionUser) return null;

    return (
        <Flex align='center' gap='3'>
            <Box>
                <Text size='2' className="font-semibold">
                    {sessionUser!.name}
                </Text>
            </Box>
            
            <Separator orientation='vertical' />
            
            <Avatar
                src={sessionUser!.image as string} 
                fallback={sessionUser.name ? getInitials(sessionUser!.name) : 'U'} 
                size="2" 
                radius="full" 
            />

            <Separator orientation='vertical' />

            <ThemeSwitcher />
        </Flex>
    )
};

export default NavUserDetails;