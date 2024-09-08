import Negotiator from 'negotiator';
import { NextRequest, NextResponse } from 'next/server';
import { i18n } from '../i18n.config';
import { match } from '@formatjs/intl-localematcher';

const getLocale = (request: NextRequest): string | undefined => {
	const negotiatorHeaders: Record<string, string> = {};
	request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

	const locales: string[] = i18n.locales;
	const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

	return match(languages, locales, i18n.defaultLocale);
};

export const middleware = (request: NextRequest) => {
	const pathname = request.nextUrl.pathname;
	const pathnameIsMissingLocale = i18n.locales.every((locale) => {
		return !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`;
	});

	if (pathnameIsMissingLocale) {
		const locale = getLocale(request);
		request.nextUrl.pathname = `/${locale}${pathname}`;

		return NextResponse.redirect(request.nextUrl);
	}
};

export const config = {
	// Matcher ignoring `/_next/` and `/api/`
	 matcher: ['/((?!api|static|.*\\..*|_next).*)']
};
