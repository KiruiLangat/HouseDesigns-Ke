import React , {useState} from 'react';

//import { Link } from 'react-router-dom';
import './landingPage.css';
import '@fontsource/poppins'
import LandingCarousel from './landingPageCarousel';
//import Landing from '../images/CM_1.jpg'


const style= {
    fontFamily: 'Poppins',
}

export default function LandingPage(){
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionSelect = (option) => {
        setSelectedOption(option)
    }

    const getHighlightStyle = () => {
        switch (selectedOption) {
            case 'Option 1':
                return {color: '#33fffc'}
            case 'Option 2':
                return {color: '#33FF57'}
            case 'Option 3':
                return {color: '#3357FF'}
            case 'Option 4':
                return {color: '#ED7D31'}
            default:
                return{};    
        }
    }
    

    return(
        <div  className='shop-home' style={style}>
            <div className='landing-page'>
                <div className='landing-content'>
                    <h1 className='landing-text'>
                        Turning Your Vision into Reality <br/> through
                        <span className='highlight' style={getHighlightStyle()}> A Seamless And <br/> Collaborative </span> <br/>
                        Approach
                    </h1>
                    <h2 className='landing-subtext'> 
                         Experience the Journey from Concept to Completion of<br/>
                    House Designs and House Plans with Expert Workflow, <br/>
                    <span className='highlight-subtext' style={getHighlightStyle()}> Transforming Your Vision Step by Step </span> and Crafting <br/> and Your Amazing Dream Home. </h2>
                </div>
            
                <div className='landing-options'>
                    <LandingCarousel  onSelect={handleOptionSelect} />
                </div>
            </div>

        </div>
    )
}