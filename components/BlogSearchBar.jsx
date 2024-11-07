import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SearchIcon from '../assets/images/SearchIcon.svg';
import styles from '../assets/styles/BlogSearchBar.module.css';
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
      setCategory('');
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
          const categoryId = categories[0].id;
          setCategory(categories[0].slug);

          fetch(`https://housedesigns.co.ke/CMS/wp-json/wp/v2/posts?categories=${categoryId}&_embed`)
          .then(response => {
            console.log(response)
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json()
          })
          .then(data => {
            setSearchResults(data)
  
          })
           
        }
      })
      .catch(error => {
        console.error('Error:', error)
      })
    }
  }

  return (
    <div className={styles.searchBar} style={style}>
      
        <div className={styles.searchOptions}>
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
            <option value="project-management">Project Management</option>
        </select>
        </div>

        <div className={styles.searchResults}>
          {searchResults.map (post => (
            <Link href={`/blog/${post.slug}`} key={post.slug}>
              <div className={styles.searchResultsContainer}>
                <div className={styles.featuredImg}>
                  {post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0].source_url &&(
                  <Image src={post._embedded['wp:featuredmedia'][0].source_url} alt='featured-img' width={100} height={100} />
                  )}
                </div> 
                <h2 dangerouslySetInnerHTML={{__html: post.title.rendered}}/>
                <p>{new Date (post.date).toLocaleDateString()}</p>
              </div> 
            </Link>
          ))}
        </div>
        
        <button type='submit' className={styles.searchIcon} onClick={handleSubmit} >
          <Image src={SearchIcon} alt='Search-Icon' />
        </button>
    </div>
  );
}
