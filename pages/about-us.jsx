import React from 'react'
import Head from 'next/head'
import AboutUs from '../components/AboutUs.jsx'
import '@fontsource/poppins'

const style = {
    fontFamily: 'Poppins'
}

export default function AboutPage() {
    return (
        <div style={style}>
            <Head>
                <title>About Us | HouseDesigns</title>
                <meta name="description" content="Learn more about HouseDesigns, our mission, team, and commitment to delivering exceptional architecture, interior design, and project management services in Kenya." />
                <meta property="og:title" content="About Us | HouseDesigns" />
                <meta property="og:description" content="Learn more about HouseDesigns, our mission, team, and commitment to delivering exceptional architecture, interior design, and project management services in Kenya." />
                <meta property="og:image" content="https://housedesigns.co.ke/Logo.png" />
                <meta property="og:url" content="https://housedesigns.co.ke/about-us" />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="https://housedesigns.co.ke/about-us" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="About Us | HouseDesigns" />
                <meta name="twitter:description" content="Learn more about HouseDesigns, our mission, team, and commitment to delivering exceptional architecture, interior design, and project management services in Kenya." />
                <meta name="twitter:image" content="https://housedesigns.co.ke/Logo.png" />
                <meta name="twitter:url" content="https://housedesigns.co.ke/about-us" />
                {/* Organization JSON-LD structured data */}
                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "Organization",
                      "name": "HouseDesigns",
                      "url": "https://housedesigns.co.ke/",
                      "logo": "https://housedesigns.co.ke/Logo.png",
                      "sameAs": [
                        "https://x.com/HouseDesignsKe",
                        "https://www.linkedin.com/company/house-designske/",
                        "https://www.instagram.com/house_designske/"
                      ]
                    })
                  }}
                />
            </Head>
            <AboutUs />
        </div>
    )
}