'use client';

import React from 'react';

import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { Flex, TextField } from '@radix-ui/themes';
import { useRouter, useSearchParams } from 'next/navigation';

interface Props {
    placeholder: string;
    redirectPath: string;
}

const BlogPostSearch: React.FC<Props> = ({ placeholder, redirectPath }) => {
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
        router.replace(redirectPath + path);
    };

    return (
        <Flex justify='center' align='center' className='w-full'>
            <TextField.Root 
                className='w-full max-w-96' 
                placeholder={placeholder}
                size='3' 
                variant='soft' 
                defaultValue={searchParams.get('query')?.toString()}
                onChange={event => handleSearch(event.target.value)}
            >
                <TextField.Slot>
                    <MagnifyingGlassIcon width='18' height='18' />
                </TextField.Slot>
            </TextField.Root>
        </Flex>
    )
};

export default BlogPostSearch;