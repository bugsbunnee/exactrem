'use client';

import React from 'react';
import Logo from '@/components/ui/Logo';
import classNames from 'classnames';

import Link from 'next/link';

import { Box, Button, Flex } from '@radix-ui/themes';
import { signOut } from 'next-auth/react';
import { ChevronRightIcon, EnvelopeClosedIcon, HomeIcon, PersonIcon } from '@radix-ui/react-icons';
import { usePathname } from 'next/navigation';
import { FaMoneyBill } from 'react-icons/fa';

const AdminNavBar = () => {
    const ROUTES = [
        {
            route: '/admin',
            label: 'Dashboard',
            Icon: HomeIcon,
        },
        {
            route: '/admin/users',
            label: 'Users',
            Icon: PersonIcon,
        },
        {
            route: '/admin/newsletters',
            label: 'Newsletters',
            Icon: EnvelopeClosedIcon,
        },
        {
            route: '/admin/currencies',
            label: 'Currencies',
            Icon: FaMoneyBill,
        }
    ];

    const pathName = usePathname();

    return ( 
        <aside className='bg-white dark:bg-[#222] p-5 h-screen border-r border-stone-200 flex flex-col'>
            <Flex justify='start' align='center'>
                <Logo />
            </Flex>

            <Box className='mt-20 w-full'>
               {ROUTES.map((route) => (
                 <Flex 
                    key={route.label}
                    align='center'
                    gap='3'
                    className={classNames({
                        'px-3 py-2 mb-5 rounded-sm text-sm w-full': true,
                        'bg-black text-white dark:border dark:border-white': pathName === route.route,
                        'bg-stone-50 dark:bg-[#222] dark:text-white border border-stone-200 text-black': pathName !== route.route
                    })}>
                    <route.Icon />

                    <Box className='flex-1'>
                        <Link href={route.route} className=''>
                            {route.label}
                        </Link>
                    </Box>

                    <ChevronRightIcon width='18' height='18' />
                </Flex>
               ))}
            </Box>

            <Button className='bg-black dark:border dark:border-white w-full mt-auto' onClick={() => signOut()}>
                Logout
            </Button>
        </aside>
     );
}
 
export default AdminNavBar;