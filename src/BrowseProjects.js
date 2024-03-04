import React from 'react';
import { Link } from 'react-router-dom';
import './BrowseProjects.css';
import Carousel from './Carousel';

export default function BrowseProjects() {
    return (
        <div className='container'>
            <div className='projects-intro'>Browse <br/>our Projects<br/>and Find Your Taste</div>
            <Carousel className='carousel'/>
              <div style={{width: 51, height: 650, left: 0, top: 0, position: 'absolute', borderRadius: 10, border: '10px rgba(237, 125, 49, 0.14) solid'}}></div>
            <div style={{height: 54, left: 498, top: 298, position: 'absolute'}}>
                <div style={{width: 53, height: 53, left: 53, top: 54, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0'}}>
                    <div style={{width: 53, height: 53, left: 0, top: 0, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', background: 'rgba(237, 125, 49, 0.14)', borderRadius: 10}} />
                    <div style={{width: 23, height: 0, left: -14, top: -27, position: 'absolute', transform: 'rotate(180deg)', transformOrigin: '0 0', background: 'rgba(237, 125, 49, 0.14)', border: '3px white solid'}}></div>
                </div>
                <div style={{width: 53, height: 53, left: 756, top: 0, position: 'absolute'}}>
                    <div style={{width: 53, height: 53, left: 0, top: 0, position: 'absolute', background: 'rgba(237, 125, 49, 0.14)', borderRadius: 10}} />
                    <div style={{width: 23, height: 0, left: 14, top: 27, position: 'absolute', border: '3px white solid'}}></div>
                </div>
            </div>
            <div style={{width: 665, height: 68, left: 572, top: 533, position: 'absolute'}}>
                <div style={{width: 665, height: 68, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 6%, rgba(0, 0, 0, 0.46) 53%)', borderRadius: 10}} />
                <div style={{left: 277, top: 30, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Poppins', fontWeight: '300', wordWrap: 'break-word'}}>Maisonette</div>
            </div>
            <div style={{width: 329, left: 51, top: 425, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Poppins', fontWeight: '300', wordWrap: 'break-word'}}>Here are some of our completed projects</div>
        </div>
    )
}