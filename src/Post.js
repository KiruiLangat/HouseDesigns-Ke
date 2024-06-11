import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '@fontsource/poppins'
import Header from './Header'
import Footer from './Footer'

import './Post.css';

const style = {
    fontFamily: 'Poppins',
};

export default function Post() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://housedesigns.co.ke/blog/wp-json/wp/v2/posts/${id}?_embed`)
      .then(response => response.json())
      .then(data => {
        setPost(data);
      });
  }, [id]);

  if (!post) {
    return <div className='loading'>Loading<span>...</span></div>;
  }

  return (
    <div style={style} className='post-container'>
        <Header />  
        <div className='post'>
            <div className='featured-img'>
                {post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0].source_url && (
                    <img src={post._embedded['wp:featuredmedia'][0].source_url} alt='featured-img' />
                )}
            </div>
            <div className='content'>
                <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                <p>{new Date(post.date).toLocaleDateString()}</p>
                <div className='post-content' dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
            </div>
        </div>
        
        <Footer />
    </div>
  );
}