import React from 'react'
import LandingPage from '../components/shop/landingPage'
import BrowsePlans from '../components/shop/browsePlans'
import NewPlans from '../components/shop/NewPlans'
import Collections from '../components/shop/collections'
import Assurance from '../components/shop/assurance'

export default function home({cart, wishlist, addToCart, addToWishlist}) {
    return(
        <>
            <LandingPage />
            <BrowsePlans  cart={cart} wishlist={wishlist} addToCart={addToCart} addToWishlist={addToWishlist}  />
            <NewPlans />
            <Collections />
            <Assurance />
        </>
    )
}