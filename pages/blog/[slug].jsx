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
    // Problem posts that need special handling to reduce payload size
    const problemSlugs = [
      'invisible-grills-a-modern-solution-for-safety-and-style-in-kenya',
      'microcement-in-kenya-understanding-its-uses-types-application-methods-and-advantages'
    ];
    
    // Use even more restricted fields for known problematic posts
    const isProblematicPost = problemSlugs.includes(slug);
    
    // Only request specific fields we need to render the post
    // For problematic posts, exclude content to reduce payload size significantly
    const essentialFields = isProblematicPost 
      ? 'id,slug,title,date,modified,excerpt.rendered' 
      : 'id,slug,title,date,modified,content.rendered,excerpt.rendered';
    
    // Fetch post data with limited fields and embedded media
    const response = await fetch(
      `https://housedesigns.co.ke/CMS/wp-json/wp/v2/posts?_embed=author,wp:featuredmedia&_fields=${essentialFields}&slug=${slug}`
    );
    
    if (!response.ok) {
      console.error(`API error: ${response.status} ${response.statusText}`);
      return null;
    }
    
    const posts = await response.json();
    
    if (!posts.length) {
      return null;
    }
    
    // For problematic posts, fetch content separately to handle it differently
    if (isProblematicPost) {
      try {
        const contentResponse = await fetch(
          `https://housedesigns.co.ke/CMS/wp-json/wp/v2/posts?_fields=content.rendered&slug=${slug}`
        );
        
        if (contentResponse.ok) {
          const contentData = await contentResponse.json();
          if (contentData.length > 0) {
            // Truncate content if it's very large to prevent build errors
            const content = contentData[0].content.rendered;
            const maxContentLength = 100000; // Cap content length
            
            posts[0].content = {
              rendered: content.length > maxContentLength 
                ? content.substring(0, maxContentLength) + '... [Content truncated for performance]' 
                : content
            };
          }
        }
      } catch (contentError) {
        console.error('Error fetching content separately:', contentError);
        // Provide fallback content if fetch fails
        posts[0].content = {
          rendered: '<p>Content temporarily unavailable. Please check back later.</p>'
        };
      }
    }
    
    // Fetch minimal data for navigation (previous/next posts)
    // Only request the fields we actually need to reduce payload size
    const minimalFields = 'id,slug,title';
      // Get posts with IDs adjacent to current post for pagination
    // Only fetch a smaller number of posts (30 is usually enough)
    // This reduces payload size significantly for sites with many posts
    const allPostsResponse = await fetch(`https://housedesigns.co.ke/CMS/wp-json/wp/v2/posts?_fields=${minimalFields}&orderby=date&order=desc&per_page=30`);
    
    if (!allPostsResponse.ok) {
      console.error(`Navigation posts API error: ${allPostsResponse.status}`);
      return { post: posts[0], previousPost: null, nextPost: null };
    }
    
    const allPosts = await allPostsResponse.json();
    
    const currentIndex = allPosts.findIndex(post => post.slug === slug);
    
    let previousPost = null;
    let nextPost = null;
    
    // Set previous post if not the first (newer post)
    if (currentIndex > 0) {
      previousPost = {
        slug: allPosts[currentIndex - 1].slug,
        title: allPosts[currentIndex - 1].title
      };
    }
    
    // Set next post if not the last (older post)
    if (currentIndex >= 0 && currentIndex < allPosts.length - 1) {
      nextPost = {
        slug: allPosts[currentIndex + 1].slug,
        title: allPosts[currentIndex + 1].title
      };
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

          {/* Post content with handling for large posts */}
          {post.content && (
            <div className={styles.postContent} dangerouslySetInnerHTML={{ 
              __html: post.content.rendered || '<p>Content temporarily unavailable.</p>' 
            }} />
          )}
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
    // Define problematic slugs that should be excluded from pre-rendering
    // to avoid build errors - these will be generated on-demand instead
    const problemSlugs = [
      'invisible-grills-a-modern-solution-for-safety-and-style-in-kenya',
      'microcement-in-kenya-understanding-its-uses-types-application-methods-and-advantages'
    ];
    
    // Only pre-render a small number of recent posts to reduce build time and page size
    const response = await fetch('https://housedesigns.co.ke/CMS/wp-json/wp/v2/posts?_fields=slug&per_page=8');
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }
    
    const posts = await response.json();
    
    // Filter out problematic slugs from pre-rendering
    const safePosts = posts.filter(post => !problemSlugs.includes(post.slug));
    
    const paths = safePosts.map(post => ({ params: { slug: post.slug } }));
    
    return {
      paths,
      // 'blocking' provides a better UX than 'true' as it waits for the page 
      // to be generated on first request instead of showing a loading state
      fallback: 'blocking',
    };
  } catch (error) {
    console.error('Error in getStaticPaths:', error);
    return {
      // Force build to succeed by providing at least one valid path
      paths: [], 
      fallback: 'blocking',
    };
  }
}

// Fetch post data at build time
export async function getStaticProps({ params }) {
  try {
    // Problem posts that need special handling
    const problemSlugs = [
      'invisible-grills-a-modern-solution-for-safety-and-style-in-kenya',
      'microcement-in-kenya-understanding-its-uses-types-application-methods-and-advantages'
    ];
    
    const isProblematicPost = problemSlugs.includes(params.slug);
    
    // Fetch post data with appropriate optimizations
    const postData = await getPostBySlug(params.slug);
    
    // If post not found, return 404
    if (!postData) {
      return { notFound: true };
    }
    
    // Aggressively clean up post data to reduce page size - critical to address the warning
    if (postData.post) {
      // Extract only the data we need
      const { 
        id, slug, title, date, modified, content, excerpt, _embedded
      } = postData.post;
      
      // Create a minimal post object with only essential data
      const minimalPost = {
        id,
        slug,
        title,
        date,
        modified
      };
      
      // For problematic posts, further optimize content
      if (isProblematicPost) {
        // Keep excerpt, but handle content differently
        minimalPost.excerpt = {
          rendered: excerpt?.rendered || ''
        };
        
        // Truncate content if it's too large
        if (content?.rendered) {
          const contentLength = content.rendered.length;
          const maxLength = 50000; // Cap content length for problematic posts
          
          minimalPost.content = {
            rendered: contentLength > maxLength 
              ? content.rendered.substring(0, maxLength) + '... <p><em>[Content truncated for performance. <a href="https://housedesigns.co.ke/CMS/?p=' + id + '">View full article on our blog</a>]</em></p>'
              : content.rendered
          };
        } else {
          minimalPost.content = { rendered: '<p>Content temporarily unavailable.</p>' };
        }
      } else {
        // Normal posts get standard treatment
        minimalPost.content = { rendered: content?.rendered || '' };
        minimalPost.excerpt = { rendered: excerpt?.rendered || '' };
      }
      
      // Only keep minimal embedded data
      if (_embedded) {
        minimalPost._embedded = {};
        
        // Keep only essential featured media data - just the URL for problematic posts
        if (_embedded['wp:featuredmedia']?.[0]) {
          const media = _embedded['wp:featuredmedia'][0];
          
          if (isProblematicPost) {
            // Ultra minimal for problematic posts
            minimalPost._embedded['wp:featuredmedia'] = [{
              source_url: media.source_url,
              alt_text: media.alt_text || ''
            }];
          } else {
            // Normal minimal for regular posts
            minimalPost._embedded['wp:featuredmedia'] = [{
              source_url: media.source_url,
              alt_text: media.alt_text || '',
              media_details: {
                sizes: media.media_details?.sizes ? {
                  large: media.media_details.sizes.large,
                  medium: media.media_details.sizes.medium
                } : undefined
              }
            }];
          }
        }
        
        // Keep only essential author data
        if (_embedded.author?.[0]) {
          minimalPost._embedded.author = [{
            name: _embedded.author[0].name
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
      // Revalidate more frequently for problematic posts in case we need to update them
      revalidate: isProblematicPost ? 3600 : 21600
    };
  } catch (error) {
    console.error(`Error in getStaticProps for ${params.slug}:`, error);
    
    // Return a minimal working version for build to succeed
    return {
      props: {
        postData: {
          post: {
            id: 0,
            slug: params.slug,
            title: { rendered: "Content Temporarily Unavailable" },
            date: new Date().toISOString(),
            content: { rendered: "<p>We're experiencing technical difficulties loading this content.</p>" },
            excerpt: { rendered: "Content temporarily unavailable." }
          },
          previousPost: null,
          nextPost: null
        }
      },
      revalidate: 1800 // Try again in 30 minutes
    };
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