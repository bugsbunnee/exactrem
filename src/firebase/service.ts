'use server';

import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "./config";
import { RegistrationFormData } from "@/app/[lang]/register/_components/RegistrationFormOne/schema";

interface UserInitialData {
    country: string;
    accountType: RegistrationFormData['accountType'];
}

interface UserUpdateData {

}

export const initializeUser = (user: UserInitialData) => {
    const usersRef = collection(db, 'users');
    
    return addDoc(usersRef, {
        country: user.country,
        accountType: user.accountType,
    });
};

export const getUser = async (userId: string) => {
    const userRef = doc(db, 'users', userId);
    const snapshot = await getDoc(userRef);

    if (snapshot.exists()) return { id: snapshot.id, ...snapshot.data() };

    return null;
};

export const updateUser = (userId: string, userData: UserUpdateData) => {
    const userRef = doc(db, 'users', userId);

    return updateDoc(userRef, {

    });
}