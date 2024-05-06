import React from "react";
import './Masterplanning.css'
import '@fontsource/poppins'
import Header from './Header'
import Footer from './Footer'
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
            <Header />
            <div className="large-img">
                <img src={Masterplan} alt="institution Masterplan" />
            </div>
            <h1 className="masterplan-title">Masterplanning Services</h1>
            <p>University of Isiolo</p>
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
            <Footer />


        </div>
    )
}