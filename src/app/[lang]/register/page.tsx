'use client';

import React, { useState } from 'react';
import classNames from 'classnames';

import { Cross1Icon } from '@radix-ui/react-icons';
import { useRouter } from 'next/navigation';
import { Box, Button, Dialog, Flex, IconButton, Separator } from '@radix-ui/themes';

import Conditional from '@/components/common/Conditional';
import Logo from '@/components/ui/Logo';
import RegistrationFormOne from './_components/RegistrationFormOne/RegistrationFormOne';
import RegistrationFormTwo from './_components/RegistrationFormTwo/RegistrationFormTwo';

const Register = () => {
	const [newUserId, setNewUserId] = useState('');
	const router = useRouter();

	return (
		<>
			<Flex align="center" className="p-10" gap="8">
				<Logo />

				<Flex className="flex-1" align="center" justify='center' gap="3" flexGrow="1">
					<Box 
						className={classNames({
							"w-10 h-10 rounded-full flex items-center justify-center border": true,
							"border-gray-400": !newUserId,
							"border-orange-400": newUserId,
						})}
					>
						<Conditional isVisible={!!newUserId}>
							<Box className="w-6 h-6 rounded-full bg-orange-400" />
						</Conditional>
					</Box>

					<Separator orientation="horizontal" size="2" color={newUserId ? "orange" : "gray"} />
					
					<Box className={classNames({
						"w-10 h-10 rounded-full": true,
						"border border-gray-400": true,
					})} />
				</Flex>

				<Dialog.Root>
					<Dialog.Trigger>
						<IconButton className="cursor-pointer" variant="ghost">
							<Cross1Icon width="25" height="25" />
						</IconButton>
					</Dialog.Trigger>

					<Dialog.Content className='max-w-96 rounded-md'>
						<Dialog.Title>Cancel Registration Process</Dialog.Title>
						
						<Dialog.Description size="2" mt="4" mb="6">
							You have not yet completed your registration process. Are you sure you want to cancel it?
						</Dialog.Description>

						<Flex gap="3" mt="4" justify="end">
							<Dialog.Close>
								<Button color="red" variant="soft" radius="small" size="3" className="text-sm" onClick={() => router.push("/")}>
									Yes, cancel
								</Button>
							</Dialog.Close>
							
							<Dialog.Close>
								<Button color="green" variant="soft" radius="small" size="3" className="text-sm">
									No, continue
								</Button>
							</Dialog.Close>
						</Flex>
					</Dialog.Content>
				</Dialog.Root>
			</Flex>

			{newUserId ? <RegistrationFormTwo userId={newUserId} /> : <RegistrationFormOne onInitializeUser={setNewUserId} />}
		</>
	);
};

export default Register;
