/** @type {import('next').NextConfig} */
export default {
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
	webpack: config => {
	  config.plugins.push(new VeliteWebpackPlugin())
	  return config
	}
}
  
class VeliteWebpackPlugin {
static started = false;

constructor(/** @type {import('velite').Options} */ options = {}) {
	this.options = options;
}

apply(/** @type {import('webpack').Compiler} */ compiler) {
	// executed three times in nextjs
	// twice for the server (nodejs / edge runtime) and once for the client
	compiler.hooks.beforeCompile.tapPromise('VeliteWebpackPlugin', async () => {
	if (VeliteWebpackPlugin.started) return;
	VeliteWebpackPlugin.started = true;
	const dev = compiler.options.mode === 'development';
	const { build } = await import('velite')
	await build({ watch: dev, clean: !dev })
	})
}
}

