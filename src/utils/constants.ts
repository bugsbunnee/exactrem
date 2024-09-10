"use client";

import { NavItem } from '@/utils/models';
import { FcBriefcase, FcBusiness, FcBusinessman, FcPortraitMode } from 'react-icons/fc';

export const ACCOUNT_TYPES = {
	INDIVIDUAL: 'Individual account',
	CORPORATE: 'Corporate account',
} as const;

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
