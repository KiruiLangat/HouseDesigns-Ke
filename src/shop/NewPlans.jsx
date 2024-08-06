import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './newPlans.css'
import { ReactComponent as Star} from '../images/stars.svg'
import { fetchCategories, fetchProducts } from './woocommerce'
import { ReactComponent as Bathrooms} from '../images/bathroom.svg'
import { ReactComponent as Bedrooms} from '../images/bedroom.svg'
import { ReactComponent as Floors} from '../images/floors.svg'
import { ReactComponent as PlinthArea} from '../images/plinth.svg'
import { ReactComponent as Arrow} from '../images/Arrow.svg'

import '@fontsource/poppins'

const style = {
    fontFamily: 'Poppins'
}

export default function NewPlans(){
    const [products, setProducts] = useState([]);

    useEffect (() => {

        const fetchData = async () => {
            try {
                const fetchedCategories = await fetchCategories();
        

                const category = fetchedCategories.find(cat => cat.name === 'New Plans');
                if (category){
                    const categoryProducts = await fetchProducts(category.id);
                    setProducts(categoryProducts.slice(0,3));
                } else {
                    console.log('Category not found');
                }
            } catch (error) {
                console.log('Error Fetching Products',error);
                }
        }
                fetchData();
    
    }, []);

        // const fetchData = async () => {
        //     try {
        //         const fetchedCategories = await fetchCategories();
        //         const newPlansCategory = fetchedCategories.find(category => category.name === 'New Plans');


        //         const fetchedProducts = await fetchProducts('New Plans');
        //         setProducts(fetchedProducts.slice(0,3)); //Display only 3 products
        //     } catch (error) {
        //         console.log('Error Fetching Products',error);
        //     }
        // }

        // fetchData();

    return(
        <div className='new-plans-container' style={style}>
            <div className='new-plans'>
                    <h1>New Plans</h1>
                    
                <div className='new-plans-heading'>
                    
                    <h2>Explore Our Latest House Plans and Designs</h2>
                   
                    <Link to={`/shop/products?category=New Plans`}>
                        <div className='plans-nav-CTA'>
                            <p>See More</p>
                            <Arrow className='icon-arrow-np' />
                        </div>
                    </Link>
                </div>
                {products.map(product => (
                    <div key={product.id} className='new-plans-card'>
                        <Link to={`/shop/${product.slug}`}>
                            <img src={product.images[0].src} alt={product.name} loading='lazy' />
                            <div className='new-indicator'>
                                < Star className='icon-indicator' />
                                <p>New</p>
                            </div>
                            <div className='new-plans-card-title'>
                                <h3>{product.name}</h3>
                                <h4>From ${product.price}</h4>
                            </div>

                            <div className='new-plans-card-detail'>
                                <div className='new-plans-card-details'>
                                    <Bedrooms className='icon-grid'/>
                                    <p>{product.attributes.find(attr => attr.name === 'Bedrooms')?.options[0]} Bedrooms</p>
                                </div>
                                
                                <div className='new-plans-card-details'>
                                    <Floors className='icon-grid-floors'/>
                                    <p>{product.attributes.find(attr => attr.name === 'Floors')?.options[0]} Floor(s)</p>
                                </div>
                                <div className='new-plans-card-details'>
                                    <PlinthArea className='icon-grid' />
                                    <p>{product.attributes.find(attr => attr.name === 'Plinth Area')?.options[0]}</p>
                                </div>
                                <div className='new-plans-card-details'>
                                    <Bathrooms className='icon-grid' />
                                    <p>{product.attributes.find(attr => attr.name === 'Bathrooms')?.options[0]} Bathrooms</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}