import React from 'react';
import Image from 'next/image';

import { Box, Container, Grid, Heading, Text } from '@radix-ui/themes';

import fidelity from '../../../../public/fidelity.png';
import zenith from '../../../../public/zenith.png';
import access from '../../../../public/access.png';
import providus from '../../../../public/providus.png';
import firstbank from '../../../../public/firstbank.png';

const Partners = () => {
	const partners = [
		{ url: fidelity, label: 'Fidelity' },
		{ url: zenith, label: 'Zenith' },
		{ url: access, label: 'Access' },
		{ url: firstbank, label: 'FirstBank' },
		{ url: providus, label: 'Providus' },
	];

	return (
		<section className="p-20">
			<Heading className="text-center mb-10" size="8">
				Cash pickup and bank deposit in Nigeria
			</Heading>

			<Container>
				<Grid
					// className="grayscale"
					columns="5"
					gap="1"
					align="center"
					justify="center"
				>
					{partners.map((partner) => (
						<Image
							key={partner.label}
							src={partner.url}
							alt={partner.label}
							width={200}
							height={200}
							className="object-contain"
						/>
					))}
				</Grid>

				<Box className="mt-10">
					<Text size="2">
						Trademarks, trade names and logos displayed are registered
						trademarks of their respective owners. No affiliation or endorsement
						of Remitly should be implied.
					</Text>
				</Box>
			</Container>
		</section>
	);
};

export default Partners;
