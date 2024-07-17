import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from './images/SearchIcon.svg';
import './BlogSearchBar.css';
import '@fontsource/poppins';
 

const style = {
    fontFamily: 'Poppins',
};


export default function SearchBar ({post}) {

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [category, setCategory] = useState('');

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(`You searched for: ${searchTerm}`);

    fetch(`https://housedesigns.co.ke/CMS/wp-json/wp/v2/posts?search=${searchTerm}&_embed`)
      .then(response => {
        console.log(response)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json()
      })
      .then(data => {
        setSearchResults(data);
        console.log('Search results:', data)
        
      })
      .catch(error => {
        console.error('Error:', error)
      })
  };

  const handleCategoryChange = event => {
    const categorySlug = event.target.value;

    if (categorySlug === '/') {
      setSearchResults([]);
    }
    else{
      fetch (`https://housedesigns.co.ke/CMS/wp-json/wp/v2/categories?slug=${categorySlug}`)
      .then(response => {
        console.log(response)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json()
      })
      .then(categories => {
        if (categories.length > 0) {
          const categorySlug = categories[0].slug;
          setCategory(categorySlug);

          fetch(`https://housedesigns.co.ke/CMS/wp-json/wp/v2/posts?categories=${categorySlug}&_embed`)
          .then(response => {
            console.log(response)
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json()
          })
          .then(data => {
            const safeData = data.map(item => ({
              ...item,
              title: item.title ?? "No Title",
            }))
            setSearchResults(safeData);
          });
        }
      })
      .catch(error => {
        console.error('Error:', error)
      })
    }
  }

  return (
    <div className="search-bar"  style={style}>
      
        <div className='search-options'>
        <input
            type="text"
            placeholder=" Search for related Architecture Topics, News & Articles..."
            value={searchTerm}
            onChange={handleChange}
        /> 
        <select value={category} onChange={handleCategoryChange}>
            <option value="/">Filter Search</option>
            <option value="popular">Popular</option>
            <option value="architecture">Architecture</option>
            <option value="construction">Construction</option>
            <option value="interior-design">Interior Design</option>
            <option value="masterplanning">Masterplanning</option>
            <option value="urban-design">Project Management</option>
        </select>
        </div>

        <div className='search-results'>
          {searchResults.map (post => (
            <Link to={`/blog/${post.slug}`}  key={post.slug}>
              <div className='search-results-container'>
                <div className='featured-img'>
                  {post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0].source_url &&(
                  <img src={post._embedded['wp:featuredmedia'][0].source_url} alt='featured-img' />
                  )}
                </div> 
                <h2 dangerouslySetInnerHTML={{__html: post.title.rendered}}/>
                <p>{new Date (post.date).toLocaleDateString()}</p>
              </div> 
            </Link>
          ))}
        </div>
        

       

        <button type='submit' className="search-icon" onClick={handleSubmit} >
          <img src= {SearchIcon} alt= 'Search-Icon' />
        </button>
    </div>
  );
}
