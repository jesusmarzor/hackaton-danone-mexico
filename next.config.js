/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [process.env.API_IMAGES]
    }
}

module.exports = nextConfig
