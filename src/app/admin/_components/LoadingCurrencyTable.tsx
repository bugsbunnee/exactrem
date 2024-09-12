import { Box, Table } from '@radix-ui/themes';

import Skeleton from '@/components/common/Skeleton';

const LoadingNewslettersTable = () => {
  const subscriptions = [1, 2, 3, 4, 5];

  return (
    <Box>
      <Table.Root variant="surface" className="mt-5">
        <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell className="hidden md:table-cell">Image</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="hidden md:table-cell">Label</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="hidden md:table-cell">Code</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="hidden md:table-cell">Delete</Table.ColumnHeaderCell>
            </Table.Row>
        </Table.Header>
        <Table.Body>
            {subscriptions.map((subscription) => (
                <Table.Row key={subscription}>
                    <Table.Cell>
                      <Skeleton />
                      <Box className="block md:hidden">
                        <Skeleton />
                      </Box>
                    </Table.Cell>
                    <Table.Cell>
                      <Skeleton />
                    </Table.Cell>
                    <Table.Cell>
                      <Skeleton />
                    </Table.Cell>
                    <Table.Cell>
                      <Skeleton />
                    </Table.Cell>
                </Table.Row>
            ))}
        </Table.Body>
      </Table.Root>
    </Box>
  );
};

export default LoadingNewslettersTable;
