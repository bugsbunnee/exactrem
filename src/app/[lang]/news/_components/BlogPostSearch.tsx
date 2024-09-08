'use client';

import React from 'react';

import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { Flex, TextField } from '@radix-ui/themes';
import { useRouter, useSearchParams } from 'next/navigation';

const BlogPostSearch: React.FC = () => {
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
        router.replace('/blog' + path);
    };

    return (
        <Flex justify='center' align='center' className='w-full mt-10'>
            <TextField.Root 
                className='w-full max-w-96' 
                placeholder='Search blogs' 
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