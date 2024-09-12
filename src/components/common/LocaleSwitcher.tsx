'use client';

import Image from 'next/image';
import React from 'react';

import { Flex, Select } from '@radix-ui/themes';
import { Locale, locales } from '../../../i18n.config';
import { useParams, usePathname, useRouter } from 'next/navigation';

const LocaleSwitcher = () => {
	const params = useParams<{ lang: Locale }>();
	const router = useRouter();
	const pathName = usePathname();

	const getPathName = (locale: Locale) => {
		if (!pathName) return '/';

		const segments = pathName.split('/');
		segments[1] = locale;

		return segments.join('/');
	};

	return (
		<Flex direction="column" maxWidth="5rem">
			<Select.Root
				defaultValue={params.lang}
				onValueChange={(locale: Locale) => router.push(getPathName(locale))}
			>
				<Select.Trigger variant="soft" className="bg-[#222] text-white dark:bg-stone-50 dark:text-black">
					<Flex as="span" align="center" gap="2">
						<Flex
							className="w-5 h-5 rounded-full overflow-hidden"
							justify="center"
							align="center"
						>
							<Image
								src={locales[params.lang].src}
								alt={locales[params.lang].label}
								width={500}
								height={500}
								className="object-contain"
							/>
						</Flex>

						{locales[params.lang].value}
					</Flex>
				</Select.Trigger>

				<Select.Content position="popper">
					{Object.values(locales).map((locale) => (
						<Select.Item key={locale.value} value={locale.value}>
							{locale.label}
						</Select.Item>
					))}
				</Select.Content>
			</Select.Root>
		</Flex>
	);
};

export default LocaleSwitcher;
