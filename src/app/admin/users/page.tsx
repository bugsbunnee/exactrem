"use client";

import { Box, Flex, Heading, Text } from '@radix-ui/themes';
import { UserQuery } from '../_components/UserTable';

import React from 'react';
import DashboardUsers from "@/app/admin/_components/DashboardUsers";

interface Props {
  searchParams: UserQuery
}

const UsersPage: React.FC<Props> =  ({ searchParams }) => {
  return (
    <Flex direction="column" gap="3">
      <Box className="mt-10 max-w-96">
          <Heading>Users</Heading>
          <Text as='p' className="text-gray-500 dark:text-white mt-4" size="2">
              This is the users page. View and manage your registered users
          </Text>
      </Box>

      <DashboardUsers searchParams={searchParams} />
    </Flex>
  );
};

export const dynamic = 'force-dynamic';

export default UsersPage;
