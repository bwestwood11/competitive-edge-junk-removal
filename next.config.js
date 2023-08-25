/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
          protocol: 'https',
          hostname: 'raw.githubusercontent.com',
          port: '',
          pathname: '/bwestwood11/junk-removal-blog/main/images/**',
        }
    ],
  }
}

module.exports = nextConfig
