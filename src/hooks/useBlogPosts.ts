
"use client";

import _ from "lodash";

import { useEffect, useMemo, useState } from "react"
import { posts, Post } from "#site/content";
import { paginate } from "@/utils/lib";
import { SearchParams } from "@/utils/models";
import { useParams } from "next/navigation";
import { Locale } from "../../i18n.config";

interface BlogState {
    hero: Post | null;
    list: Post[];
}

const useBlogPosts = (searchParams: SearchParams) => {
    const [isLoading, setLoading] = useState(true);
    const [blogState, setBlogState] = useState<BlogState>({
        list: [],
        hero: null,
    });
    
    const page = parseInt(searchParams.page) || 1;
    const pageSize = 6;

    const params = useParams<{ lang: Locale; }>();

    const results = useMemo(() => {
        let allBlogPosts = blogState.list;
        if (searchParams.query) allBlogPosts = allBlogPosts.filter((post) => post.title.toLowerCase().indexOf(searchParams.query.toLowerCase()) !== -1)

        const category = searchParams.category ?? undefined;
        if (category) allBlogPosts = allBlogPosts.filter((post) => post.category === category);

        const orderBy = searchParams.orderBy ?? 'createdAt';
        if (orderBy) allBlogPosts = _.orderBy(allBlogPosts, [orderBy], ['desc']);

        allBlogPosts = paginate(allBlogPosts, page, pageSize);
        const categories = _.uniq(blogState.list.map((post) => post.category))

        return { allBlogPosts, blogPostCount: blogState.list.length, categories, hero: blogState.hero, isLoading, page, pageSize }
    }, [searchParams, isLoading, page, blogState]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            const publishedPosts = posts.filter((post) => post.isPublished && params.lang === post.locale);

            setBlogState({ hero: publishedPosts.length > 0 ? publishedPosts[0] : null, list: publishedPosts })
            setLoading(false);
        }, 1500);
        
        return () => clearTimeout(timeout);
    }, [params.lang]);

    return results;
};

export default useBlogPosts;