import { Currency } from '@/utils/models';
import { z, ZodNumber } from 'zod';

export const newCurrencySchema = z.object({
	label: z.string().min(1, 'Please provide currency label').max(30),
	value: z.string().min(1, 'Please provide currency value').max(3),
	src: z.string().url(),
});

export const getUpdateCurrencySchema = (currencies: string[]) => {
	const fields: { [key: string]: ZodNumber } = {};

	currencies.forEach((currency) => {
		fields[currency] = z.number().positive();
	});

	return z.object(fields);
}