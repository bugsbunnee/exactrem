import { i18n, Locale } from '../../../i18n.config';
import { getDictionary } from '@/utils/dictionaries';

import dynamic from "next/dynamic";

import UserChat from '@/components/sections/LiveChat/UserChat';
import DictionaryProvider from '@/providers/DictionaryProvider';

type Props = Readonly<{ children: React.ReactNode; params: { lang: Locale } }>;

export async function generateStaticParams() {
	return i18n.locales.map((locale) => ({ lang: locale }));
}

async function LangLayout({ children, params }: Props) {
	const dictionary = await getDictionary(params.lang);

	return (
		<DictionaryProvider dictionary={dictionary}>
			{children}

			<UserChat />
		</DictionaryProvider>
	);
}

export default LangLayout;
