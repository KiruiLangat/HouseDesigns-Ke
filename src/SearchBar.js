import React, { useState } from 'react';
import SearchIcon from './images/SearchIcon.svg';
import './SearchBar.css';
import '@fontsource/poppins';



function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(`You searched for: ${searchTerm}`);
  };

  const handleCategoryChange = event => {
    setCategory(event.target.value);
  }

  return (
    <div className="search-bar" >
        <input
            type="text"
            placeholder=" Search for related Architecture Topics, News & Articles..."
            value={searchTerm}
            onChange={handleChange}
        />

        <select value={category} onChange={handleCategoryChange}>
            <option value="recent">Latest News</option>
            <option value="popular">Popular</option>
            <option value="architecture">Architecture</option>
            <option value="construction">Construction</option>
            <option value="interior Design">Interior Design</option>
            <option value="masterplanning">Master Planning</option>
        </select>

        <button type='submit' className="search-icon" onClick={handleSubmit} >
        <img src= {SearchIcon} alt= 'Search-Icon' />
        </button>
    </div>
  );
}

export default SearchBar;