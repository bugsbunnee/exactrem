
"use client";

import _ from "lodash";

import { useEffect, useMemo, useState } from "react"
import { paginate } from "@/utils/lib";
import { SearchParams } from "@/utils/models";

import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/firebase/config";

export interface Subscription {
    id: string;
    email: string;
}

const useNewsletters = (searchParams: { page: SearchParams['page']; }) => {
    const [isLoading, setLoading] = useState(true);
    const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
    
    const page = parseInt(searchParams.page) || 1;
    const pageSize = 6;

    const results = useMemo(() => {
        let allSubscriptions = subscriptions;
        
        const sortedSubscriptions = _.orderBy(allSubscriptions, ['email'], ['desc']);
        const paginatedSubscriptions = paginate(sortedSubscriptions, page, pageSize);

        return { paginatedSubscriptions, subscriptions, subscriptionCount: subscriptions.length, isLoading, page, pageSize }
    }, [isLoading, page, subscriptions]);

    useEffect(() => {
        const newslettersRef = collection(db, 'newsletters');

        const unsubscribe = onSnapshot(newslettersRef, (snapshot) => {
            const newsletters = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setSubscriptions(newsletters as Subscription[]);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return results;
};

export default useNewsletters;