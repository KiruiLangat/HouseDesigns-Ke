import React from 'react'
import Head from 'next/head'
import LandingPage from '../components/shop/landingPage'
import BrowsePlans from '../components/shop/browsePlans'
import NewPlans from '../components/shop/NewPlans'
import Collections from '../components/shop/collections'
import Assurance from '../components/shop/assurance'

export default function Home({cart, wishlist, addToCart, addToWishlist}) {
    return(
        <>
            <Head>
                <title>House Designs Shop</title>
                <meta name="description" content="Shop for house designs" />
            </Head>
            <LandingPage />
            <BrowsePlans cart={cart} wishlist={wishlist} addToCart={addToCart} addToWishlist={addToWishlist} />
            <NewPlans />
            <Collections />
            <Assurance />
        </>
    )
}