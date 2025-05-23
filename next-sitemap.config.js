/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://housedesigns.co.ke',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  additionalSitemaps: [
    `https://housedesigns.co.ke/server-sitemap.xml`,
  ],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://housedesigns.co.ke/server-sitemap.xml',
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/CMS/wp-admin/', '/CMS/wp-login.php'],
      },
    ],
  },
  exclude: ['/CMS/*', '/404'],
}
