"use client";

import _ from "lodash";

import { useEffect, useState } from "react";
import { db } from "@/firebase/config";
import { collection, onSnapshot } from "firebase/firestore";
import { Currency, CurrencyOption } from '@/utils/models';

type CurrencyData = Record<Currency, CurrencyOption>;

const initialCurrencies: Record<Currency, CurrencyOption> = {
	[Currency.CAD]: {
		src: 'https://flagsapi.com/CA/shiny/64.png',
		label: 'Canadian Dollar',
		value: Currency.CAD,
		rates: {
			[Currency.USD]: 0,
			[Currency.NGN]: 0,
			[Currency.EUR]: 0,
		},
	},
	[Currency.NGN]: {
		src: 'https://flagsapi.com/NG/shiny/64.png',
		label: 'Nigerian Naira',
		value: Currency.NGN,
		rates: {
			[Currency.USD]: 0,
			[Currency.CAD]: 0,
			[Currency.EUR]: 0,
		},
	},
	[Currency.USD]: {
		src: 'https://flagsapi.com/US/shiny/64.png',
		label: 'US Dollar',
		value: Currency.USD,
		rates: {
			[Currency.NGN]: 0,
			[Currency.CAD]: 0,
			[Currency.EUR]: 0
		},
	},
	[Currency.EUR]: {
		src: 'https://flagsapi.com/DE/shiny/64.png',
		label: 'Euro',
		value: Currency.EUR,
		rates: {
			[Currency.USD]: 0,
			[Currency.CAD]: 0,
			[Currency.NGN]: 0
		},
	},
};

const useCurrencies = () => {
    const [currencies, setCurrencies] = useState<CurrencyData>(initialCurrencies);

    useEffect(() => {
        const currenciesRef = collection(db, 'currencies');

        const unsubscribe = onSnapshot(currenciesRef, (snapshot) => {
            const currencyData = {} as CurrencyData;
            
            snapshot.docs.map((doc) => currencyData[doc.id as Currency] = doc.data() as CurrencyOption);

            setCurrencies(currencyData);
        });

        return () => unsubscribe();
    }, []);

    return currencies;
};

export default useCurrencies;