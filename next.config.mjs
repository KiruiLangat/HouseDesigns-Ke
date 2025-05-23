/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
      domains: [
        'housedesigns.co.ke',
        'housedesigns.co.ke/CMS'
      ],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'housedesigns.co.ke',
          pathname: '/CMS/**',
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