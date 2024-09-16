import { NavItem } from '@/utils/models';
import { FcBriefcase, FcBusiness, FcBusinessman, FcNews, FcViewDetails, FcPortraitMode } from 'react-icons/fc';

export enum AccountType {
	INDIVIDUAL = 'Individual account',
	CORPORATE = 'Corporate account',
}

export const navigationItems: NavItem[] = [
	{
		route: '/services',
		label: 'Our Services',
		options: [
			{
				route: '/services/person-to-person',
				color: 'bg-orange-50',
				title: 'Person to Person (P2P)',
				description: 'Individuals sending money to friends and family.',
				Icon: FcPortraitMode,
			},
			{
				route: '/services/person-to-business',
				color: 'bg-sky-50',
				title: 'Person to Business (P2B)',
				description: 'Individuals paying businesses (e.g., bills, services)',
				Icon: FcBusinessman,
			},
			{
				route: '/services/business-to-business',
				color: 'bg-stone-50',
				title: 'Business to Business (B2B)',
				description: 'Companies transacting with each other.',
				Icon: FcBusiness,
			},
			{
				route: '/services/business-to-person',
				color: 'bg-rose-100',
				title: 'Business to Person (B2P)',
				description: 'Businesses paying individuals (e.g., salaries, invoices)',
				Icon: FcBriefcase,
			},
			{
				route: '/services/cfos',
				color: 'bg-teal-100',
				title: 'Chief Financial Officers (CFOs)',
				description: 'Exactrem assists CFOs with any FX-related queries or challenges',
				Icon: FcBusinessman,
			},
		],
	},
	{
		route: '/about',
		label: 'About us',
		options: [],
	},
	{
		route: '/news',
		label: 'Resources',
		options: [
			{
				route: '/news',
				color: 'bg-orange-50',
				title: 'Newsroom',
				description: 'Our milestone and achievements, news related to the sector that we operate.',
				Icon: FcNews,
			},
			{
				route: '/blog',
				color: 'bg-sky-50',
				title: 'Blog',
				description: 'Published articles, and qualilty write-ups related to Foreign Exchange',
				Icon: FcViewDetails,
			},
		],
	},
	{
		route: '/contact',
		label: 'Contact us',
		options: [],
	},
	{
		route: '/invite',
		label: 'Invite a friend',
		options: [],
	},
];

export const accountTypes: NavItem['options'] = [
	{
		route: '',
		color: 'bg-orange-50',
		title: AccountType.INDIVIDUAL,
		description: 'For individuals and personal entities.',
		Icon: FcPortraitMode,
	},
	{
		route: '',
		color: 'bg-stone-50',
		title: AccountType.CORPORATE,
		description: 'For businesses and corporate entities.',
		Icon: FcBusiness,
	},
];

export const liveChatIds = ['user-one', 'marcelexactrem'];

export const ALL_KEYWORD = 'all';
