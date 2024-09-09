
"use client";

import _ from "lodash";

import { useEffect, useMemo, useState } from "react"
import { news } from '#site/content';

import { paginate } from "@/utils/lib";
import { SearchParams } from "@/utils/models";
import { useParams } from "next/navigation";
import { Locale } from "../../i18n.config";

const useNews = (searchParams: SearchParams) => {
    const [isLoading, setLoading] = useState(true);
    
    const page = parseInt(searchParams.page) || 1;
    const pageSize = 6;

    const params = useParams<{ lang: Locale; }>();

    const results = useMemo(() => {
        let allNews = news.filter((newsItem) => newsItem.isPublished && newsItem.locale === params.lang);
        if (searchParams.query) allNews = allNews.filter((newsItem) => newsItem.title.toLowerCase().indexOf(searchParams.query.toLowerCase()) !== -1);

        const category = searchParams.category ?? undefined;
        if (category) allNews = allNews.filter((newsItem) => newsItem.category === category);

        const orderBy = searchParams.orderBy ?? 'createdAt';
        if (orderBy) allNews = _.orderBy(allNews, [orderBy], ['desc']);

        allNews = paginate(allNews, page, pageSize);

        const categories = _.uniq(news.map((newsItem) => newsItem.category));
        const trendingNews = news.filter((newsItem) => newsItem.isTrending);

        return { allNews, newsCount: news.length, categories, isLoading, page, pageSize, trendingNews };
    }, [searchParams, isLoading, page, params.lang]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 1500);
        
        return () => clearTimeout(timeout);
    }, []);

    return results;
};

export default useNews;