/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: "/terms",
        destination: "/terms-quote",
        permanent: true,
      },
      {
        source: "/terms/",
        destination: "/terms-quote",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
