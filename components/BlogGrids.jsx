import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from '../assets/styles/BlogGrids.module.css';
import '@fontsource/poppins'

const style = {
    fontFamily: 'Poppins',
};

export default function BlogGrids() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://housedesigns.co.ke/CMS/wp-json/wp/v2/posts?_embed&per_page=8')
        .then(response => {
            console.log(response)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json()
        })
        .then(data => {
            setPosts(data);
            console.log('Posts:', data)
        })
        .catch(error => {
            console.error('Error:', error)
        })
    }, []);

  return (
    <div style={style} className={styles.grids}>
        {posts.map(post => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className={styles.box1}>
                <div className={styles.imgBox}>
                    {post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0].source_url && (
                        <Image src={post._embedded['wp:featuredmedia'][0].source_url} alt='featured-img' layout='fixed' width={500} height={300} />
                    )}
                </div>
                <h2 className={styles.postTitle} dangerouslySetInnerHTML={{__html: post.title.rendered }}/>
                <p>{new Date(post.date).toLocaleDateString()}</p>
            </Link>
        ))}
    </div>
  )
}
