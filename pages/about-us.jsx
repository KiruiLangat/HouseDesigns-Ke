import React from 'react'
import AboutUs from '../components/AboutUs.jsx'

import '@fontsource/poppins'

const style = {
    fontFamily: 'Poppins'
}

export default function AboutPage() {
    return (
        <div style={style}>
            <AboutUs />
        </div>
    )
}