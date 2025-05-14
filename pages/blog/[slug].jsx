import React, { useEffect, useState } from 'react';
import Head from 'next/head'; // Replace Helmet with Next.js Head
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
  const cleanExcerpt = post.excerpt.rendered
    .replace(/<[^>]*>/g, '')
    .substring(0, 160);

  // Get the featured image with fallback
  const featuredImage = post._embedded && 
    post._embedded['wp:featuredmedia'] && 
    post._embedded['wp:featuredmedia'][0] ? 
    post._embedded['wp:featuredmedia'][0].source_url : 
    'https://housedesigns.co.ke/default-image.jpg';

  return (
    <div style={style} className={styles.postContainer}>
      <Head>
        <title>{post.title.rendered}</title>
        <meta name="title" content={post.title.rendered} />
        <meta name="description" content={cleanExcerpt} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://housedesigns.co.ke/blog/${post.slug}`} />
        <meta property="og:title" content={post.title.rendered} />
        <meta property="og:description" content={cleanExcerpt} />
        <meta property="og:image" content={featuredImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={`https://housedesigns.co.ke/blog/${post.slug}`} />
        <meta name="twitter:title" content={post.title.rendered} />
        <meta name="twitter:description" content={cleanExcerpt} />
        <meta name="twitter:image" content={featuredImage} />
      </Head>

      <div className={styles.post}>
        <div className={styles.featuredImg}>
          {post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0].source_url && (
            <Image src={post._embedded['wp:featuredmedia'][0].source_url} alt='featured-img' layout='fixed' width={700} height={475} />
          )}
        </div>
        <div className={styles.content}>
          <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          <p>{new Date(post.date).toLocaleDateString()}</p>

          {/* Social sharing buttons */}
          <div className={styles.socialSharing}>
            <div className={styles.shareTitle}>
              <ShareIcon className={styles.shareIcon} /> 
              <h3>Share:</h3>
            </div>
            <div className={styles.shareButtons}>              <a 
                href={`whatsapp://send?text=${encodeURIComponent(`${post.title.rendered}: https://housedesigns.co.ke/blog/${post.slug}/`)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.whatsappShare}
                aria-label="Share on WhatsApp"
              >
                <WhatsAppIcon />
              </a>              <a 
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://housedesigns.co.ke/blog/${post.slug}/`)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.facebookShare}
                aria-label="Share on Facebook"
              >
                <FacebookIcon />
              </a>              <a 
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`${post.title.rendered}`)}&url=${encodeURIComponent(`https://housedesigns.co.ke/blog/${post.slug}/`)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.twitterShare}
                aria-label="Share on Twitter"
              >
                <XIcon />
              </a>              <a 
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`https://housedesigns.co.ke/blog/${post.slug}/`)}`} 
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
            <Link href={`/blog/${previousPost.slug}`}>
              <h2>● Previous Post</h2>
            </Link>
          )}
        </div>
        <div className={styles.next}>
          {nextPost && (
            <Link href={`/blog/${nextPost.slug}`}>
              <h2>Next Post ●</h2>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}