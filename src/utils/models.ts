import { IconType } from 'react-icons';

export type Currency = 'NGN' | 'USD' | 'CAD';

export interface CurrencyOption {
	src: string;
	label: string;
	value: Currency;
	rates: Record<string, number>;
}

export interface NavItem {
	label: string;
	options: {
		color: string;
		Icon: IconType;
		title: string;
		description: string;
	}[];
}
