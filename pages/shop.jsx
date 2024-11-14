import React from 'react'
import Head from 'next/head'
import LandingPage from '../components/shop/landingPage'
import BrowsePlans from '../components/shop/browsePlans'
import NewPlans from '../components/shop/newPlans'
import Collections from '../components/shop/collections'
import Assurance from '../components/shop/assurance'

export default function Home({cart, wishlist, addToCart, addToWishlist}) {
    return(
        <>
            <Head>
                <title>House Designs Shop</title>
                <meta name="description" content="Shop for house designs" />
                <meta name='image' property='og:image' content='https://housedesigns.co.ke/CM_1.jpg' />
            </Head>
            <LandingPage />
            <BrowsePlans cart={cart} wishlist={wishlist} addToCart={addToCart} addToWishlist={addToWishlist} />
            <NewPlans />
            <Collections />
            <Assurance />
        </>
    )
}