import React from 'react'
import arrowButton from './images/arrow-button.svg'
import { Link } from 'react-router-dom'

import './Articles.css'

const style = {
    fontFamily: 'Poppins',
};

export default function Articles() {
    const [post, setPost] = React.useState([])

    React.useEffect(() => {
        fetch('https://housedesigns.co.ke/blog/wp-json/wp/v2/posts?_embed&per_page=3')
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
        return <div className='loading'>Loading<span>...</span></div>
    }

  return (
    <div className='articles-container' style={style}>
        <h1>Articles & News</h1>
        <h2 className='articlesDesc'>Explore our blog where we share engaging articles and breaking news <br/> in the world of architecture and design</h2>
        <div className='articles'>
            {post.map(post => (
                <Link to={`/posts/${post.id}`} key={post.id}>
                    <div className='article-box1'>
                        <div className='article-img'>
                         {post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0].source_url && (
                            <img src= {post._embedded['wp:featuredmedia'][0].source_url} alt='featured-img'  />
                        )}
                        </div>
                        <h2 className='headline'dangerouslySetInnerHTML={{__html: post.title.rendered}} />
                        <img src= {arrowButton} alt='arrow-button' className='arrow-button'/>
                        <p>{new Date(post.date).toLocaleDateString()}</p>  
                    </div>
                </Link>
            ))}
        </div>
        <div className='read-more'>
            <Link to = '/articles'><h2 className='read-more-text'>Read More</h2></Link>
            
        </div>
    </div>
  )
}
