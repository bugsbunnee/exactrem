import React from 'react';
import { Box, Card, Flex, Separator, Skeleton, Text } from '@radix-ui/themes';

const ContactSkeleton = () => {
	return (
		<Flex flexGrow="1" justify="center" p={{ md: '9', initial: '1' }}>
			<Box
				as="div"
				className="rounded-tl-3xl rounded-br-3xl maxmd:max-w-2xl w-full border-white border-2 p-4"
			>
				<Card className="shadow-lg p-8">
					<Flex justify="center" align="center" gap="6">
						<Box className="w-full">
							<Flex
								flexGrow="1"
								gap={{ lg: '9', initial: '2' }}
								direction={{ lg: 'row', initial: 'column' }}
							>
								<Box className="w-full">
									<Text size="2" className="font-bold">
										<Skeleton>First name</Skeleton>
									</Text>

									<Skeleton className="w-full h-10" />
								</Box>

								<Box className="w-full">
									<Text size="2" className="font-bold">
										<Skeleton>Last name</Skeleton>
									</Text>

									<Skeleton className="w-full h-10" />
								</Box>
							</Flex>

							<Separator my="5" orientation="horizontal" size="4" />

							<Flex
								flexGrow="1"
								gap={{ lg: '9', initial: '2' }}
								direction={{ lg: 'row', initial: 'column' }}
							>
								<Box className="w-full">
									<Text size="2" className="font-bold">
										<Skeleton>Email</Skeleton>
									</Text>

									<Skeleton className="w-full h-10" />
								</Box>

								<Box className="w-full">
									<Text size="2" className="font-bold">
										<Skeleton>Country</Skeleton>
									</Text>

									<Skeleton className="w-full h-10" />
								</Box>
							</Flex>

							<Separator my="5" orientation="horizontal" size="4" />

							<Flex
								flexGrow="1"
								gap={{ lg: '9', initial: '2' }}
								direction={{ lg: 'row', initial: 'column' }}
							>
								<Box className="w-full">
									<Text size="2" className="font-bold">
										<Skeleton>Email</Skeleton>
									</Text>

									<Skeleton className="w-full h-10" />
								</Box>

								<Box className="w-full">
									<Text size="2" className="font-bold">
										<Skeleton>Country</Skeleton>
									</Text>

									<Skeleton className="w-full h-10" />
								</Box>
							</Flex>

							<Flex
								flexGrow="1"
								justify={{ sm: 'between', initial: 'center' }}
								gap={{ sm: '9', initial: '1' }}
								direction={{ sm: 'row', initial: 'column' }}
							>
								<Box className="w-32 max-sm:w-full" my="6">
									<Skeleton className="w-full h-10" />
								</Box>
							</Flex>
						</Box>
					</Flex>
				</Card>
			</Box>
		</Flex>
	);
};

export default ContactSkeleton;
