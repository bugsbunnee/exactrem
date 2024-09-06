import React from 'react';
import Link from 'next/link';

import { Flex, IconButton } from '@radix-ui/themes';
import {
	EnvelopeClosedIcon,
	GitHubLogoIcon,
	InstagramLogoIcon,
	LinkedInLogoIcon,
} from '@radix-ui/react-icons';

const SocialLinks: React.FC = () => {
	const socialLinks = [
		{
			Icon: InstagramLogoIcon,
			url: 'https://www.instagram.com/marcelchukwuma/',
		},
		{
			Icon: LinkedInLogoIcon,
			url: 'https://www.linkedin.com/in/marcel-chukwuma-30108b12a/',
		},
		{
			Icon: GitHubLogoIcon,
			url: 'https://github.com/bugsbunnee',
		},
		{
			Icon: EnvelopeClosedIcon,
			url: 'marcel.chukwuma00@gmail.com',
		},
	];

	return (
		<Flex my="6" gap="6" justify="end">
			<Flex gap="4" align="center">
				{socialLinks.map((link) => (
					<IconButton type="button" key={link.url} color="gray" variant="ghost">
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
