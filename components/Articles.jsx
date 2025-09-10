import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../assets/styles/Articles.module.css'

const style = {
    fontFamily: 'Poppins',
};

export default function Articles() {
    const [post, setPost] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    React.useEffect(() => {
        setIsLoading(true);
    fetch('https://cms.housedesigns.co.ke/wp-json/wp/v2/posts?_embed&per_page=3')
        .then(response => {
            // console.log(response)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json()
        })
        .then(data => {
            console.log('Number of posts received:', data.length);
            // Ensure we only use the first 3 posts
            setPost(data.slice(0, 3));
            setIsLoading(false);
        })
        .catch(error => {
            console.error('Error:', error)
            setIsLoading(false);
        })
    }, []);

    if (isLoading) {
        return (
            <div className={styles.articlesContainer} style={style}>
                <h1>Articles & News</h1>
                <h2 className={styles.articlesDesc}>Explore our blog where we share engaging articles and breaking news <br/> in the world of architecture and design </h2>
                <div className={`${styles.articles} ${styles.placeholderContainer}`}>
                    {Array(3).fill().map((_, index) => (
                        <div key={`placeholder-${index}`} className={`${styles.articleBox1} ${styles.placeholder}`}>
                            <div className={`${styles.articleImg} ${styles.placeholderImg}`}></div>
                            <div className={`${styles.placeholderTitle}`}></div>
                            <div className={`${styles.placeholderDate}`}></div>
                        </div>
                    ))}
                </div>
            </div>
        );
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
                            <Image src={post._embedded['wp:featuredmedia'][0].source_url} alt='featured-img' layout='fixed' width={100} height={100} loading='lazy' />
                        )}
                        </div>
                        <h2 className={styles.headline} dangerouslySetInnerHTML={{__html: post.title.rendered}} />
                        {/* <img src= {arrowButton} alt='arrow-button' className={styles.arrowButton}/> */}
                        <p>{new Date(post.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric'
                            })}
                        </p> 
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
