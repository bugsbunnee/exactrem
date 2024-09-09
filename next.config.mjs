const isDev = process.argv.indexOf('dev') !== -1;
const isBuild = process.argv.indexOf('build') !== -1;

if (!process.env.VELITE_STARTED && (isDev || isBuild)) {
	process.env.VELITE_STARTED = '1';
	
	const { build } = await import('velite');
	await build({ watch: isDev, clean: !isDev })
}

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
	reactStrictMode: true,
	images: {
		unoptimized: true,
		domains: [
			'cdn.dummyjson.com',
			'flagsapi.com',
			'flagcdn.com',
			'upload.wikimedia.org',
		],
	},
};

export default nextConfig;
