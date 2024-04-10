import React, { useState } from 'react';
import SearchIcon from './images/SearchIcon.svg';
import './SearchBar.css';
import '@fontsource/poppins';
 

const style = {
    fontFamily: 'Poppins',
};


function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [category, setCategory] = useState('');

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(`You searched for: ${searchTerm}`);

    fetch(`https://housedesigns.co.ke/blog/wp-json/wp/v2/posts?search=${searchTerm}&_embed`)
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

    fetch (`https://housedesigns.co.ke/blog/wp-json/wp/v2/categories?slug=${categorySlug}`)
    .then(response => {
      console.log(response)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json()
    })
    .then(categories => {
      if (categories.length > 0) {
        const categoryId = categories[0].id;
        setCategory(categorySlug);

        fetch(`https://housedesigns.co.ke/blog/wp-json/wp/v2/posts?categories=${categoryId}&_embed`)
        .then(response => {
          console.log(response)
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json()
        })
        .then(data => {
          setSearchResults(data);
        });
      }
    })
    .catch(error => {
      console.error('Error:', error)
    })
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
            <option value="/">Categories</option>
            <option value="popular">Popular</option>
            <option value="architecture">Architecture</option>
            <option value="construction">Construction</option>
            <option value="interior-design">Interior Design</option>
            <option value="masterplanning">Master Planning</option>
        </select>
        </div>

        <div className='search-results'>
          {searchResults.map (post => (
            <div key={post.id}>
              {post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0].source_url &&(
                <img src={post._embedded['wp:featuredmedia'][0].source_url} alt='featured-img' width='20%' height='20%'/>
              )}
              <h2 dangerouslySetInnerHTML={{__html: post.title.rendered}}/>
              <p dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} />
            </div>
          ))}
        </div>
        

       

        <button type='submit' className="search-icon" onClick={handleSubmit} >
          <img src= {SearchIcon} alt= 'Search-Icon' />
        </button>
    </div>
  );
}

export default SearchBar;