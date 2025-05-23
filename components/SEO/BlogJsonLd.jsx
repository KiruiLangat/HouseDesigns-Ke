import Head from 'next/head';
import { cleanHtmlTags, truncateText } from '../../services/seoUtils';

export default function BlogJsonLd({ post, featuredImage, url }) {
  const authorName = post._embedded?.author?.[0]?.name || 'HouseDesigns';
  
  const cleanTitle = cleanHtmlTags(post.title.rendered);
  const cleanExcerpt = truncateText(post.excerpt.rendered, 160);
  
  // Extract categories and tags if available
  const categories = post._embedded?.['wp:term']?.[0]?.map(category => category.name) || [];
  const tags = post._embedded?.['wp:term']?.[1]?.map(tag => tag.name) || [];
  
  const articleData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': cleanTitle,
    'image': [
      featuredImage
    ],
    'datePublished': post.date,
    'dateModified': post.modified || post.date,
    'author': {
      '@type': 'Person',
      'name': authorName,
      'url': post._embedded?.author?.[0]?.link || 'https://housedesigns.co.ke/about-us'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'HouseDesigns',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://housedesigns.co.ke/Logo.png'
      }
    },
    'description': cleanExcerpt,
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': url
    },
    'keywords': [...tags, ...categories].join(', ')
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }}
      />
    </Head>
  );
}
