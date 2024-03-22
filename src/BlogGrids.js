import React from 'react'
import './BlogGrids.css';
import '@fontsource/poppins'
import tester from './images/carousel1.svg'
import arrow from './images/arrow-button.svg'

const style = {
    fontFamily: 'Poppins',
};

export default function BlogGrids() {
  return (
    <div style={style} className='grids'>
        <div className='box1'>
            <img src= {tester} alt='tester-img' className='tester-img' />
            <h2>How to design a sustainable home</h2>
            <div className='arrow'>
                <img src= {arrow} alt='arrow'  />
            </div>
            <p>04 March 2024</p>
        </div>
        <div className='box1'>
            <img src= {tester} alt='tester-img' className='tester-img' />
            <h2>How to design a sustainable home</h2>
            <div className='arrow'>
                <img src= {arrow} alt='arrow'  />
            </div>
            <p>04 March 2024</p>
        </div>
        <div className='box1'>
            <img src= {tester} alt='tester-img' className='tester-img' />
            <h2>How to design a sustainable home</h2>
            <div className='arrow'>
                <img src= {arrow} alt='arrow'  />
            </div>
            <p>04 March 2024</p>
        </div>
        <div className='box1'>
            <img src= {tester} alt='tester-img' className='tester-img' />
            <h2>How to design a sustainable home</h2>
            <div className='arrow'>
                <img src= {arrow} alt='arrow'  />
            </div>
            <p>04 March 2024</p>
        </div>
        <div className='box1'>
            <img src= {tester} alt='tester-img' className='tester-img' />
            <h2>How to design a sustainable home</h2>
            <div className='arrow'>
                <img src= {arrow} alt='arrow'  />
            </div>
            <p>04 March 2024</p>
        </div>
        <div className='box1'>
            <img src= {tester} alt='tester-img' className='tester-img' />
            <h2>How to design a sustainable home</h2>
            <div className='arrow'>
                <img src= {arrow} alt='arrow'  />
            </div>
            <p>04 March 2024</p>
        </div>
        <div className='box1'>
            <img src= {tester} alt='tester-img' className='tester-img' />
            <h2>How to design a sustainable home</h2>
            <div className='arrow'>
                <img src= {arrow} alt='arrow'  />
            </div>
            <p>04 March 2024</p>
        </div>
        <div className='box1'>
            <img src= {tester} alt='tester-img' className='tester-img' />
            <h2>How to design a sustainable home</h2>
            <div className='arrow'>
                <img src= {arrow} alt='arrow'  />
            </div>
            <p>04 March 2024</p>
        </div>
    </div>
  )
}
