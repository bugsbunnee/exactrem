import React from 'react'
import NextLink from 'next/link';

import { ArrowDownIcon } from '@radix-ui/react-icons'
import { Table } from '@radix-ui/themes'
import { RegisteredUser, TableColumn } from '@/utils/models'
import { AccountType } from '@/utils/constants';

export interface UserQuery {
    query: string;
    accountType: AccountType;
    orderBy: keyof RegisteredUser;
    page: string;
}

interface Props { 
  searchParams: UserQuery,
  users: RegisteredUser[]
}

const UserTable = ({ searchParams, users }: Props) => {
  return (
    <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            {columns.map((column) => (
              <Table.ColumnHeaderCell key={column.value} className={column.className}>
                  <NextLink href={{ query: { ...searchParams, orderBy: column.value } }}>
                    {column.label}
                  </NextLink>
                  {column.value === searchParams.orderBy && (
                    <ArrowDownIcon className="inline text-primary" />
                  )}
              </Table.ColumnHeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {users.map((user) => (
              <Table.Row key={user.id}>
                  <Table.Cell>
                    {user.firstName} {user.lastName}
                  </Table.Cell>
                  <Table.Cell>
                    {user.email}
                  </Table.Cell>
                  <Table.Cell>
                    {user.accountType}
                  </Table.Cell>
                  <Table.Cell>
                    {user.businessName}
                  </Table.Cell>
                  <Table.Cell>
                    {user.country}
                  </Table.Cell>
                  <Table.Cell>
                    {user.phoneNumber}
                  </Table.Cell>
                  <Table.Cell className="hidden md:table-cell">
                      {user.createdAt}
                  </Table.Cell>
                </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
  )
}

const columns: TableColumn[] = [
    { label: 'Full Name', value: 'firstName' },
    { label: 'Email', value: 'email' },
    { label: 'Account Type', value: 'accountType' },
    {
      label: 'Business Name',
      value: 'businessName',
      className: 'hidden md:table-cell',
    },
    {
      label: 'Country',
      value: 'country',
      className: 'hidden md:table-cell',
    },
    {
      label: 'Phone Number',
      value: 'phoneNumber',
      className: 'hidden md:table-cell',
    },
    {
      label: 'Created',
      value: 'createdAt',
      className: 'hidden md:table-cell',
    },
];

export const columnNames = columns.map(column => column.value);

export default UserTable