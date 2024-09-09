import React from 'react';
import Image from 'next/image';

import { Box, Container, Flex, Grid, Heading, Text } from '@radix-ui/themes';

import Conditional from '@/components/common/Conditional';

import fidelity from '../../../../public/fidelity.png';
import zenith from '../../../../public/zenith.png';
import access from '../../../../public/access.png';
import firstbank from '../../../../public/firstbank.png';

interface Props {
	displayHeading: boolean;
}

const Partners: React.FC<Props> = ({ displayHeading }) => {
	const partners = [
		{ url: fidelity, label: 'Fidelity' },
		{ url: zenith, label: 'Zenith' },
		{ url: access, label: 'Access' },
		{ url: firstbank, label: 'FirstBank' },
	];

	return (
		<Conditional isVisible={false}>
			<section className="px-20">
				<Conditional isVisible={displayHeading}>
					<Heading className="text-center mb-10" size="8">
						Cash pickup and bank deposit in Nigeria
					</Heading>
				</Conditional>

				<Container>
					<Grid
						// className="grayscale"
						columns="4"
						gap="1"
						align="center"
						justify="center"
					>
						{partners.map((partner) => (
							<Flex key={partner.label} justify="center" align="center">
								<Image
									src={partner.url}
									alt={partner.label}
									width={200}
									height={200}
									className="object-contain"
								/>
							</Flex>
						))}
					</Grid>

					<Conditional isVisible={false}>
						<Box className="mt-10">
							<Text size="2">
								Trademarks, trade names and logos displayed are registered
								trademarks of their respective owners. No affiliation or endorsement
								of Remitly should be implied.
							</Text>
						</Box>
					</Conditional>
				</Container>
			</section>
		</Conditional>
	);
};

export default Partners;
