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

// Client-side fetch helpers
async function fetchPostBySlug(slug, retries = 3, delay = 1000) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 10000);
      const response = await fetch(`https://housedesigns.co.ke/CMS/wp-json/wp/v2/posts?_embed&slug=${slug}`, { signal: controller.signal });
      clearTimeout(timeout);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const posts = await response.json();
      if (!posts.length) throw new Error('No posts found');
      return posts[0];
    } catch (error) {
      if (attempt < retries) {
        await new Promise(res => setTimeout(res, delay));
      } else {
        return null;
      }
    }
  }
}

async function fetchAllPostsMeta(retries = 3, delay = 1000) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 10000);
      const response = await fetch('https://housedesigns.co.ke/CMS/wp-json/wp/v2/posts?_fields=slug,title&per_page=100', { signal: controller.signal });
      clearTimeout(timeout);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return await response.json();
    } catch (error) {
      if (attempt < retries) {
        await new Promise(res => setTimeout(res, delay));
      } else {
        return [];
      }
    }
  }
}

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = useState(null);
  const [allPosts, setAllPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    Promise.all([
      fetchPostBySlug(slug),
      fetchAllPostsMeta()
    ]).then(([fetchedPost, postsMeta]) => {
      setPost(fetchedPost);
      setAllPosts(postsMeta);
      setLoading(false);
      if (!fetchedPost) {
        router.replace('/404');
      }
    });
  }, [slug, router]);

  if (loading) {
    return <LoadingIndicator message="Retrieving post..." />;
  }
  if (!post) {
    return null;
  }

  // Get featured image or fallback
  const featuredImage = getSocialImage(post);
  const postTitle = cleanHtmlTags(post.title?.rendered || '');
  const cleanExcerpt = truncateText(post.excerpt?.rendered || '', 160);
  const shareText = encodeURIComponent(postTitle);
  const shareUrl = `https://housedesigns.co.ke/blog/${post.slug}`;
  const formattedDate = post.date ? new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : '';

  // Navigation logic
  const currentIndex = allPosts.findIndex(p => p.slug === slug);
  const previousPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex >= 0 && currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

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

// ...existing code...