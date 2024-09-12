import { Box, Flex } from "@radix-ui/themes";

import React from "react";
import AccountTypeFilter from "./AccountTypeFilter";
import LoadingUsersTable from "./LoadingUsersTable";
import Conditional from "@/components/common/Conditional";
import ExcelExport from "@/components/common/ExcelExport";
import Pagination from '@/components/common/Pagination';
import UserTable, { UserQuery }  from "./UserTable";

import useUsers from "@/hooks/useUsers";

interface Props {
    searchParams: UserQuery
}

const DashboardUsers: React.FC<Props> = ({ searchParams }) => {
    const userData = useUsers(searchParams);

    return ( 
        <>
            <Flex className="mt-10" justify="start" gap="4" align="center">
                <AccountTypeFilter />

                <ExcelExport  data={userData.users} fileName="all_registered_users" />
            </Flex>

            <Box className="p-5 bg-white dark:bg-[#222] rounded-sm mt-10 border border-stone-200">
                <Conditional isVisible={userData.isLoading}>
                    <LoadingUsersTable />
                </Conditional>

                <Conditional isVisible={!userData.isLoading}>
                    <UserTable 
                        searchParams={searchParams as any} 
                        users={userData.allUsers}
                    />
                </Conditional>
            </Box>

            <Conditional isVisible={!userData.isLoading}>
                <Flex justify="end" gap="3" className="mt-5">
                    <Pagination
                        pageSize={userData.pageSize}
                        currentPage={userData.page}
                        itemCount={userData.userCount}
                    />
                </Flex>
            </Conditional>
        </>
    );
};
 
export default DashboardUsers;