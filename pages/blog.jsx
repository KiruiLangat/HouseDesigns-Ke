import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../assets/styles/Blog.module.css';
import '@fontsource/poppins';
import SearchBar from '../components/BlogSearchBar';
import BlogGrids from '../components/BlogGrids';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';

const style = {
    fontFamily: 'Poppins',
};

export default function Blog() {
  const [blogPost, setBlogPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Set initial window width
    setWindowWidth(window.innerWidth);
    
    // Handle window resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    fetch('https://housedesigns.co.ke/CMS/wp-json/wp/v2/posts?&_embed')
      .then(response => {
        console.log(response);
        if (!response.ok) {
          throw new Error('Reload Page');
        }
        return response.json();
      })
      .then(data => {
        console.log('Successfully connected to WordPress backend:');
        setBlogPost(data);
      })
      .catch(error => {
        console.error('Error connecting to WordPress backend:', error);
        setError(error.toString());
      })
      .finally(() => {
        setLoading(false);
      });
  }, []); // Empty dependency array to run only once

  if (loading) {
    return (
      <div className={styles.loading}>
        <HourglassBottomIcon className={styles.loadingIcon} />
        <p>Retrieving posts...</p>
      </div>
    );
  }
  if (error) {
    return <div className='error'>{error}</div>;
  }

  if (blogPost && blogPost.length > 0) {
    const { slug, _embedded, title, excerpt, date } = blogPost[0];
    let featuredImage;
    if (_embedded && _embedded['wp:featuredmedia'] && _embedded['wp:featuredmedia'].length > 0) {
      featuredImage = _embedded['wp:featuredmedia'][0].source_url;
    } else {
      console.log('This post does not have a featured image');
      featuredImage = 'https://housedesigns.co.ke/blog/wp-content/uploads/2024/04/masterplanning.png';
    }

    function truncateText(text, length, viewportWidth) {
      if (!text || !length) return text;
      // Use the state-tracked window width instead of direct window access
      if (windowWidth <= viewportWidth && text.length > length) {
        return text.substring(0, length) + '...';
      } else {
        // For larger screens, use a more generous character limit
        return text.length > length * 2 ? text.substring(0, length * 2) + '...' : text;
      }
    }

    return (
      <div className={styles.blogContainer} style={style}>
        <Head>
          <title>{title.rendered}</title>
          <meta name='title' content={title.rendered} />
          <meta name='description' content={excerpt.rendered.substring(0, 160)} />
          <meta property='og:title' content={title.rendered} />
          <meta property='og:description' content={excerpt.rendered.substring(0, 160)} />
          <meta property='og:image' content={featuredImage} />
          <meta property='og:image:width' content='1260' />
          <meta property='og:image:height' content='600' />
          <meta property='og:url' content={`https://housedesigns.co.ke/blog/${slug}`} />
          <meta name='twitter:card' content='summary' />
          <meta name='twitter:title' content={title.rendered} />
          <meta name='twitter:description' content={excerpt.rendered.substring(0, 160)} />
          <meta name='twitter:image' content={featuredImage} />
          <meta name='twitter:image:width' content='1024' />
          <meta name='twitter:image:height' content='512' />
          <meta name='twitter:url' content={`https://housedesigns.co.ke/blog/${slug}`} />
        </Head>

        <Link href={`/blog/${slug}`} className={styles.blogIntro} legacyBehavior={false}>
          <div className={styles.testImg}>
            <Image src={featuredImage} alt='featured-img' width={1260} height={600} />
          </div>
          <div className={styles.overlayInfo}>
            <h2 dangerouslySetInnerHTML={{ __html: title ? title.rendered : '' }}></h2>
            <p className={styles.excerpt} dangerouslySetInnerHTML={{ __html: excerpt ? truncateText(excerpt.rendered, 100, 768) : '' }}></p>
            <p className={styles.date}>{date ? new Date(date).toLocaleDateString() : ''}</p>
          </div>
        </Link>
        <SearchBar />
        <BlogGrids />
      </div>
    );
  } else {
    console.log('blogPost is not defined yet');
    return null;
  }
}

