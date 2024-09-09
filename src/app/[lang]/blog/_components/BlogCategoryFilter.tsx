'use client';

import React, { useCallback, useMemo } from 'react';
import classNames from 'classnames';

import { Button, Flex } from '@radix-ui/themes';
import { useRouter, useSearchParams } from 'next/navigation';
import { ALL_KEYWORD } from '@/utils/constants';


interface Props {
    categories: string[];
    redirectPath: string;
}

const BlogCategoryFilter: React.FC<Props>= ({ categories, redirectPath }) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleCategorySelect = (category: string) => {
        const params = new URLSearchParams();
        
        if (category && category !== ALL_KEYWORD) params.append('category', category);
        if (searchParams.get('orderBy')) params.append('orderBy', searchParams.get('orderBy')!);

        const query = params.size ? '?' + params.toString() : '';
        router.push(redirectPath + query);
    };

    const getIsCategoryActive = useCallback((category: string) => {
        const currentCategory = searchParams.get('category');
        if (currentCategory) {
            return category !== ALL_KEYWORD && category=== currentCategory
        }

        return category === ALL_KEYWORD;
    }, [searchParams]);

    const mappedCategories = useMemo(() => {
        return [ALL_KEYWORD, ...categories]
    }, [categories]);

    return ( 
        <Flex align='center' gap='6' justify='center' className='border-y border-dashed border-stone-600 p-7'>
            {mappedCategories.map((category) => (
                <Button 
                    key={category}
                    variant='ghost'
                    onClick={() => handleCategorySelect(category)}
                    className={classNames({
                        'uppercase font-semibold tracking-wide text-sm hover:text-sky-500': true,
                        'text-sky-500': getIsCategoryActive(category),
                    })}
                >
                    {category}
                </Button>
            ))}
        </Flex>
     );
};
 
export default BlogCategoryFilter;