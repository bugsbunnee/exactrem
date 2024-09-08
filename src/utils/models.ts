import { CountryCode } from 'libphonenumber-js';
import { IconType } from 'react-icons';
import { ACCOUNT_TYPES } from './constants';

export type Currency = 'NGN' | 'USD' | 'CAD';

export interface CountryOption {
	label: string;
	src: string;
	value: string;
	phoneCode: string;
	cca2: CountryCode;
};

export interface CurrencyOption {
	src: string;
	label: string;
	value: Currency;
	rates: Record<string, number>;
}

export interface NavItem {
	route: string;
	label: string;
	options: {
		color: string;
		Icon: IconType;
		title: string;
		description: string;
	}[];
}

export interface RegisteredUser {
	accountType: typeof ACCOUNT_TYPES.INDIVIDUAL | typeof ACCOUNT_TYPES.CORPORATE;
	businessName: string;
	country: string;
	email: string;
	firstName: string;
	lastName: string;
	phoneNumber: string;
	promotions: boolean;
	createdAt: string;
	updatedAt: string;
}

export interface SearchParams {
	query: string;
	page: string;
	category: string;
	orderBy: string;
}