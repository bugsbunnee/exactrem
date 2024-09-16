'use client';

import React, { useCallback, useState } from 'react';
import classNames from 'classnames';

import { Cross1Icon } from '@radix-ui/react-icons';
import { useRouter } from 'next/navigation';
import { Box, Button, Dialog, Flex, IconButton, Separator } from '@radix-ui/themes';

import Conditional from '@/components/common/Conditional';
import Logo from '@/components/ui/Logo';
import RegistrationFormOne from './_components/RegistrationFormOne/RegistrationFormOne';
import RegistrationFormTwo from './_components/RegistrationFormTwo/RegistrationFormTwo';
import RegistrationFormThree from './_components/RegistrationFormThree/RegistrationFormThree';

import useDictionary from '@/hooks/useDictionary';

const Register = () => {
	const [newUserId, setNewUserId] = useState('');
	const [referralCode, setReferralCode] = useState('');
	
	const dictionary = useDictionary();
	const router = useRouter();

	const STEPS = [
		{
			id: 'accountType',
			isCompleted: !!newUserId,
		},
		{
			id: 'userInfo',
			isCompleted: !!newUserId && !!referralCode,
		},
		{
			id: 'referralCode',
			isCompleted: false,
		},
	];

	const renderRegistrationForm = useCallback(() => {
		if (referralCode) {
			return <RegistrationFormThree userId={newUserId} />
		}

		if (newUserId) {
			return <RegistrationFormTwo userId={newUserId} onCreateUser={setReferralCode} />;
		}

		return <RegistrationFormOne onInitializeUser={setNewUserId} />;
	}, [newUserId, referralCode]);

	return (
		<>
			<Flex align="center" className="p-10" gap="8">
				<Logo />

				<Flex className="flex-1" align="center" justify='center' gap="3" flexGrow="1">
					{STEPS.map((step, index) => (
						<React.Fragment key={step.id}>
							<Box 
								className={classNames({
									"w-10 h-10 rounded-full flex items-center justify-center border": true,
									"border-gray-400": !step.isCompleted,
									"border-orange-400": step.isCompleted,
								})}
							>
								<Conditional isVisible={step.isCompleted}>
									<Box className="w-6 h-6 rounded-full bg-orange-400" />
								</Conditional>
							</Box>
							
							<Conditional isVisible={(index + 1) !== STEPS.length}>
								<Separator orientation="horizontal" size="2" color={step.isCompleted ? "orange" : "gray"} />
							</Conditional>
						</React.Fragment>
					))}
				</Flex>

				<Dialog.Root>
					<Dialog.Trigger>
						<IconButton className="cursor-pointer" variant="ghost">
							<Cross1Icon width="25" height="25" />
						</IconButton>
					</Dialog.Trigger>

					<Dialog.Content className='max-w-96 rounded-md'>
						<Dialog.Title>{dictionary.page.register.title}</Dialog.Title>
						
						<Dialog.Description size="2" mt="4" mb="6">
							{dictionary.page.register.description}
						</Dialog.Description>

						<Flex gap="3" mt="4" justify="end">
							<Dialog.Close>
								<Button color="red" variant="soft" radius="small" size="3" className="text-sm" onClick={() => router.push("/")}>
									{dictionary.page.register.yes_cta}
								</Button>
							</Dialog.Close>
							
							<Dialog.Close>
								<Button color="green" variant="soft" radius="small" size="3" className="text-sm">
									{dictionary.page.register.no_cta}
								</Button>
							</Dialog.Close>
						</Flex>
					</Dialog.Content>
				</Dialog.Root>
			</Flex>

			<Box className='p-10'>
				{renderRegistrationForm()}
			</Box>
		</>
	);
};

export default Register;
