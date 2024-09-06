/** @type {import('next').NextConfig} */
const nextConfig = {
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
