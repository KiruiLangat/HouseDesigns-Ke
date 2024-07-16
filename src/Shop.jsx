import React from 'react'
import ShoppingBag from './images/shopBag.svg'
import Header from './Header'
import './Shop.css'

import '@fontsource/poppins'

const style = {
    fontFamily:'Poppins'
};

export default function Shop() {
  return (
    <div className='shop-container' style={style}>

        <div><Header /></div>

        <div className='prompt'>
            <img src={ShoppingBag} alt='shopping-bag' />
            <h1>Under Construction! Coming Soon...</h1>
        </div> 

    </div>
  )
}
/*

Design the Database:
  Start by designing the database schema for your ecommerce platform.
  You'll need tables for products, users, orders, and possibly more.

Build the Backend: 
  Next, build the backend server.
  This will involve setting up routes to handle API requests,
  implementing the business logic for each route, and writing queries to interact with your database.

Build the Frontend: 
  Once your backend is set up, you can start building the frontend.
  This will involve creating components for each part of your application 
  (like the product listing, shopping cart, and checkout pages)
  and making API calls to your backend to fetch and submit data.

Testing: 
  Throughout the development process, 
  you should be writing tests to ensure your code is working as expected. 
  This includes unit tests for individual functions, integration tests for your routes, 
  and end-to-end tests for your entire application.

Deployment: 
  Once your application is built and tested, you can deploy it to a server. 
  This will involve setting up a server, deploying your code, 
  and setting up your database on the server.

Remember, 
  building an ecommerce platform is a large project that involves many different 
  aspects of web development. 
  It's important to plan your project carefully and break it down into manageable tasks. 
   Good luck!


*/