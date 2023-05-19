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
        destination: "https://www.blog.omegachapel.org",
      },
      {
        source: "/:blog",
        destination: "https://www.blog.omegachapel.org",
      },
    ];
  },
};

module.exports = nextConfig;
