import React, { useId } from 'react';

export default function BlogJsonLd({ post, featuredImage, url }) {
  // Generate a stable ID for this component instance
  const id = useId();
  
  // Ensure post has all required properties before rendering
  if (!post || !post.title || !post.date) {
    return null;
  }
  
  // Create a minimal JSON-LD object with only required fields
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url || `https://housedesigns.co.ke/blog/${post.slug}`
    },
    headline: post.title.rendered,
    // Only include image if available
    ...(featuredImage ? { image: [featuredImage] } : {}),
    datePublished: post.date,
    dateModified: post.modified || post.date,
    author: {
      "@type": "Person",
      name: post._embedded?.author?.[0]?.name || "HouseDesigns"
    },
    publisher: {
      "@type": "Organization",
      name: "HouseDesigns",
      logo: {
        "@type": "ImageObject",
        url: "https://housedesigns.co.ke/Logo.png"
      }
    }
  };

  // Converting to JSON string on the server ONCE (instead of each render)
  const jsonLdString = JSON.stringify(jsonLd);
  
  // Use dangerouslySetInnerHTML to avoid hydration mismatch
  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLdString }}
      id={`jsonld-blog-${id}`}
      suppressHydrationWarning={true}
    />
  );
}
