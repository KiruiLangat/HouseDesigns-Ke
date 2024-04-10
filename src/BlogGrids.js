import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './BlogGrids.css';
import '@fontsource/poppins'
import arrow from './images/arrow-button.svg'

const style = {
    fontFamily: 'Poppins',
};

export default function BlogGrids() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://housedesigns.co.ke/blog/wp-json/wp/v2/posts?_embed&per_page=8')
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
    <div style={style} className='grids'>
        {posts.map(post => (
            <Link to={`/posts/${post.id}`} key={post.id} className='box1'>
                <div className='img-box'>
                {post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0].source_url && (
                    <img src= {post._embedded['wp:featuredmedia'][0].source_url} alt='featured-img' className='tester-img' />
                )}
                </div>
                <h2 dangerouslySetInnerHTML={{__html: post.title.rendered }}/>
                <div className='arrow'>
                    <img src= {arrow} alt='arrow'  />
                </div>
                <p>{new Date (post.date).toLocaleDateString()}</p>
            </Link>
        ))}
    </div>
  )
}
