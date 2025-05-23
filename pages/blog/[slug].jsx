import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '../../assets/styles/BlogPost.module.css';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import ShareIcon from '@mui/icons-material/Share';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CanonicalURL from '../../components/SEO/CanonicalURL';
import BlogJsonLd from '../../components/SEO/BlogJsonLd';
import { ensureAbsoluteUrl, cleanHtmlTags, getSocialImage, truncateText } from '../../services/seoUtils';


const style = {
    fontFamily: 'Poppins',
};

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = useState(null);
  const [previousPost, setPreviousPost] = useState(null);
  const [nextPost, setNextPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!slug) return;
    setIsLoading(true); // starts loading
    fetch(`https://housedesigns.co.ke/CMS/wp-json/wp/v2/posts?_embed&slug=${slug}`)
      .then(response => response.json())
      .then(data => {
        setPost(data[0]);
        setIsLoading(false); // Ends loading after setting post
      });

    // Fetch all posts to determine previous and next posts
    fetch(`https://housedesigns.co.ke/CMS/wp-json/wp/v2/posts?_embed`)
      .then(response => response.json())
      .then(data => {
        const currentIndex = data.findIndex(post => post.slug === slug);

        // Update previous post, check if current post is the first
        if (currentIndex > 0) {
          setPreviousPost(data[currentIndex - 1]);
        } else {
          setPreviousPost(null);
        }

        // Update next post, check if current post is the last
        if (currentIndex >= 0 && currentIndex < data.length - 1) {
          setNextPost(data[currentIndex + 1]);
        } else {
          setNextPost(null); // Or handle as needed
        }
      });
  }, [slug]);
  if (!post || isLoading) {
    return (
      <div className={styles.loading}>
        <HourglassBottomIcon className={styles.loadingIcon} />
        <p>Retrieving post...</p>
      </div>
    );
  }
  
  // Clean the excerpt text by removing HTML tags
  const cleanExcerpt = truncateText(post.excerpt.rendered, 160);
  
  // Get the featured image with fallback
  const featuredImage = getSocialImage(post);

  // Get clean post title
  const postTitle = cleanHtmlTags(post.title.rendered);

  return (
    <div style={style} className={styles.postContainer}>        
      <Head>
        <title>{postTitle} | HouseDesigns</title>
        <meta name="title" content={postTitle} />
        <meta name="description" content={cleanExcerpt} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={`https://housedesigns.co.ke/blog/${post.slug}`} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://housedesigns.co.ke/blog/${post.slug}`} />
        <meta property="og:title" content={postTitle} />
        <meta property="og:description" content={cleanExcerpt} />
        <meta property="og:image" content={featuredImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="HouseDesigns" />
        <meta property="article:published_time" content={post.date} />
        {post.modified && <meta property="article:modified_time" content={post.modified} />}
        {post._embedded?.author?.[0] && 
          <meta property="article:author" content={post._embedded.author[0].name} />}
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={`https://housedesigns.co.ke/blog/${post.slug}`} />
        <meta name="twitter:title" content={postTitle} />
        <meta name="twitter:description" content={cleanExcerpt} />
        <meta name="twitter:image" content={featuredImage} />
        <meta name="twitter:site" content="@housedesigns" />
        
        {/* Additional SEO tags */}
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="author" content={post._embedded?.author?.[0]?.name || "HouseDesigns"} />
      </Head>
      
      {/* Add structured data */}
      <BlogJsonLd 
        post={post} 
        featuredImage={featuredImage} 
        url={`https://housedesigns.co.ke/blog/${post.slug}`} 
      />
      
      <div className={styles.post}>        
        <div className={styles.featuredImg}>
          {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
            <Image 
              src={ensureAbsoluteUrl(post._embedded['wp:featuredmedia'][0].source_url)} 
              alt={postTitle}
              layout='responsive' 
              width={700} 
              height={475} 
              
            />
          )}
        </div>
        <div className={styles.content}>          
          <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          <p className={styles.postDate}>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>

          {/* Social sharing buttons */}
          <div className={styles.socialSharing}>
            <div className={styles.shareTitle}>
              <ShareIcon className={styles.shareIcon} /> 
              <h3>Share:</h3>
            </div>            <div className={styles.shareButtons}>
              <a 
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`${postTitle} - ${cleanExcerpt}\n\nhttps://housedesigns.co.ke/blog/${post.slug}`)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.whatsappShare}
                aria-label="Share on WhatsApp"
              >
                <WhatsAppIcon />
              </a>
              <a 
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://housedesigns.co.ke/blog/${post.slug}`)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.facebookShare}
                aria-label="Share on Facebook"
              >
                <FacebookIcon />
              </a>
              <a 
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`${postTitle} - ${cleanExcerpt}`)}&url=${encodeURIComponent(`https://housedesigns.co.ke/blog/${post.slug}`)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.twitterShare}
                aria-label="Share on Twitter"
              >
                <XIcon />
              </a>
              <a 
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://housedesigns.co.ke/blog/${post.slug}`)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.linkedinShare}
                aria-label="Share on LinkedIn"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>

          <div className={styles.postContent} dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>
      </div>

      
        <div className={styles.blogNavigation}>
        <div className={styles.previous}>
          {previousPost && (
            <Link href={`/blog/${previousPost.slug}`} legacyBehavior>
              <a className={styles.navigationLink}>
                <span>● Previous Post</span>
              </a>
            </Link>
          )}
        </div>
        <div className={styles.next}>
          {nextPost && (
            <Link href={`/blog/${nextPost.slug}`} legacyBehavior>
              <a className={styles.navigationLink}>
                <span>Next Post ●</span>
              </a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}