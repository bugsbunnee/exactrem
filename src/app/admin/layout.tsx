

import AdminSearch from './_components/AdminSearch';
import AdminNavBar from './_components/AdminNavBar';
import NavUserDetails from './_components/NavUserDetails';

import { Box, Grid, } from '@radix-ui/themes';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';


async function AdminLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    const session = await getServerSession();
	if (!session) redirect('/api/auth/signin');

	return (
		<Box className='bg-stone-50 dark:bg-black h-dvh w-dvw overflow-hidden'>
			<Grid  gap='4' columns='20% 80%'>
				<AdminNavBar />

				<Box className='overflow-y-scroll h-dvh p-10'>
					<nav className="flex rounded-md justify-between items-center">
						<AdminSearch />

						{session.user && (
							<NavUserDetails sessionUser={session.user} />
						)}
					</nav>

					{children}
				</Box>

			</Grid>
		</Box>
	);
}

export default AdminLayout;
