import React from 'react'
import ArticleImg from './images/projects-img.svg'
import arrowButton from './images/arrow-button.svg'
// import arrow from './images/Arrow.svg'
import { Link } from 'react-router-dom'

import './Articles.css'

export default function Articles() {
  return (
    <div className='articles-container'>
        <h1>Articles & News</h1>
        <h2 className='articlesDesc'>Explore our blog where we share engaging articles and breaking news <br/> in the world of architecture and design</h2>
        <div className='articles'>
            <div className='article-box1'>
                < img src={ArticleImg} alt='article-img' className='article-img' />
                <h2 className='headline'>Headline</h2>
                <img src= {arrowButton} alt='arrow-button' className='arrow-button'/>
                <h3 className='desc'>Short description </h3>
                <h4 className='date'>04 March 2024</h4>
                
            </div>
            <div className='article-box2'>
                < img src={ArticleImg} alt='article-img' className='article-img' />
                <h2 className='headline'>Headline</h2>
                <img src= {arrowButton} alt='arrow-button' className='arrow-button'/>
                <h3 className='desc'>Short description </h3>
                
                <h4 className='date'>04 March 2024</h4>
                
            </div>
            <div className='article-box3'>
                < img src={ArticleImg} alt='article-img' className='article-img' />
                <h2 className='headline'>Headline</h2>
                <img src= {arrowButton} alt='arrow-button' className='arrow-button'/>
                <h3 className='desc'>Short description </h3>
                
                <h4 className='date'>04 March 2024</h4>
                
            </div>    
        </div>
        <div className='read-more'>
            <Link to = '/blog'><h2 className='read-more-text'>Read More</h2></Link>
            {/* <img src= {arrow} alt='arrow' className='arrow-right'/> */}
        </div>
    </div>
  )
}
