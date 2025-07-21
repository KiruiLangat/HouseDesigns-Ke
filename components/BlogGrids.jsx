import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from '../assets/styles/BlogGrids.module.css';
import '@fontsource/poppins'
import {NavigateNext, NavigateBefore } from '@mui/icons-material';

const style = {
    fontFamily: 'Poppins',
};

export default function BlogGrids() {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [showLeft, setShowLeft] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`https://housedesigns.co.ke/CMS/wp-json/wp/v2/posts?_embed&per_page=8&page=${page}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            // Get total pages from headers
            setHasMore(Number(response.headers.get('X-WP-TotalPages')) > page);
            return response.json()
        })
        .then(data => {
            setPosts(data);
            setLoading(false);
        })
        .catch(error => {
            console.error('Error:', error)
            setLoading(false);
        })
    }, [page]);

    // Generate placeholder skeleton items
    const renderPlaceholders = () => {
        return Array(8).fill().map((_, index) => (
            <div key={`placeholder-${index}`} className={`${styles.box1} ${styles.placeholder}`}>
                <div className={`${styles.imgBox} ${styles.placeholderImg}`}></div>
                <div className={`${styles.placeholderTitle}`}></div>
                <div className={`${styles.placeholderDate}`}></div>
            </div>
        ));
    };

    // Arrow click handlers
    const handleRight = () => {
        setPage(prev => prev + 1);
        setShowLeft(true);
    };
    const handleLeft = () => {
        if (page > 1) {
            setPage(prev => prev - 1);
            if (page - 1 === 1) setShowLeft(false);
        }
    };

    // Determine arrow container style
    let arrowContainerStyle = {};
    if (showLeft && hasMore) {
        arrowContainerStyle.justifyContent = 'space-between';
    } else if (showLeft) {
        arrowContainerStyle.justifyContent = 'flex-start';
    } else if (hasMore) {
        arrowContainerStyle.justifyContent = 'flex-end';
    }

    return (
        <div style={style} className={styles.gridsWrapper}>
            <div className={styles.grids}>
                {loading ? renderPlaceholders() : (
                    posts.map(post => (
                        <Link href={`/blog/${post.slug}`} key={post.slug} className={styles.box1}>
                            <div className={styles.imgBox}>
                                {post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0].source_url && (
                                    <Image src={post._embedded['wp:featuredmedia'][0].source_url} alt='featured-img' layout='fixed' width={500} height={300} />
                                )}
                            </div>
                            <h2 className={styles.postTitle} dangerouslySetInnerHTML={{__html: post.title.rendered }}/>
                            <p>{new Date(post.date).toLocaleDateString()}</p>
                        </Link>
                    ))
                )}
            </div>
            <div className={styles.arrowContainer} style={arrowContainerStyle}>
                {showLeft && (
                    <button onClick={handleLeft} className={styles.arrowLeft}>
                        <NavigateBefore />
                    </button>
                )}
                {hasMore && (
                    <button onClick={handleRight} className={styles.arrowRight}>
                        <NavigateNext />
                    </button>
                )}
            </div>
        </div>
    )
}
