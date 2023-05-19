/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["i.ytimg.com"],
  },

  async rewrites() {
    return [
      {
        source: "/blog",
        destination: "/blog",
      },
      {
        source: "/:blog",
        destination: "/blog",
      },
    ];
  },
};

module.exports = nextConfig;
