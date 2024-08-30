import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './Blog.css';
import '@fontsource/poppins'
import SearchBar from './BlogSearchBar';
import BlogGrids from './BlogGrids';

const style = {
    fontFamily: 'Poppins',
};

export default function Blog() {
  const [blogPost, setBlogPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://housedesigns.co.ke/CMS/wp-json/wp/v2/posts?&_embed')
      .then(response => {
        console.log(response)
        if (!response.ok) {
          throw new Error('Reload Page');
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
    return <div className='error'>{error}</div>;
  }

  if (blogPost && blogPost.length > 0) {
    const { slug, _embedded, title, excerpt , date} = blogPost[0];
    let featuredImage;
    if (_embedded && _embedded['wp:featuredmedia'] && _embedded['wp:featuredmedia'].length > 0) {
      featuredImage = _embedded['wp:featuredmedia'][0].source_url;
      } else {
        console.log('This post does not have a featured image');
        featuredImage = 'https://housedesigns.co.ke/blog/wp-content/uploads/2024/04/masterplanning.png';
      }
    function truncateText(text, length, viewportWidth) {
      if (window.innerWidth <= viewportWidth && text.length > length) {
          return text.substring(0, length) + '...';
      } else {
          return text;
      }
    }
    
      return (
        <div style={style}>
          <Helmet>
            <title>{title.rendered}</title>
            <meta name='description' content={excerpt.rendered.substring(0, 160)} />
            <meta property='og:title' content={title.rendered} />
            <meta property='og:description' content={excerpt.rendered.substring(0, 160)} />
            <meta property='og:image' content={featuredImage} />
            <meta property='og:image:width' content='300' />
            <meta property='og:image:height' content='300' />
            <meta property='og:url' content={`https://housedesigns.co.ke/blog/${slug}`} />
            <meta name='twitter:card' content='summary' />
            <meta name='twitter:title' content={title.rendered} />
            <meta name='twitter:description' content={excerpt.rendered.substring(0, 160)} />
            <meta name='twitter:image' content={featuredImage} />
            <meta name='twitter:image:width' content='144' />
            <meta name='twitter:image:height' content='144' />
            <meta name='twitter:url' content={`https://housedesigns.co.ke/blog/${slug}`} />
          </Helmet>
          
              <Link to={`/blog/${slug}`} className="blog-intro">
                <div className='test-img'>
                  <img src= {featuredImage} alt='featured-img' />
                </div> 
                <div className='overlay-info'>
                  <h2 dangerouslySetInnerHTML={{__html: title ? title.rendered : ''}}></h2>
                  <p className='excerpt' dangerouslySetInnerHTML={{__html: excerpt ? truncateText(excerpt.rendered, 100, 768) : ''}}></p>
                  <p className='date'>{date ? new Date(date).toLocaleDateString() : ''}</p>
                </div>
              </Link>
              <SearchBar />
              <BlogGrids />
              
        </div>
    );
    
  } else {
    console.log('blogPost is not defined yet');
    return null
  }
}

