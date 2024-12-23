import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../assets/styles/Articles.module.css'

const style = {
    fontFamily: 'Poppins',
};

export default function Articles() {
    const [post, setPost] = React.useState([])

    React.useEffect(() => {
        fetch('https://housedesigns.co.ke/CMS/wp-json/wp/v2/posts?_embed&per_page=3')
        .then(response => {
            // console.log(response)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json()
        })
        .then(data => {
            setPost(data);
            // console.log('Posts:', data)
        })
        .catch(error => {
            console.error('Error:', error)
        })
    }, []);

    if (!post) {
        return <div className={styles.loading}>Loading<span>...</span></div>
    }

    return (
    <div className={styles.articlesContainer} style={style}>
        <h1>Articles & News</h1>
        <h2 className={styles.articlesDesc}>Explore our blog where we share engaging articles and breaking news <br/> in the world of architecture and design </h2>
        <div className={styles.articles}>
            {post.map(post => (
                <Link href={`/blog/${post.slug}`} key={post.slug}>
                    <div className={styles.articleBox1}>
                        <div className={styles.articleImg}>
                         {post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0].source_url && (
                            <Image src={post._embedded['wp:featuredmedia'][0].source_url} alt='featured-img' layout='fixed' width={100} height={100} />
                        )}
                        </div>
                        <h2 className={styles.headline} dangerouslySetInnerHTML={{__html: post.title.rendered}} />
                        {/* <img src= {arrowButton} alt='arrow-button' className={styles.arrowButton}/> */}
                        <p>{new Date(post.date).toLocaleDateString()}</p>  
                    </div>
                </Link>
            ))}
        </div>
        <div className={styles.readMore}>
            <Link href='/blog'><h2 className={styles.readMoreText}>Read More</h2></Link>  
        </div>
    </div>
  )
}
