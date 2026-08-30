/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    // Domains allowed for external images (for future use if we self-host)
    domains: ['i.postimg.cc', 'postimg.cc'],
  },
  // Enable compression for better performance
  compress: true,
  // Enable powered by header removal for security
  poweredByHeader: false,
  // Enable react strict mode for better development
  reactStrictMode: true,
}
export default nextConfig