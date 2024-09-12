'use client';

import React from 'react';

import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { TextField } from '@radix-ui/themes';
import { useRouter, useSearchParams } from 'next/navigation';

interface Props {
   
}

const AdminSearch: React.FC<Props> = () => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const handleSearch = (query: string) => {
        const params = new URLSearchParams(searchParams);

        if (query) {
          params.set('query', query);
        } else {
          params.delete('query');
        }

        const path = params.size ? '?' + params.toString() : '';
        router.replace('/admin/users' + path);
    };

    return (
        <TextField.Root 
            className='w-full max-w-96 bg-white dark:bg-[#222] text-sm border-stone-200 border' 
            placeholder="Search users"
            size='3' 
            radius='small'
            variant='soft' 
            defaultValue={searchParams.get('query')?.toString()}
            onChange={event => handleSearch(event.target.value)}
        >
            <TextField.Slot>
                <MagnifyingGlassIcon width='18' height='18' className='text-primary dark:text-white' />
            </TextField.Slot>
        </TextField.Root>
    )
};

export default AdminSearch;