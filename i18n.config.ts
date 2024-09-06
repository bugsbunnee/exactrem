export type Locale = typeof LOCALES.EN;

interface LocaleOption {
	label: string;
	value: Locale;
	src: string;
}

export const LOCALES = {
	EN: 'en',
} as const;

export const locales: Record<Locale, LocaleOption> = {
	[LOCALES.EN]: {
		label: 'English',
		value: LOCALES.EN,
		src: 'https://flagsapi.com/US/shiny/64.png',
	},
};

export const i18n = {
	defaultLocale: LOCALES.EN,
	locales: Object.keys(locales),
};
