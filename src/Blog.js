import React from 'react'
import './Blog.css';
import Header from './Header';
import Footer from './Footer';
import '@fontsource/poppins'
import masterplan from './carousel2.svg'

import SearchBar from './SearchBar';
import BlogGrids from './BlogGrids';

const style = {
    fontFamily: 'Poppins',
};

export default function Blog() {
  return (
    <div style={style}>
        <Header />
        <div className="blog-intro">
          <img src= {masterplan} alt='test-img' className='test-img' />
          <div className='overlay-info'>
            <h2>New Master Planning Techniques:<br />Recent technologies has opened vast opportunities for digital advancements within the estate...</h2>
            <p>04 March 2024</p>
          </div>
        </div>
        <SearchBar />
        <BlogGrids />
        <Footer />
    </div>
  )
}
