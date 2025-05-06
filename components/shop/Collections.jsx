import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { fetchCategories } from '../../services/shop/woocommerce';

import '@fontsource/poppins';

import styles from '../../assets/styles/shop/collections.module.css';

const style = {
    fontFamily: 'Poppins',
};

const Collections = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchCategories()
            .then((data) => {
                setCategories(data);
                console.log("Fetched categories", data);
            });
    }, []);

    const collections = ['Family Houses', 'Holiday Houses', 'Retirement Houses', 'Cottages'];

    const filteredCategories = categories.filter((category) => collections.includes(category.name));
    console.log('Filtered Categories', filteredCategories);

    return (
        <div className={styles.collections} style={style}>
            <div className={styles.collectionsTitle}>
                <h1>Tailored Living</h1>
                <h2>Explore Versatile House Plans for Every Stage of Your Life</h2>
            </div>
            <div className={styles.collectionsCardContainer}>
                {filteredCategories.map((category) => (
                    <div key={category.id} className={styles.collectionsCard}>
                        <Link href={`/shop/${category.slug}`} legacyBehavior>
                            <a>
                                <Image 
                                    src={category.image ? category.image.src : '/default-thumbnail.jpg'} 
                                    alt={category.name} 
                                    width={300} 
                                    height={300} 
                                    layout="responsive" 
                                    loading='lazy' 
                                />
                                <h3>{category.name}</h3>
                            </a>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Collections;