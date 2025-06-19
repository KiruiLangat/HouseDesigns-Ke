import React, { useState, useEffect } from 'react';
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
import BlogJsonLd from '../../components/SEO/BlogJsonLd';
import { ensureAbsoluteUrl, cleanHtmlTags, getSocialImage, truncateText } from '../../services/seoUtils';

const style = { fontFamily: 'Poppins' };

// Fetch a single post by slug with _embed
async function getPostBySlug(slug) {
  try {
    const response = await fetch(`https://housedesigns.co.ke/CMS/wp-json/wp/v2/posts?_embed&slug=${slug}`);
    if (!response.ok) return null;
    const posts = await response.json();
    if (!posts.length) return null;
    return posts[0];
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

// Get all post slugs for static paths
async function getAllPostSlugs() {
  try {
    const response = await fetch('https://housedesigns.co.ke/CMS/wp-json/wp/v2/posts?_fields=slug');
    if (!response.ok) return [];
    const posts = await response.json();
    return posts.map(post => ({ params: { slug: post.slug } }));
  } catch (error) {
    console.error('Error fetching post slugs:', error);
    return [];
  }
}

// Fetch all posts (slugs and titles) for navigation
async function getAllPostsMeta() {
  try {
    const response = await fetch('https://housedesigns.co.ke/CMS/wp-json/wp/v2/posts?_fields=slug,title&per_page=100');
    if (!response.ok) return [];
    return await response.json();
  } catch (error) {
    console.error('Error fetching all posts meta:', error);
    return [];
  }
}

export default function BlogPost({ post, previousPost, nextPost }) {
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    const handleStart = (url) => {
      if (url.startsWith('/blog/')) setIsNavigating(true);
    };
    const handleComplete = () => setIsNavigating(false);
    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  if (router.isFallback || isNavigating) {
    return <LoadingIndicator message="Retrieving post..." />;
  }
  if (!post) {
    return router.push('/404');
  }

  // Get featured image or fallback
  const featuredImage = getSocialImage(post);
  const postTitle = cleanHtmlTags(post.title?.rendered || '');
  const cleanExcerpt = truncateText(post.excerpt?.rendered || '', 160);
  const shareText = encodeURIComponent(postTitle);
  const shareUrl = `https://housedesigns.co.ke/blog/${post.slug}`;
  const formattedDate = post.date ? new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : '';

  return (
    <div style={style} className={styles.postContainer}>
      <Head>
        <title>{`${postTitle} | HouseDesigns`}</title>
        <meta name="description" content={cleanExcerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={shareUrl} />
        <meta property="og:title" content={postTitle} />
        <meta property="og:description" content={cleanExcerpt} />
        <meta property="og:image" content={featuredImage || 'https://housedesigns.co.ke/CM_1.jpg'} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        <meta property="article:published_time" content={post.date} />
        {post.modified && <meta property="article:modified_time" content={post.modified} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={postTitle} />
        <meta name="twitter:description" content={cleanExcerpt} />
        <meta name="twitter:image" content={featuredImage} />
        <link rel="canonical" href={shareUrl} />
      </Head>
      <BlogJsonLd post={post} featuredImage={featuredImage} url={shareUrl} />
      <div className={styles.post}>
        <div className={styles.featuredImg}>
          {featuredImage ? (
            <Image
              src={featuredImage}
              alt={postTitle}
              style={{ width: '100%', height: 'auto' }}
              width={700}
              height={475}
              priority={true}
              loading="eager"
              quality={75}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            />
          ) : (
            <div className={styles.noImage}>Featured image not available</div>
          )}
        </div>
        <div className={styles.content}>
          <h1 dangerouslySetInnerHTML={{ __html: post.title?.rendered || '' }} />
          <p className={styles.postDate}>{formattedDate}</p>
          <div className={styles.socialSharing}>
            <div className={styles.shareTitle}>
              <ShareIcon className={styles.shareIcon} />
              <h3>Share:</h3>
            </div>
            <div className={styles.shareButtons}>
              <a
                href={`https://api.whatsapp.com/send?text=${shareUrl}`}
                className={styles.whatsappShare}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon />
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                className={styles.facebookShare}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
                className={styles.twitterShare}
                target="_blank"
                rel="noopener noreferrer"
              >
                <XIcon />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                className={styles.linkedinShare}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
          <div className={styles.postContent} dangerouslySetInnerHTML={{ __html: post.content?.rendered || '<p>Content temporarily unavailable.</p>' }} />
        </div>
        <div className={styles.blogNavigation}>
              <div className={styles.previous}>
                {previousPost ? (
                  <Link href={`/blog/${previousPost.slug}`} legacyBehavior>
                    <a className={styles.navigationLink} title={previousPost.title?.rendered || previousPost.title || "Previous Post"}>
                      <h2>● Previous</h2>
                    </a>
                  </Link>
                ) : (
                  <h2 className={styles.disabledLink}></h2>
                )}
              </div>
              <div className={styles.next}>
              {nextPost ? (
                <Link href={`/blog/${nextPost.slug}`} legacyBehavior>
                  <a className={styles.navigationLink} title={nextPost.title?.rendered || nextPost.title || "Next Post"}>
                    <h2>Next ●</h2>
                  </a>
                </Link>
              ) : (
                <h2 className={styles.disabledLink}>Next ●</h2>
              )}
            </div>
          </div>
        </div>
      </div>
  );
}

export async function getStaticPaths() {
  const paths = await getAllPostSlugs();
  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);
  if (!post) {
    return { notFound: true };
  }
  // Fetch all posts meta for navigation
  const allPosts = await getAllPostsMeta();
  // Find current post index
  const currentIndex = allPosts.findIndex(p => p.slug === params.slug);
  const previousPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex >= 0 && currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  return {
    props: { post, previousPost, nextPost },
    revalidate: 21600,
  };
}