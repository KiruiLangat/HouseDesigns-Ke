import Head from 'next/head';

/**
 * Organization schema markup component for HouseDesigns
 * This adds structured data about the company for search engines
 */
export default function OrganizationJsonLd() {
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'HouseDesigns',
    'url': 'https://housedesigns.co.ke',
    'logo': 'https://housedesigns.co.ke/Logo.png',
    'sameAs': [
      'https://www.facebook.com/housedesigns',
      'https://twitter.com/housedesigns',
      'https://www.instagram.com/housedesigns',
      'https://www.linkedin.com/company/housedesigns'
    ],
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': '+254-XXXXXXXXX',
      'contactType': 'customer service',
      'email': 'info@housedesigns.co.ke',
      'availableLanguage': ['English', 'Swahili']
    },
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '[Your Street Address]',
      'addressLocality': 'Nairobi',
      'addressRegion': 'Nairobi',
      'postalCode': '[Your Postal Code]',
      'addressCountry': 'KE'
    },
    'description': 'HouseDesigns - Discover the difference in Style, Design, Delivery and Comfort. We provide professional interior design and home furnishing services in Kenya.'
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
    </Head>
  );
}
