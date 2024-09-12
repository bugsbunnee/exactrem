"use client";

import { Box, Flex, Heading, Text } from '@radix-ui/themes';
import { SearchParams } from '@/utils/models';

import React from 'react';
import LoadingNewslettersTable from '../_components/LoadingNewslettersTable';
import NewslettersTable from '../_components/NewslettersTable';
import Pagination from '@/components/common/Pagination';

import useNewsletters from '@/hooks/useNewsletters';

interface Props {
  searchParams: { page: SearchParams['page']; }
}

const NewslettersPage: React.FC<Props> =  ({ searchParams }) => {
  const { isLoading, subscriptionCount, page, pageSize, paginatedSubscriptions } =  useNewsletters(searchParams);

  if (isLoading) return <LoadingNewslettersTable />;

  return (
    <Flex direction="column" gap="3">
      <Box className="mt-10 max-w-96">
          <Heading>Newsletters</Heading>
          <Text as='p' className="text-gray-500 dark:text-white mt-4" size="2">
              This is the newsletters page. View and manage your registered subscribers.
          </Text>
      </Box>

      <Box className="p-5 bg-white dark:bg-[#222] rounded-sm mt-10 border border-stone-200">
            <NewslettersTable 
                searchParams={searchParams as any} 
                subscriptions={paginatedSubscriptions}
            />
        </Box>

        <Flex justify="end" gap="3" className="mt-5">
            <Pagination
                pageSize={pageSize}
                currentPage={page}
                itemCount={subscriptionCount}
            />
        </Flex>
    </Flex>
  );
};

export const dynamic = 'force-dynamic';

export default NewslettersPage;
