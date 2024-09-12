"use client";

import React from "react";

import { Box, Heading, Text } from "@radix-ui/themes";
import { useSession } from "next-auth/react";
import { UserQuery } from "./_components/UserTable";

import DashboardUsers from "./_components/DashboardUsers";
import GeneralInfo from "./_components/GeneralInfo";

interface Props {
    searchParams: UserQuery
  }

const AdminHomePage: React.FC<Props> = ({ searchParams }) => {
    const { data: session } = useSession();
    
    return ( 
        <Box>
            <Box className="my-10 max-w-96">
                <Heading>Dashboard</Heading>
                <Text as='p' className="text-gray-500 dark:text-white mt-4" size="2">
                    Hi, <span>{session ? session.user!.name : ''}.</span> Welcome to the admin dashboard. Here you 
                    can view all registered users, newsletter subscriptions and user info
                </Text>
            </Box>

            <GeneralInfo searchParams={searchParams} />

            <DashboardUsers searchParams={searchParams} />
        </Box>
    );
}
 
export default AdminHomePage;