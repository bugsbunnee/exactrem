"use client";

import { Box, Dialog, Flex, Heading, IconButton, Text } from '@radix-ui/themes';
import { PlusIcon } from '@radix-ui/react-icons';
import { SearchParams } from '@/utils/models';
import { paginate } from '@/utils/lib';

import React, { useMemo, useState } from 'react';
import _ from 'lodash';

import BlogPostSearch from '@/app/[lang]/blog/_components/BlogPostSearch';
import CurrencyTable from '../_components/CurrencyTable';
import LoadingCurrencyTable from '../_components/LoadingCurrencyTable';
import NewCurrency from './_components/NewCurrency';
import Pagination from '@/components/common/Pagination';

import useCurrencies from '@/hooks/useCurrencies';

interface Props {
  searchParams: { 
    page: SearchParams['page']; 
    query: string;
  }
}

const CurrenciesPage: React.FC<Props> =  ({ searchParams }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  
  const currencies =  useCurrencies();

  const page = parseInt(searchParams.page) || 1;
  const pageSize = 6;

  const results = useMemo(() => {
    let allCurrencies = Object.values(currencies.currencies);
    if (searchParams.query) allCurrencies = allCurrencies.filter((currency) => currency.value.toLowerCase().indexOf(searchParams.query.toLowerCase()) !== -1)

    const sorted = _.orderBy(allCurrencies, ['label'], ['desc']);
    const paginated = paginate(sorted, page, pageSize);

    return { paginatedCurrencies: paginated, currencyCount: Object.values(currencies).length, page, pageSize }
}, [page, currencies, searchParams]);

if (currencies.isLoading) return <LoadingCurrencyTable />;

  return (
    <Flex direction="column" gap="3">
      <Box className="mt-10 max-w-96">
          <Heading>Currencies</Heading>
          <Text as='p' className="text-gray-500 dark:text-white mt-4" size="2">
              This is the currencies page. Update daily rates, add new currencies and much more. Note that changes are reflected immediately!
          </Text>
      </Box>

      <Flex className='mt-5' justify='start' gap="3" align='center'>
        <Box>
          <Dialog.Root open={isModalOpen} onOpenChange={setModalOpen}>
            <Dialog.Trigger>
              <IconButton size="3" color="green" className="cursor-pointer" variant="soft">
                <PlusIcon width="25" height="25" />
              </IconButton>
            </Dialog.Trigger>

            <Dialog.Content className='max-w-96 rounded-md'>
              <Dialog.Title>New Currency</Dialog.Title>
              
              <Dialog.Description size="2" my="4">
                Add a new currency
              </Dialog.Description>

              <NewCurrency onAddCurrency={() => setModalOpen(false)} />
            </Dialog.Content>
          </Dialog.Root>
        </Box>
        <Box>
          <BlogPostSearch redirectPath='/admin/currencies' placeholder='Enter currency code' />
        </Box>
      </Flex>

      <Box className="p-5 bg-white dark:bg-[#222] rounded-sm mt-10 border border-stone-200">
            <CurrencyTable
                searchParams={searchParams as any} 
                currencies={results.paginatedCurrencies}
            />
        </Box>

        <Flex justify="end" gap="3" className="mt-5">
            <Pagination
                pageSize={results.pageSize}
                currentPage={results.page}
                itemCount={results.currencyCount}
            />
        </Flex>
    </Flex>
  );
};

export const dynamic = 'force-dynamic';

export default CurrenciesPage;
