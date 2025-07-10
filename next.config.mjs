/** @type {import('next').NextConfig} */
const nextConfig = {  
    images: {
      domains: ['housedesigns.co.ke', 'www.housedesigns.co.ke'],
      formats: ['image/avif', 'image/webp'],
      deviceSizes: [640, 750, 828, 1080, 1200],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'housedesigns.co.ke',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'www.housedesigns.co.ke',
          pathname: '/**',
        }
      ],
      unoptimized: true,
    },
    trailingSlash: true,
    async rewrites() {
      return [
        {
          source: '/CMS/:path*',
          destination: 'https://housedesigns.co.ke/CMS/:path*',
        }
      ]
    }
}
   
export default nextConfig