import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  turbopack: {
    resolveAlias: {
      '@': './src',
      '@public': './public',
    },
  },
  images: {
    qualities: [25, 50, 75, 100],
  },
  async redirects() {
    return [
      {
        source: '/growth-program',
        destination: '/business-scale-up',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
