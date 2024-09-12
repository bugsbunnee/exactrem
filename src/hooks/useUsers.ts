
"use client";

import _ from "lodash";

import { useEffect, useMemo, useState } from "react"
import { paginate } from "@/utils/lib";
import { RegisteredUser } from "@/utils/models";
import { UserQuery } from "@/app/admin/_components/UserTable";

import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/firebase/config";
import { ALL_KEYWORD } from "@/utils/constants";

const useUsers = (searchParams: UserQuery) => {
    const [isLoading, setLoading] = useState(true);
    const [users, setUsers] = useState<RegisteredUser[]>([]);
    
    const page = parseInt(searchParams.page) || 1;
    const pageSize = 10;

    const results = useMemo(() => {
        let allUsers = users;
        if (searchParams.query && searchParams.query !== ALL_KEYWORD) allUsers = allUsers.filter((user) => user?.firstName?.toLowerCase().indexOf(searchParams.query.toLowerCase()) !== -1)

        const accountType = searchParams.accountType ?? undefined;
        if (accountType && searchParams.accountType !== (ALL_KEYWORD as any)) allUsers = allUsers.filter((user) => user.accountType === accountType);

        const orderBy = searchParams.orderBy ?? 'createdAt';
        if (orderBy) allUsers = _.orderBy(allUsers, [orderBy], ['desc']);

        allUsers = paginate(allUsers, page, pageSize);

        return { allUsers, userCount: users.length, isLoading, page, pageSize }
    }, [searchParams, isLoading, page, users]);

    useEffect(() => {
        const usersRef = collection(db, 'users');

        const unsubscribe = onSnapshot(usersRef, (snapshot) => {
            const users = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setUsers(users as RegisteredUser[]);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return results;
};

export default useUsers;