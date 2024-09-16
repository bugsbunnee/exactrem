'use client';

import React from 'react';
import * as Collapsible from '@radix-ui/react-collapsible';

import { Cross1Icon } from '@radix-ui/react-icons'
import { Flex, IconButton, Separator } from '@radix-ui/themes';
import { CgMenuRight } from "react-icons/cg";

import { navigationItems } from '@/utils/constants';

import AppButton from '@/components/ui/Button';
import MobileNavOption from './MobileNavOption';

import useDictionary from '@/hooks/useDictionary';

const MobileNavBar = () => {
    const [open, setOpen] = React.useState(false);

    const dictionary = useDictionary();

    return (
        <Collapsible.Root className="relative" open={open} onOpenChange={setOpen}>
            <Collapsible.Trigger asChild>
                <IconButton variant="ghost" size="3">
                    {open ? <Cross1Icon width="20" height="20" className="text-white dark:text-black animate__animated animate__fadeInLeft" /> : <CgMenuRight size={30} className="text-white dark:text-black animate__animated animate__fadeInRight" />}
                </IconButton>
            </Collapsible.Trigger>
            <Collapsible.Content className='bg-white dark:bg-[#222] p-5 top-16 left-0 right-0 fixed z-10 min-h-screen w-screen h-dvh overflow-y-scroll animate__animated animate__fadeIn'>
                {navigationItems.map((item, index) => (
                    <MobileNavOption 
                        showSeparator={(index + 1) !== navigationItems.length} 
                        navItem={item}
                        key={item.label}
                    />
                ))}

                <Separator size="4" className="my-4" />

                <Flex justify='center' align='center'>
                    <AppButton route='/register' label={dictionary.components.navbar.sign_up} />
                </Flex>
            </Collapsible.Content>
        </Collapsible.Root>
      );
}
 
export default MobileNavBar;