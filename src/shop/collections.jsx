import React, {useState, useEffect}from 'react';
import { Link } from 'react-router-dom'

import { fetchCategories} from './woocommerce'

import '@fontsource/poppins'

import './collections.css'

const style ={
    fontFamily: 'Poppins',
}

export default function Collections() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetchCategories()
        .then((data) => {
            setCategories(data)
            console.log("Fetched categories", data)
        })
    }
    , [])

    const collections = ['Family Houses', 'Holiday Houses', 'Retirement Houses', 'Cottages'];

    const filteredCategories = categories.filter((category) => collections.includes(category.name))
    console.log('Filtered Categories',filteredCategories)

    return(
        <div className='collections' style={style}>
            <div className='collections-title'>
                <h1>Tailored Living</h1>
                <h2>Explore Versatile House Plans for Every Stage of Your Life</h2>
            </div>
            <div className='collections-card-container'>
                {filteredCategories.map((category) => (
                    <div key={category.id} className='collections-card'>
                        <Link to={`/shop/${category.slug}`}>
                            <img src={category.image ? category.image.src: 'default-thumbnail.jpg'} alt={category.name} loading='lazy' />
                            <h3>{category.name}</h3>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}