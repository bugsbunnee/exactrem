import { Box, Flex, Table } from '@radix-ui/themes';

import Skeleton from '@/components/common/Skeleton';
import AccountTypeFilter from '@/app/admin/_components/AccountTypeFilter';

const LoadingUsersTable = () => {
  const users = [1, 2, 3, 4, 5];

  return (
    <Box>
      <Flex className="mt-10" justify="between" align="center">
          <AccountTypeFilter />

          <Skeleton className='w-14 h-10' />
      </Flex>

      <Table.Root variant="surface" className="mt-5">
        <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Full Name</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="hidden md:table-cell">Email</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="hidden md:table-cell">Account Type</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="hidden md:table-cell">Business Name</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="hidden md:table-cell">Created</Table.ColumnHeaderCell>
            </Table.Row>
        </Table.Header>
        <Table.Body>
            {users.map((user) => (
                <Table.Row key={user}>
                    <Table.Cell>
                      <Skeleton />
                      <Box className="block md:hidden">
                        <Skeleton />
                      </Box>
                    </Table.Cell>
                    <Table.Cell className="hidden md:table-cell">
                      <Skeleton />
                    </Table.Cell>
                    <Table.Cell className="hidden md:table-cell">
                      <Skeleton />
                    </Table.Cell>
                    <Table.Cell className="hidden md:table-cell">
                      <Skeleton />
                    </Table.Cell>
                    <Table.Cell className="hidden md:table-cell">
                      <Skeleton />
                    </Table.Cell>
                </Table.Row>
            ))}
        </Table.Body>
      </Table.Root>
    </Box>
  );
};

export default LoadingUsersTable;
