import { useQuery } from '@tanstack/react-query';
import { CountryCode } from 'libphonenumber-js';
import { useCallback, useMemo } from 'react';

import axios from 'axios';
import _ from 'lodash';

interface Country {
	name: {
		common: string;
	};
	flags: {
		png: string;
		svg: string;
	};
	idd: {
		root: string;
		suffixes: string[];
	};
	cca2: CountryCode;
}

const useCountries = () => {
	const getCountries = useCallback(() => {
		return axios
			.get(process.env.NEXT_PUBLIC_COUNTRY_API as string)
			.then((result) => result.data);
	}, []);

	const result =  useQuery<Country[]>({
		queryKey: ['countries'],
		queryFn: getCountries,
		staleTime: 500 * 1_000,
		retry: 3,
	});

	const countries = useMemo(() => {
		if (!result.data) return [];

		const mappedResult = result.data.map((country) => ({
			label: country.name.common,
			src: country.flags.png,
			value: country.name.common,
			cca2: country.cca2,
			phoneCode:
				country.idd.root +
				(country.idd.suffixes ? country.idd.suffixes[0] : ''),
		}));

		return _.orderBy(mappedResult, ['label'], ['asc']);
	}, [result.data]);

	return { countries, ...result }
};

export default useCountries;
