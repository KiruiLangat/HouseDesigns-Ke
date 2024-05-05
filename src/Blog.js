import React from 'react'
import { Link } from 'react-router-dom';
import './Blog.css';
import Header from './Header';
import Footer from './Footer';
import '@fontsource/poppins'

import SearchBar from './SearchBar';
import BlogGrids from './BlogGrids';

const style = {
    fontFamily: 'Poppins',
};

export default function Blog() {
  const [blogPost, setBlogPost] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    fetch('https://housedesigns.co.ke/blog/wp-json/wp/v2/posts?slug=architecture&_embed')
      .then(response => {
        console.log(response)
        if (!response.ok) {
          throw new Error('Reload');
        }
        return response.json()
      })
      .then(data => {
        console.log('Successfully connected to WordPress backend:', data)
        setBlogPost(data)
      })
      .catch(error => {
        console.error('Error connecting to WordPress backend:', error)
        setError(error.toString())
      })
      
      .finally(() => {
        setLoading(false)
      })
  }, []);

  if (loading) {
    return <div className='loading'>Loading<span>...</span></div>;
  }
  if (error) {
    return <div className='error'>Error: {error}</div>;
  }

  if (blogPost && blogPost.length > 0) {
    // console.log(blogPost.rendered);
    const { id, _embedded, title, excerpt , date} = blogPost[0];
    let featuredImage;
    if (_embedded && _embedded['wp:featuredmedia'] && _embedded['wp:featuredmedia'].length > 0) {
      featuredImage = _embedded['wp:featuredmedia'][0].source_url;
      } else {
        console.log('This post does not have a featured image');
        featuredImage = 'https://housedesigns.co.ke/blog/wp-content/uploads/2024/04/masterplanning.png';
      }
    
    return (
      <div style={style}>
            <Header />
            <Link to={`/posts/${id}`} className="blog-intro">
              <div className='test-img'>
                <img src= {featuredImage} alt='featured-img' />
              </div> 
              <div className='overlay-info'>
                <h2 dangerouslySetInnerHTML={{__html: title ? title.rendered : ''}}></h2>
                <p className='excerpt' dangerouslySetInnerHTML={{__html: excerpt ? excerpt.rendered : ''}}></p>
                <p className='date'>{date ? new Date(date).toLocaleDateString() : ''}</p>
              </div>
            </Link>
            <SearchBar />
            <BlogGrids />
            <Footer />
      </div>
    );
} else {
    console.log('blogPost is not defined yet');
    return null
  }}
