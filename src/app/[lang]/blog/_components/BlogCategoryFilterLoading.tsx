import React from 'react';
import _ from 'lodash';

import { Flex, Skeleton } from '@radix-ui/themes';

const BlogCategoryFilterLoading = () => {
    const fillers = _.range(1, 4);

    return ( 
       <>
            <Flex align='center' gap='6' justify='center' className='border-y border-dashed border-stone-600 p-7'>
                {fillers.map((filler) => (
                    <Skeleton className='w-20 h-8' key={filler} />
                ))}
            </Flex>
       </>
     );
};
 
export default BlogCategoryFilterLoading;