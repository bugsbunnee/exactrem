import React from 'react'
import NextLink from 'next/link';

import { ArrowDownIcon } from '@radix-ui/react-icons'
import { Table } from '@radix-ui/themes'
import { TableColumn } from '@/utils/models'
import { Subscription } from '@/hooks/useNewsletters';

export interface NewsletterQuery {
    page: string;
}

interface Props { 
  searchParams: NewsletterQuery,
  subscriptions: Subscription[];
}


const NewslettersTable = ({ searchParams, subscriptions }: Props) => {
  return (
    <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            {columns.map((column) => (
              <Table.ColumnHeaderCell key={column.value} className={column.className}>
                  <NextLink href={{ query: { ...searchParams, orderBy: column.value } }}>
                    {column.label}
                  </NextLink>
                  {column.value === 'email' && (
                    <ArrowDownIcon className="inline text-primary" />
                  )}
              </Table.ColumnHeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {subscriptions.map((subscription) => (
              <Table.Row key={subscription.id}>
                  <Table.Cell>
                    {subscription.email}
                  </Table.Cell>
                </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
  )
}

const columns: TableColumn[] = [
    { label: 'Email', value: 'email' },
];

export const columnNames = columns.map(column => column.value);

export default NewslettersTable