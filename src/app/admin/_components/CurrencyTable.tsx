"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import NextLink from 'next/link';

import { ArrowDownIcon, Pencil1Icon, TrashIcon } from '@radix-ui/react-icons'
import { Dialog, IconButton, Table } from '@radix-ui/themes'
import { CurrencyOption, TableColumn } from '@/utils/models'
import { deleteCurrency } from '@/firebase/service';

import UpdateCurrencyRate from '../currencies/_components/UpdateCurrencyRate';

export interface UserQuery {
    query: string;
    orderBy: keyof CurrencyOption;
    page: string;
}

interface Props { 
  searchParams: UserQuery,
  currencies: CurrencyOption[]
}

const CurrencyTable = ({ searchParams, currencies }: Props) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currencyToUpdate, setCurrencyToUpdate] = useState<CurrencyOption>();

  const columns: TableColumn[] = [
    { label: 'Image', value: 'src' },
    { label: 'Label', value: 'label' },
    { label: 'Code', value: 'value' },
    ...currencies.slice(1).map((currency) => ({ label: '', value: currency.value })),
    { label: 'Edit', value: 'edit' },
    { label: 'Delete', value: 'delete' },
  ];

  return (
    <>
      {currencyToUpdate && (
        <Dialog.Root open={isModalOpen} onOpenChange={setModalOpen}>
          <Dialog.Content className='max-w-96 rounded-md'>
            <Dialog.Title>Update Currency</Dialog.Title>
            
            <Dialog.Description size="2" my="4">
              Update rates for {currencyToUpdate.value}
            </Dialog.Description>

            <UpdateCurrencyRate currencyToUpdate={currencyToUpdate} onUpdateCurrency={() => setModalOpen(false)} />
          </Dialog.Content>
        </Dialog.Root>
      )}

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
          {currencies.map((currency) => (
              <Table.Row key={currency.value}>
                  <Table.Cell>
                      <Image width={40} height={40} src={currency.src} alt={currency.label} />
                  </Table.Cell>
                  <Table.Cell>
                    {currency.label}
                  </Table.Cell>
                  <Table.Cell>
                    {currency.value}
                  </Table.Cell>
                  {Object.keys(currency.rates).map((key) => (
                    <Table.Cell key={key}>
                       ({ key }) {currency.rates[key]}
                    </Table.Cell>
                  ))}
                  <Table.Cell>
                    <IconButton 
                      color="green" 
                      className="cursor-pointer" 
                      variant="soft" 
                      onClick={() => {
                        setCurrencyToUpdate(currency);
                        setModalOpen(true);
                      }}
                    >
                      <Pencil1Icon width="25" height="25" />
                    </IconButton>
                  </Table.Cell>
                  <Table.Cell>
                    <IconButton color='red' variant='soft' onClick={() => deleteCurrency(currency.value)}>
                      <TrashIcon />
                    </IconButton>
                  </Table.Cell>
                </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </>
  )
}

export default CurrencyTable