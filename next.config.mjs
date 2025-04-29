/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
      domains: ['housedesigns.co.ke'],
      unoptimized: true,
    },
    trailingSlash: true,
}
   
export default nextConfig