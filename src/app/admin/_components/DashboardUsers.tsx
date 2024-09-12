import { Box, Flex } from "@radix-ui/themes";

import React from "react";
import AccountTypeFilter from "./AccountTypeFilter";
import LoadingUsersTable from "./LoadingUsersTable";
import Pagination from '@/components/common/Pagination';
import UserTable, { UserQuery }  from "./UserTable";

import useUsers from "@/hooks/useUsers";

interface Props {
    searchParams: UserQuery
}

const DashboardUsers: React.FC<Props> = ({ searchParams }) => {
    const userData = useUsers(searchParams);

  if (userData.isLoading) return <LoadingUsersTable />;

    return ( 
        <>
            <Box className="mt-10">
                <AccountTypeFilter />
            </Box>

            <Box className="p-5 bg-white rounded-sm mt-10 border border-stone-200">
                <UserTable 
                    searchParams={searchParams as any} 
                    users={userData.allUsers}
                />
            </Box>

            <Flex justify="end" gap="3" className="mt-5">
                <Pagination
                    pageSize={userData.pageSize}
                    currentPage={userData.page}
                    itemCount={userData.userCount}
                />
            </Flex>
        </>
    );
};
 
export default DashboardUsers;