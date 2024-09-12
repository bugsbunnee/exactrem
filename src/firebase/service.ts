'use server';

import dayjs from 'dayjs';
import _ from 'lodash';

import { addDoc, collection, deleteDoc, doc,  getDoc, getDocs, setDoc, updateDoc } from "firebase/firestore";
import { db } from "./config";

import { RegistrationFormData } from "@/app/[lang]/register/_components/RegistrationFormOne/schema";
import { UserFormData } from "@/app/[lang]/register/_components/RegistrationFormTwo/schema";
import { CurrencyOption, RegisteredUser } from '@/utils/models';

export const initializeUser = async (user: RegistrationFormData) => {
    const usersRef = collection(db, 'users');
    
    const newUser = await addDoc(usersRef, {
        country: user.country,
        accountType: user.accountType,
        phoneNumber: user.phoneNumber,
        createdAt: dayjs().format('DD-MM-YYYY HH:mm:ss')
    });

    return newUser.id;
};

export const addSubscription = async (email: string) => {
    const newslettersRef = collection(db, 'newsletters');
    const newUser = await addDoc(newslettersRef, { email });

    return newUser.id;
};

export const getUser = async (userId: string) => {
    const userRef = doc(db, 'users', userId);
    const snapshot = await getDoc(userRef);

    if (snapshot.exists()) return { id: snapshot.id, ...snapshot.data() };

    return null;
};

export const getMatchingUser = async (key: string, value: string) => {
    const usersRef = collection(db, 'users');
    const usersCollectionSnapshot = await getDocs(usersRef);

    const users = usersCollectionSnapshot.docs.map((snapShotDoc) => ({ id: snapShotDoc.id, ...snapShotDoc.data() })) as unknown as RegisteredUser[];
    const matchingUser = users.find((user) => _.get(user, key) === value);

    return matchingUser;
};

export const updateUser = async (userId: string, userData: UserFormData) => {
    const userRef = doc(db, 'users', userId);
    const updatedAt = dayjs().format('DD-MM-YYYY HH:mm:ss');

    const referralCode = (userData.firstName + '-' + userData.lastName + '-' + Date.now().toString()).toLowerCase();
    await updateDoc(userRef, { ...userData, referralCode, updatedAt, });

    return referralCode;
};

export const addCurrency = async (newCurrency: CurrencyOption) => {
    const currencyRef = doc(db, 'currencies', newCurrency.value);
    await setDoc(currencyRef, newCurrency);
};

export const deleteCurrency = async (currencyId: string) => {
    const currenciesRef = doc(db, 'currencies', currencyId);
    await deleteDoc(currenciesRef);
};

export const updateCurrencyRates = async (currencyId: string, rates: { [key: string]: number}) => {
    const currencyRef = doc(db, 'currencies', currencyId);
    await updateDoc(currencyRef, { rates });
};

export const addReferrer = async (userId: string, referredBy: string) => {
    const userRef = doc(db, 'users', userId);
    const updatedUser = await updateDoc(userRef, { referredBy });

    return updatedUser;
}


