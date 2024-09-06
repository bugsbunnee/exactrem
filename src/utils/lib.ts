import { Currency } from '@/utils/models';

export const formatMoney = (currency: Currency, price: number) => {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency,
	}).format(price);
};
