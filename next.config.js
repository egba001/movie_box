/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // appDir: true,
    esmExternals: "loose", // <-- add this
    serverComponentsExternalPackages: ["mongoose"] // <-- and this
  },
  images: {
    remotePatterns: [
    {
      protocol: 'https',
      hostname: 'flagcdn.com',
    },
    {
      protocol: 'https',
      hostname: 'upload.wikimedia.org',
    },
  ]
        // remotePatterns: [
        //   {
        //     protocol: 'https',
        //     hostname: '**.png',
        //   },
        // ],
  },
    // webpack5: true,
  webpack: (config, { isServer }) => {
    // config.experiments = {
    //   topLevelAwait: true
    // };
    if  (!isServer) {
      config.resolve.fallback = { fs: false, net: false };
      }
    return config;
  },
}

// webpack: (config, { isServer }) => { if (!isServer) { config.resolve.fallback = { net: false } }

module.exports = nextConfig
