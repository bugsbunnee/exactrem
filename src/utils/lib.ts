import { Currency } from '@/utils/models';
import { toString } from 'mdast-util-to-string';
import { fromMarkdown } from 'mdast-util-from-markdown';

import dayjs from 'dayjs';
import readingTime from 'reading-time';


export const formatMoney = (currency: Currency, price: number) => {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency,
	}).format(price);
};

export const summarize = (text: string, limit?: number): string => {
	if (!text) return text;
	
	const actualLimit = limit ? limit : 10;
	return text.length > actualLimit
		? text.substring(0, actualLimit) + '...'
		: text;
};

export const getInitials = (text: string) => {
    return text.split(' ').map((word) => word[0]).join('');
};

export const getReadingTime = (text: string) => {
	if (!text) return 0;

	const content = toString(fromMarkdown(text));
	return readingTime(content).text;
};

export const formatDate = (date: string, format: string = 'MMMM DD, YYYY') => {
	return dayjs(date).format(format);
};

export const paginate = <T>(items: T[], currentPage: number, totalPages: number) => {
	const startIndex: number = (currentPage - 1) * totalPages;
	return items.slice(startIndex).filter((_, index) => index < totalPages);
};