import React, { useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '../../assets/styles/BlogPost.module.css';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';

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
  // const [posts, setPosts] = useState([]);

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


  return (
    <HelmetProvider>
      <div style={style} className={styles.postContainer}>
        <Helmet>
          <title>{post.title.rendered}</title>
          <meta name='title' content={post.title.rendered} />
          <meta name='description' content={post.excerpt.rendered.substring(0, 160)} />
          <meta property='og:title' content={post.title.rendered} />
          <meta property='og:description' content={post.excerpt.rendered.substring(0, 160)} />
          <meta property='og:image' content={post._embedded['wp:featuredmedia'] ? post._embedded['wp:featuredmedia'][0].source_url : 'default-image-url'} />
          <meta property='og:url' content={`https://housedesigns.co.ke/blog/${post.slug}`} />
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:title' content={post.title.rendered} />
          <meta name='twitter:description' content={post.excerpt.rendered.substring(0, 160)} />
          <meta name='twitter:image' content={post._embedded['wp:featuredmedia'] ? post._embedded['wp:featuredmedia'][0].source_url : 'default-image-url'} />
          <meta name='twitter:url' content={`https://housedesigns.co.ke/blog/${post.slug}`} />
        </Helmet>
        <div className={styles.post}>
          <div className={styles.featuredImg}>
            {post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0].source_url && (
              <Image src={post._embedded['wp:featuredmedia'][0].source_url} alt='featured-img' layout='fixed' width={700} height={475} />
            )}
          </div>
          <div className={styles.content}>
            <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            <p>{new Date(post.date).toLocaleDateString()}</p>
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
    </HelmetProvider>
  );
}