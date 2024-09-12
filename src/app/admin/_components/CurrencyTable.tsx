"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import NextLink from 'next/link';

import { ArrowDownIcon, Pencil1Icon, TrashIcon } from '@radix-ui/react-icons'
import { AlertDialog, Button, Dialog, Flex, IconButton, Table } from '@radix-ui/themes'
import { CurrencyOption, TableColumn } from '@/utils/models'
import { deleteCurrency, removeDeletedCurrencyFromRates } from '@/firebase/service';

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
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isDeleting, setDeleting] = useState(false);
  const [currencyToUpdate, setCurrencyToUpdate] = useState<CurrencyOption>();
  const [currencyToDelete, setCurrencyToDelete] = useState<CurrencyOption>();

  const columns: TableColumn[] = [
    { label: 'Image', value: 'src' },
    { label: 'Label', value: 'label' },
    { label: 'Code', value: 'value' },
    ...currencies.slice(1).map((currency) => ({ label: '', value: currency.value })),
    { label: 'Edit', value: 'edit' },
    { label: 'Delete', value: 'delete' },
  ];

  const handleDelete = React.useCallback(async () => {
      if (!currencyToDelete) return;

      setDeleting(true);
      await removeDeletedCurrencyFromRates(currencyToDelete.value);
      setDeleting(false);
  }, [currencyToDelete]);

  return (
    <>
      {currencyToUpdate && (
        <Dialog.Root open={isUpdateModalOpen} onOpenChange={setUpdateModalOpen}>
          <Dialog.Content className='max-w-96 rounded-md'>
            <Dialog.Title>Update Currency</Dialog.Title>
            
            <Dialog.Description size="2" my="4">
              Update rates for {currencyToUpdate.value}
            </Dialog.Description>

            <UpdateCurrencyRate currencyToUpdate={currencyToUpdate} onUpdateCurrency={() => setUpdateModalOpen(false)} />
          </Dialog.Content>
        </Dialog.Root>
      )}
     
      {currencyToDelete && (
        <AlertDialog.Root open={isDeleteModalOpen} onOpenChange={setDeleteModalOpen}>
            <AlertDialog.Content className="max-w-96">
              <AlertDialog.Title>Delete <span className="text-primary">({currencyToDelete.value})</span></AlertDialog.Title>
              <AlertDialog.Description size="2">
                Are you sure? This will delete all <span className="text-primary">({currencyToDelete.value})</span> occurrences throughout your website
              </AlertDialog.Description>
          
              <Flex gap="3" mt="4" justify="end">
                <AlertDialog.Cancel>
                  <Button variant="soft" color="green">
                    Cancel
                  </Button>
                </AlertDialog.Cancel>
                <AlertDialog.Action>
                  <Button variant="solid" color="red" onClick={handleDelete}>
                    Delete
                  </Button>
                </AlertDialog.Action>
              </Flex>
            </AlertDialog.Content>
        </AlertDialog.Root>
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
                        setUpdateModalOpen(true);
                      }}
                    >
                      <Pencil1Icon width="25" height="25" />
                    </IconButton>
                  </Table.Cell>
                  <Table.Cell>
                    <IconButton color='red' variant='soft' loading={isDeleting} onClick={() => {
                        setCurrencyToDelete(currency);
                        setDeleteModalOpen(true);
                    }}>
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