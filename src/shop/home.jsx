import React from 'react'
import LandingPage from './landingPage'
import BrowsePlans from './browsePlans'
import NewPlans from './NewPlans'
import Collections from './collections'
import Assurance from './assurance'

export default function home(){
    return(
        <>
            <LandingPage />
            <BrowsePlans />
            <NewPlans />
            <Collections />
            <Assurance />
        </>
    )
}