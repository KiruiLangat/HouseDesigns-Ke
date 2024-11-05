import React from "react";
import { Helmet } from "react-helmet";
import './Masterplanning.css'
import '@fontsource/poppins'
import Masterplan from './images/masterplanning.png'
import Masterplan1 from './images/Masterplanning2.png'
import Masterplan2 from './images/Masterplanning3.png'
import Masterplan3 from './images/Masterplanning4.png'
import Masterplan4 from './images/Institutions.png'
import Masterplan5 from './images/institution1.png'
import Masterplan6 from './images/institution2.png'
import Masterplan7 from './images/Masterplanning5.png'
import Masterplan8 from './images/Masterplanning6.png'
import Masterplan9 from './images/institution3.png'
import Masterplan10 from './images/Masterplanning7.png'
import Masterplan11 from './images/Masterplanning8.png'
import Masterplan12 from './images/institution4.png'
import Masterplan13 from './images/Masterplanning9.png'
import Masterplan14 from './images/Masterplanning10.png'
import Masterplan15 from './images/Masterplanning11.png'



const style={
    fontFamily:'Poppins'
}

export default function Masterplanning(){
    return(
        <div className="masterplan" style={style}>
            <Helmet>
                <title>Masterplanning Projects</title>
                <meta name='description'content='Enhancing Our Community by Developing Sustainable, Functional, and Aesthetically Pleasing Urban Spaces.' />
                <meta property='og:title' content='Masterplanning'/>
                <meta property='og:description' content='Enhancing Our Community by Developing Sustainable, Functional, and Aesthetically Pleasing Urban Spaces.' />
                <meta property='og:image' content='https://housedesigns.co.ke/masterplanning.png' />
                <meta property='og:image:width' content='1200' />
                <meta property='og:image:height' content='600' />
                <meta property='og:url' content='https://housedesigns.co.ke/masterplanning' />
                <meta name='twitter:card' content='summary' />
                <meta name='twitter:title' content='Masterplanning' />
                <meta name='twitter:description' content='Enhancing Our Community by Developing Sustainable, Functional, and Aesthetically Pleasing Urban Spaces.' />
                <meta name='twitter:image' content='https://housedesigns.co.ke/masterplanning.png' />
                <meta name='twitter:image:width' content='1024' />
                <meta name='twitter:image:height' content='512' />
                <meta name='twitter:url' content='https://housedesigns.co.ke/masterplanning' />
            </Helmet>
            <div className="large-img">
                <img src={Masterplan} alt="institution Masterplan" />
            </div>
            <h1 className="masterplan-title">Masterplanning Services</h1>
            <h2>University of Isiolo</h2>
            <div className="Masonry">
                <img src={Masterplan1} alt="institution Masterplan" />
                <img src={Masterplan2} alt="institution Masterplan" />
                <img src={Masterplan3} alt="institution Masterplan" />
                <img src={Masterplan4} alt="institution Masterplan" />
                <img src={Masterplan5} alt="institution Masterplan" />
                <img src={Masterplan6} alt="institution Masterplan" />
                <img src={Masterplan7} alt="institution Masterplan" />
                <img src={Masterplan8} alt="institution Masterplan" />
                <img src={Masterplan9} alt="institution Masterplan" />
                <img src={Masterplan10} alt="institution Masterplan" />
                <img src={Masterplan11} alt="institution Masterplan" />
                <img src={Masterplan12} alt="institution Masterplan" />
                <img src={Masterplan13} alt="institution Masterplan" />
                <img src={Masterplan14} alt="institution Masterplan" />
                <img src={Masterplan15} alt="institution Masterplan" />
            </div>


        </div>
    )
}