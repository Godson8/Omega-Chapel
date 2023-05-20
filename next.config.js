/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "/blog",
        permanent: true,
      },
    ];
  },

  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["i.ytimg.com"],
  },
};

module.exports = nextConfig;
