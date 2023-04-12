/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    stripe_secret_key_test: process.env.STRIPE_SECRET_KEY
  }
}

module.exports = nextConfig
