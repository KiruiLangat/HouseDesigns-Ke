import React from 'react'
import Head from 'next/head'
import LandingPage from '../components/shop/LandingPage'
import BrowsePlans from '../components/shop/BrowsePlans'
import NewPlans from '../components/shop/NewPlans'
import Collections from '../components/shop/Collections'
import Assurance from '../components/shop/Assurance'

export default function Home() {
    return(
        <>
            <Head>
                <title>House Designs Shop</title>
                <meta name="description" content="Shop for house designs" />
                <meta name='image' property='og:image' content='/CM_1.jpg' />
            </Head>
            <LandingPage />
            <BrowsePlans  />
            <NewPlans />
            <Collections />
            <Assurance />
        </>
    )
}