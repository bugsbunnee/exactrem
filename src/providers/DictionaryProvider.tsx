'use client';

import React, { PropsWithChildren } from 'react';
import { getDictionary } from '@/utils/dictionaries';

type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

type Props = PropsWithChildren & { dictionary: Dictionary };

export const DictionaryContext = React.createContext<Dictionary | null>(null);

const DictionaryProvider: React.FC<Props> = ({ children, dictionary }) => {
	return (
		<DictionaryContext.Provider value={dictionary}>
			{children}
		</DictionaryContext.Provider>
	);
};

export default DictionaryProvider;
