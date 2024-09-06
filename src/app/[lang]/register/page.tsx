import React from 'react';

import Logo from '@/components/ui/Logo';
import RegistrationFormOne from './_components/RegistrationFormOne/RegistrationFormOne';

import { Cross1Icon } from '@radix-ui/react-icons';
import { Box, Flex, IconButton } from '@radix-ui/themes';

const Register = () => {
	return (
		<>
			<Flex align="center" className="p-10" gap="8">
				<Logo />

				<Box className="h-3 flex-1 bg-gray-200 rounded-sm overflow-hidden">
					<Box className="h-full bg-orange-600 w-2/4" />
				</Box>

				<IconButton variant="ghost">
					<Cross1Icon width="25" height="25" />
				</IconButton>
			</Flex>

			<RegistrationFormOne />
		</>
	);
};

export default Register;
