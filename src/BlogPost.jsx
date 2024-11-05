import React, { useEffect, useState } from 'react';
import {Helmet} from 'react-helmet';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

// import arrow from './images/arrow-button.svg'



import './BlogPost.css';

const style = {
    fontFamily: 'Poppins',
};

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [previousPost, setPreviousPost] = useState(null);
  const [nextPost, setNextPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // const [posts, setPosts] = useState([]);

  useEffect(() => {
    setIsLoading(true) //starts loading
    fetch(`https://housedesigns.co.ke/CMS/wp-json/wp/v2/posts?_embed&slug=${slug}`)
      .then(response => response.json())
      .then(data => {
        setPost(data[0]);
        setIsLoading(false); //Ends loading after setting post
      });
      
      // Fetch all posts to determine previous and next posts
    fetch(`https://housedesigns.co.ke/CMS/wp-json/wp/v2/posts?_embed`)
      .then(response => response.json())
      .then(data => {
        const currentIndex = data.findIndex(post => post.slug === slug);
        
        // Update previous post, check if current post is the first

        if (currentIndex > 0) {
          setPreviousPost(data[currentIndex - 1]);
        } else {
          setNextPost(null);
        }

        // Update next post, check if current post is the last
      if (currentIndex >= 0 && currentIndex < data.length - 1) {
        setNextPost(data[currentIndex + 1]);
      } else {
        setNextPost(null); // Or handle as needed
      }
           
    });
  }, [slug]);
  
  
  //Recommended or Related Articles- Fix fetch and map
//   useEffect(() => {
//     fetch('https://housedesigns.co.ke/CMS/wp-json/wp/v2/posts?_embed&per_page=4')
//     .then(response => {
//         console.log(response)
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return response.json()
//     })
//     .then(data => {
//         setPosts(data);
//         console.log('Posts:', data)
//     })
//     .catch(error => {
//         console.error('Error:', error)
//     })
// }, []);


  if (!post) {
    return <div className='loading'>Loading<span>...</span></div>;
  }
  if (isLoading) {
    return <div className='loading'>Loading<span>...</span> </div>;
  }


  return (
    <div style={style} className='post-container'>
      <Helmet>
          <title>{post.title.rendered}</title>
          <meta name='description' content={post.excerpt.rendered.substring(0, 160)} />
          <meta property='og:title' content={post.title.rendered} />
          <meta property='og:description' content={post.excerpt.rendered.substring(0, 160)} />
          <meta property='og:image' content={post._embedded['wp:featuredmedia'][0].source_url} />
          <meta property='og:image:width' content='1200' />
          <meta property='og:image:height' content='600' />
          <meta property='og:url' content={`https://housedesigns.co.ke/blog/${post.slug}`} />
          <meta name='twitter:card' content='summary' />
          <meta name='twitter:title' content={post.title.rendered} />
          <meta name='twitter:description' content={post.excerpt.rendered.substring(0, 160)} />
          <meta name='twitter:image' content={post._embedded['wp:featuredmedia'][0].source_url} />
          <meta name='twitter:image:width' content='144' />
          <meta name='twitter:image:height' content='144' />
          <meta name='twitter:url' content={`https://housedesigns.co.ke/blog/${post.slug}`} />
      </Helmet>
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
        <div className='blog-navigation'>
          <div className='previous'>
            {previousPost && (
              <Link to={`/blog/${previousPost.slug}`}>
                <h2>● Previous Post</h2>
              </Link>
            )}
          </div>
          <div className='next'>
            {nextPost && (
                <Link to={`/blog/${nextPost.slug}`}>
                    <h2>Next Post ●</h2>
                </Link>
            )}
          </div>
        </div>
        
        {/* Related Articles borrowed Component from BlogGrids. To alter the fetch 
        condition to specific category
         */}
         
        {/* <div className='RelatedArticles'>Related Articles</div>
        <div style={style} className='grids'>
        {posts.map(post => (
            <Link to={`/posts/${post.id}`} key={post.id} className='box1'>
                <div className='img-box'>
                    {post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0].source_url && (
                        <img src= {post._embedded['wp:featuredmedia'][0].source_url} alt='featured-img'  />
                    )}
                </div>
                <h2  className='post-title' dangerouslySetInnerHTML={{__html: post.title.rendered }}/>
                <div className='arrow'>
                    <img src= {arrow} alt='arrow'  />
                </div>
                <p>{new Date (post.date).toLocaleDateString()}</p>
            </Link>
          ))}
        </div> */}
        
        
    </div>
  );
}