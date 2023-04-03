/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    remotePatterns: [
      {
        hostname: "t.ly",
      },

      {
        hostname: "cdn.sanity.io",
      },

      {
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
}

module.exports = nextConfig
