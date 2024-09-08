import * as runtime from "react/jsx-runtime";

import { Heading, Text } from '@radix-ui/themes';
import { MDXComponents } from 'mdx/types';

import Link from 'next/link';
import Image, { ImageProps } from 'next/image';

interface Props {
    source: string;
}

const components: MDXComponents = {
    h1: ({ children }) => (
        <Heading size='7' className='leading-10 mt-5'>{children}</Heading>
        ),
    h2: ({ children }) => (
        <Heading size='5' className='leading-10 mt-3'>{children}</Heading>
    ),
    img: (props) => (
        <Image
            width={1000}
            height={1000}
            className='w-full h-auto'
            {...(props as ImageProps)}
        />
    ), 
    p: ({ children }) => (
        <Text as='p' size='2' className='leading-5 my-4'>{children}</Text>
    ),
    a: ({ children, href, }) => (
        <Link href={href as string} className='underline'>{children}</Link>
    ),
};

const useMDXComponent = (source: string) => {
    const fn = new Function(source);
    return fn({ ...runtime }).default;
};

const MDXContent = (props: Props) => {
    const Component = useMDXComponent(props.source);
    return <Component components={components} />;
};

export default MDXContent;