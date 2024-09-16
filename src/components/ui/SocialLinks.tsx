import React from 'react';
import Link from 'next/link';

import { Flex, IconButton } from '@radix-ui/themes';
import { EnvelopeClosedIcon } from '@radix-ui/react-icons';

const SocialLinks: React.FC = () => {
	const socialLinks = [
		{
			Icon: EnvelopeClosedIcon,
			url: process.env.NEXT_PUBLIC_EMAIL as string,
		},
	];

	return (
		<Flex gap="6" justify="start">
			<Flex gap="4" align="center">
				{socialLinks.map((link) => (
					<IconButton type="button" key={link.url} variant="ghost">
						<Link href={link.url} target="_blank" rel="noopenner noreferrer">
							<link.Icon width="25" height="25" />
						</Link>
					</IconButton>
				))}
			</Flex>
		</Flex>
	);
};

export default SocialLinks;
