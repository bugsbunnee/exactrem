import { CountryCode } from 'libphonenumber-js';
import { IconType } from 'react-icons';
import { AccountType } from './constants';

export enum Currency {
	NGN = 'NGN',
	USD = 'USD',
	CAD = 'CAD',
	EUR = 'EUR'
};

export interface PickerOption {
	src: string;
	label: string;
	value: string;
}

export interface CountryOption extends PickerOption {
	phoneCode: string;
	currencies: PickerOption[],
	cca2: CountryCode;
};

export interface CurrencyOption extends PickerOption {
	value: Currency;
	rates: Record<string, number>;
}

export interface NavItem {
	route: string;
	label: string;
	options: {
		route?: string;
		color: string;
		Icon: IconType;
		title: string;
		description: string;
	}[];
}

export interface RegisteredUser {
	id: string;
	accountType: AccountType;
	businessName: string;
	country: string;
	createdAt: string;
	email: string;
	firstName: string;
	lastName: string;
	phoneNumber: string;
	promotions: boolean;
	referredBy: string;
	referralCode: string;
	updatedAt: string;
}
export interface SearchParams {
	query: string;
	page: string;
	category: string;
	orderBy: string;
}

export interface TableColumn {
	label: string;
	value: string;
	className?: string;
  }