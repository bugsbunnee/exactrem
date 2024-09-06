import React from 'react';

import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { IconButton } from '@radix-ui/themes';
import { useTheme } from 'next-themes';

const ThemeSwitcher = () => {
	const { theme, setTheme } = useTheme();

	return (
		<IconButton
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
			size="2"
			variant="soft"
		>
			{theme === 'dark' ? <MoonIcon /> : <SunIcon />}
		</IconButton>
	);
};

export default ThemeSwitcher;
