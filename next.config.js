/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['flagcdn.com', 'upload.wikimedia.org']
        // remotePatterns: [
        //   {
        //     protocol: 'https',
        //     hostname: '**.png',
        //   },
        // ],
      },
}

module.exports = nextConfig
