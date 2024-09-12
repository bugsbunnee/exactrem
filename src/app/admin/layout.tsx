

import AdminSearch from './_components/AdminSearch';
import AdminNavBar from './_components/AdminNavBar';

import { getServerSession } from 'next-auth';
import { Avatar, Box, Flex, Grid, Separator, Text } from '@radix-ui/themes';

import { getInitials } from '@/utils/lib';
import { redirect } from 'next/navigation';

async function AdminLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    const session = await getServerSession();
	if (!session) redirect('/api/auth/signin');

	return (
		<Box className='bg-stone-50 h-dvh w-dvw overflow-hidden'>
			<Grid  gap='4' columns='20% 80%'>
				<AdminNavBar />

				<Box className='bg-stone-50 overflow-y-scroll h-dvh p-10'>
					<nav className="flex rounded-md justify-between items-center">
						<AdminSearch />

						{session?.user?.name && (
							<Flex align='center' gap='3'>
								<Box>
									<Text size='2' className="font-semibold">
										{session.user!.name}
									</Text>
								</Box>
								
								<Separator orientation='vertical' />
								
									<Avatar 
										src={session.user!.image as string} 
										fallback={getInitials(session.user!.name)} 
										size="2" 
										radius="full" 
									/>

							</Flex>
						)}
					</nav>

					{children}
				</Box>
			</Grid>
		</Box>
	);
}

export default AdminLayout;
