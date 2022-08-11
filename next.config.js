/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/api/test",
        destination: `http://localhost:8090/test`,
      },
    ];
  },
};

module.exports = nextConfig;
