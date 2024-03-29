/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "images.pexels.com", "storage.googleapis.com"],
    unoptimized: true,
  },
}

module.exports = nextConfig
