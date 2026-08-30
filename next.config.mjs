/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    // Remote patterns allowed for external images (replaces deprecated domains)
    remotePatterns: [
      { protocol: 'https', hostname: 'i.postimg.cc', pathname: '/**' },
      { protocol: 'https', hostname: 'postimg.cc', pathname: '/**' },
    ],
  },
  // Enable compression for better performance
  compress: true,
  // Enable powered by header removal for security
  poweredByHeader: false,
  // Enable react strict mode for better development
  reactStrictMode: true,
}
export default nextConfig