import React from 'react'
import LandingPage from './landingPage'
import BrowsePlans from './browsePlans'
import NewPlans from './NewPlans'
import Collections from './collections'
import Assurance from './assurance'

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