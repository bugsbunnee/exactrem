import { defineCollection, defineConfig, s } from 'velite';

import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";

const computedFields = <T extends { slug: string }>(data: T) => ({
    ...data,
    slugAsParams: data.slug.split("/").slice(1).join("/"),
});

const posts = defineCollection({
    name: 'Post',
    pattern: 'blog/**/*.mdx',
    schema: s
        .object({
            slug: s.slug('blog'),
            src: s.image({ absoluteRoot: 'public' }),
            category: s.string(),
            title: s.string().max(99),
            description: s.string().max(1000),
            createdAt: s.isodate(),
            author: s.string(),
            isPublished: s.boolean().default(true),
            content: s.mdx(),
        }).transform(computedFields),
});

export default defineConfig({
    root: 'src/content',
    output: {
        data: '.velite',
        assets: 'public/static',
        base: '/static/',
        name: '[name]-[hash:6].[ext]',
        clean: true
    },
    collections: { posts },
    mdx: {
        rehypePlugins: [
            [rehypeSlug],
            [rehypePrettyCode, { theme: "github-dark" }],
        ],
        remarkPlugins: [],
    },
});