"use client";

import { Currency, CurrencyOption, NavItem } from '@/utils/models';
import {
	FcBriefcase,
	FcBusiness,
	FcBusinessman,
	FcPortraitMode,
} from 'react-icons/fc';

export const ACCOUNT_TYPES = {
	INDIVIDUAL: 'Individual account',
	CORPORATE: 'Corporate account',
} as const;

export const currencies: Record<Currency, CurrencyOption> = {
	CAD: {
		src: 'https://flagsapi.com/CA/shiny/64.png',
		label: 'Canadian Dollar',
		value: 'CAD',
		rates: {
			USD: 100,
			NGN: 1000,
		},
	},
	NGN: {
		src: 'https://flagsapi.com/NG/shiny/64.png',
		label: 'Nigerian Naira',
		value: 'NGN',
		rates: {
			USD: 0.05,
			CAD: 800,
		},
	},
	USD: {
		src: 'https://flagsapi.com/US/shiny/64.png',
		label: 'US Dollar',
		value: 'USD',
		rates: {
			NGN: 1597.5,
			CAD: 100,
		},
	},
	EUR: {
		src: 'https://flagsapi.com/DE/shiny/64.png',
		label: 'Euro',
		value: 'EUR',
		rates: {
			USD: 100,
			NGN: 1000,
		},
	},
};

export const navigationItems: NavItem[] = [
	{
		route: 'services',
		label: 'Our Services',
		options: [
			{
				color: 'bg-orange-50',
				title: 'Person to Person (P2P)',
				description: 'Individuals sending money to friends and family.',
				Icon: FcPortraitMode,
			},
			{
				color: 'bg-sky-50',
				title: 'Person to Business (P2B)',
				description: 'Individuals paying businesses (e.g., bills, services)',
				Icon: FcBusinessman,
			},
			{
				color: 'bg-stone-50',
				title: 'Business to Business (B2B)',
				description: 'Companies transacting with each other.',
				Icon: FcBusiness,
			},
			{
				color: 'bg-rose-50',
				title: 'Business to Person (B2P)',
				description: 'Businesses paying individuals (e.g., salaries, invoices)',
				Icon: FcBriefcase,
			},
		],
	},
	{
		route: 'about',
		label: 'About us',
		options: [],
	},
	{
		route: 'blog',
		label: 'Blog',
		options: [],
	},
	{
		route: 'news',
		label: 'Newsroom',
		options: [],
	},
	{
		route: 'contact',
		label: 'Contact us',
		options: [],
	},
];

export const accountTypes: NavItem['options'] = [
	{
		color: 'bg-orange-50',
		title: ACCOUNT_TYPES.INDIVIDUAL,
		description: 'For individuals and personal entities.',
		Icon: FcPortraitMode,
	},
	{
		color: 'bg-stone-50',
		title: ACCOUNT_TYPES.CORPORATE,
		description: 'For businesses and corporate entities.',
		Icon: FcBusiness,
	},
];

export const ALL_KEYWORD = 'all';
