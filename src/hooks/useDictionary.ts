import { useContext } from 'react';
import { DictionaryContext } from '@/providers/DictionaryProvider';

const useDictionary = () => {
	const dictionary = useContext(DictionaryContext);
	if (dictionary !== null) return dictionary;

	throw new Error('Dictionary must be used within a context!');
};

export default useDictionary;
