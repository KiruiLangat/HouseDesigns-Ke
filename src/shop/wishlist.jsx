import React, { useState, useEffect } from 'react';
import './wishlist.css';
import '@fontsource/poppins';

const style = {
    fontFamily: 'Poppins'
};

export default function Wishlist({ products = [] }) {
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        const savedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        setWishlist(savedWishlist);
    }, []);

    const handleRemoveFromWishlist = (productId) => {
        const updatedWishlist = wishlist.filter(item => item.id !== productId);
        setWishlist(updatedWishlist);
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    };

    // Filter products to display only those in the wishlist
    const wishlistProducts = products.filter(product =>
        wishlist.some(item => item.id === product.id)
    );

    return (
        <div className='wishlist-container' style={style}>
            <h1>Your Wishlist</h1>
            <div className='wishlist-information'>
                {wishlistProducts.length > 0 ? (
                    wishlistProducts.map((product) => (
                        <div key={product.id} className='wishlist-item'>
                            <h3>{product.name}</h3>
                            <a href={product.permalink}>View Product</a>
                            <button onClick={() => handleRemoveFromWishlist(product.id)}>Remove from Wishlist</button>
                        </div>
                    ))
                ) : (
                    <div className='no-product'>
                        <p>Your Wishlist is empty</p>
                        <a href='/shop'>Browse Products</a>
                    </div>
                )}
            </div>
        </div>
    );
}
