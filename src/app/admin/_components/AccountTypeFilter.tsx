'use client';

import React from 'react';

import { AccountType, ALL_KEYWORD } from '@/utils/constants';
import { Select } from '@radix-ui/themes';
import { useRouter, useSearchParams } from 'next/navigation';

const accountTypes: { label: string; value: AccountType | string; }[] = [
    { label: 'All', value: ALL_KEYWORD },
    { label: 'Corporate Accounts', value: AccountType.CORPORATE },
    { label: 'Individual Accounts', value: AccountType.INDIVIDUAL },
];

const AccountTypeFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <Select.Root
      defaultValue={searchParams.get('accountType') || ALL_KEYWORD}
      onValueChange={(accountType) => {
          const params = new URLSearchParams();
          if (accountType) params.append('accountType', accountType);
          if (searchParams.get('orderBy'))
            params.append('orderBy', searchParams.get('orderBy')!);

          const query = params.size ? '?' + params.toString() : '';
          router.push('/admin/users' + query);
      }}
    >
      <Select.Trigger placeholder="Filter by account type..." />
      <Select.Content>
        {accountTypes.map((type) => (
          <Select.Item key={type.value} value={type.value}>
            {type.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default AccountTypeFilter;
