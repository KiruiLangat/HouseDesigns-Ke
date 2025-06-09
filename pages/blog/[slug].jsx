import React, { useState, useEffect } from 'react';
import { generatePostMetadata } from '../../lib/wordpress'
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '../../assets/styles/BlogPost.module.css';
import LoadingIndicator from '../../components/LoadingIndicator';
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

// Function to fetch a post by slug
async function getPostBySlug(slug) {
  try {
    // Only request specific fields we need to render the post
    // This significantly reduces the payload size
    const essentialFields = 'id,slug,title,date,modified,content.rendered,excerpt.rendered,_links';
    
    // Fetch only the current post with _embed to get featured media
    const response = await fetch(`https://housedesigns.co.ke/CMS/wp-json/wp/v2/posts?_embed=author,wp:featuredmedia&_fields=${essentialFields}&slug=${slug}`);
    const posts = await response.json();
    
    if (!posts.length) {
      return null;
    }
    
    // Fetch minimal data for navigation (previous/next posts)
    // Only request the fields we actually need to reduce payload size
    const minimalFields = 'id,slug,title';
    
    // Get posts with IDs adjacent to current post for pagination
    // Order by date descending (newer posts first)
    const allPostsResponse = await fetch(`https://housedesigns.co.ke/CMS/wp-json/wp/v2/posts?_fields=${minimalFields}&orderby=date&order=desc&per_page=100`);
    const allPosts = await allPostsResponse.json();
    
    const currentIndex = allPosts.findIndex(post => post.slug === slug);
    
    let previousPost = null;
    let nextPost = null;
    
    // Set previous post if not the first (newer post)
    if (currentIndex > 0) {
      previousPost = allPosts[currentIndex - 1];
    }
    
    // Set next post if not the last (older post)
    if (currentIndex >= 0 && currentIndex < allPosts.length - 1) {
      nextPost = allPosts[currentIndex + 1];
    }
    
    return {
      post: posts[0],
      previousPost,
      nextPost
    };
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

// Function to get all post slugs for static paths
async function getAllPostSlugs() {
  try {
    const response = await fetch('https://housedesigns.co.ke/CMS/wp-json/wp/v2/posts?_fields=slug');
    const posts = await response.json();
    return posts.map(post => ({ params: { slug: post.slug } }));
  } catch (error) {
    console.error('Error fetching post slugs:', error);
    return [];
  }
}

export default function BlogPost({ postData }) {
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);
  
  // Add router event handlers to track navigation state
  useEffect(() => {
    const handleStart = (url) => {
      // Only show loading when navigating to another blog post
      if (url.startsWith('/blog/')) {
        setIsNavigating(true);
      }
    };
    
    const handleComplete = () => {
      setIsNavigating(false);
    };
    
    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
    
    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);
    // Show loading state during navigation between posts or when fallback is true
  if (router.isFallback || isNavigating) {
    return <LoadingIndicator message="Retrieving post..." />;
  }
    // Handle case where post wasn't found
  if (!postData || !postData.post) {
    return (
      <div className={styles.loading}>
        <p>Post not found</p>
        <Link href="/blog" legacyBehavior>
          <a className={styles.backLink}>Back to Blog</a>
        </Link>
      </div>
    );
  }
    const { post, previousPost, nextPost } = postData;
  
  // Clean the excerpt text by removing HTML tags
  const cleanExcerpt = truncateText(post.excerpt.rendered, 160);
  
  // Get the featured image with fallback
  const featuredImage = getSocialImage(post);
  // Get clean post title
  const postTitle = cleanHtmlTags(post.title.rendered);

  // Generate metadata for this specific post
  const postMetadata = generatePostMetadata(post);

  // Create a simpler share text with just the title (no excerpt)
  const shareText = encodeURIComponent(`${postTitle}`);
  const shareUrl = encodeURIComponent(`https://housedesigns.co.ke/blog/${post.slug}`);
  // Pre-generate the post date to avoid client-side calculations
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div style={style} className={styles.postContainer}>          
      <Head>
        <title>{`${postTitle} | HouseDesigns`}</title>
        <meta name="description" content={cleanExcerpt} />
        
        {/* Open Graph - minimal required tags */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={postMetadata.canonicalUrl} />
        <meta property="og:title" content={postTitle} />
        <meta property="og:description" content={cleanExcerpt} />
        <meta property="og:image" content={featuredImage} />
        <meta property="article:published_time" content={post.date} />
        {post.modified && (
          <meta property="article:modified_time" content={post.modified} />
        )}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@housedesigns" />
        <meta name="twitter:creator" content={postMetadata.author} />
        <meta name="twitter:title" content={postTitle} />
        <meta name="twitter:description" content={cleanExcerpt} />
        <meta name="twitter:image" content={featuredImage} />        {/* Canonical */}
        <link rel="canonical" href={postMetadata.canonicalUrl} />
      </Head>

      
      {/* Add structured data */}
      <BlogJsonLd 
        post={post} 
        featuredImage={featuredImage} 
        url={`https://housedesigns.co.ke/blog/${post.slug}`} 
      />
        <div className={styles.post}>        <div className={styles.featuredImg}>
          {post._embedded?.['wp:featuredmedia']?.[0]?.source_url ? (
            <Image 
              src={ensureAbsoluteUrl(post._embedded['wp:featuredmedia'][0].source_url)}
              alt={postTitle}
              style={{ width: '100%', height: 'auto' }}
              width={700} 
              height={475}
              priority={true}
              loading="eager"
              quality={75} // Further reduce image quality for performance
              placeholder="blur" 
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            />
          ) : (
            <div className={styles.noImage}>Featured image not available</div>
          )}
        </div>
        <div className={styles.content}>            <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          <p className={styles.postDate}>
            {formattedDate}
          </p>

          {/* Social sharing buttons */}
          <div className={styles.socialSharing}>
            <div className={styles.shareTitle}>
              <ShareIcon className={styles.shareIcon} /> 
              <h3>Share:</h3>
            </div>            
            <div className={styles.shareButtons}>
              <a
                href={`https://api.whatsapp.com/send?text=${shareText}%0A%0A${shareUrl}`}
                className={styles.whatsappShare}
              >
                <WhatsAppIcon />
              </a>
              
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                className={styles.facebookShare}
              >
                <FacebookIcon />
              </a>

              <a
                href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
                className={styles.twitterShare}
              >
                <XIcon />
              </a>

              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                className={styles.linkedinShare}
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>

          <div className={styles.postContent} dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>
      </div>      <div className={styles.blogNavigation}>
        <div className={styles.previous}>
          {previousPost ? (
            <Link href={`/blog/${previousPost.slug}`} legacyBehavior>
              <a 
                className={`${styles.navigationLink} ${isNavigating ? styles.navigating : ''}`}
                title={previousPost.title?.rendered || previousPost.title || "Previous Post"}
              >
                <span>● Previous Post</span>
              </a>
            </Link>
          ) : (
            <span className={styles.disabledLink}>● Previous Post</span>
          )}
        </div>
        <div className={styles.next}>
          {nextPost ? (
            <Link href={`/blog/${nextPost.slug}`} legacyBehavior>
              <a 
                className={`${styles.navigationLink} ${isNavigating ? styles.navigating : ''}`}
                title={nextPost.title?.rendered || nextPost.title || "Next Post"}
              >
                <span>Next Post ●</span>
              </a>
            </Link>
          ) : (
            <span className={styles.disabledLink}>Next Post ●</span>
          )}
        </div>
      </div>
    </div>
  );
}

// Generate static paths at build time
export async function getStaticPaths() {
  try {
    // Only pre-render the 10 most recent posts to reduce build time and page size
    // This ensures only the most viewed/recent content is pre-rendered at build time
    // Other posts will be generated on-demand with ISR (Incremental Static Regeneration)
    const response = await fetch('https://housedesigns.co.ke/CMS/wp-json/wp/v2/posts?_fields=slug&per_page=10');
    const posts = await response.json();
    const paths = posts.map(post => ({ params: { slug: post.slug } }));
    
    return {
      paths,
      // 'blocking' provides a better UX than 'true' as it waits for the page 
      // to be generated on first request instead of showing a loading state
      fallback: 'blocking',
    };
  } catch (error) {
    console.error('Error fetching post slugs:', error);
    return {
      paths: [],
      fallback: 'blocking',
    };
  }
}

// Fetch post data at build time
export async function getStaticProps({ params }) {
  const postData = await getPostBySlug(params.slug);
  
  // If post not found, return 404
  if (!postData) {
    return {
      notFound: true
    };
  }
  
  // Aggressively clean up post data to reduce page size - critical to address the warning
  if (postData.post) {
    // Create a cleaned version of the post with only what we need
    const { 
      id, slug, title, date, modified, content, excerpt, _embedded
    } = postData.post;
    
    // Create a minimal post object with only essential data
    const minimalPost = {
      id,
      slug,
      title,
      date,
      modified,
      content: {
        rendered: content.rendered
      },
      excerpt: {
        rendered: excerpt.rendered
      }
    };
    
    // Only keep minimal embedded data
    if (_embedded) {
      minimalPost._embedded = {};
      
      // Keep only essential featured media data
      if (_embedded['wp:featuredmedia']?.[0]) {
        const media = _embedded['wp:featuredmedia'][0];
        minimalPost._embedded['wp:featuredmedia'] = [{
          source_url: media.source_url,
          alt_text: media.alt_text || '',
          media_details: {
            sizes: media.media_details?.sizes ? {
              large: media.media_details.sizes.large,
              medium_large: media.media_details.sizes.medium_large,
              medium: media.media_details.sizes.medium
            } : undefined
          }
        }];
      }
      
      // Keep only essential author data
      if (_embedded.author?.[0]) {
        minimalPost._embedded.author = [{
          name: _embedded.author[0].name,
          link: _embedded.author[0].link
        }];
      }
    }
    
    // Replace with minimal version
    postData.post = minimalPost;
  }
    return {
    props: { 
      postData 
    },
    // Revalidate the page every 6 hours - blog content doesn't change frequently
    // This reduces server load while keeping content relatively fresh
    revalidate: 21600
  };
}