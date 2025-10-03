/** @type {import('next').NextConfig} */
const nextConfig = {
  // Performance optimizations
  experimental: {
    optimizeCss: true,
  },
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  },
  // Compression
  compress: true,
  // Reduce bundle size
  swcMinify: true,
  // Optimize for production
  productionBrowserSourceMaps: false,
}

module.exports = nextConfig
