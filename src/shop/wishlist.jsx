import React from 'react';
import { useWishlist } from './cartContext';
import { Link } from 'react-router-dom';

import './wishlist.css';

const style = {
    fontFamily: 'Poppins',
    };

const WishlistPage = () => {
  const { wishlist, handleRemoveFromWishlist } = useWishlist();

  return (
    <div className='wishlist-container' style={style}>
      <h1>Wishlist</h1>
      {wishlist.length === 0 ? (
        <div className='no-product'>
            <p>Your wishlist is empty</p>
            <Link to ='/shop'>
                Save Plans for Later
            </Link>
        </div>
      ) : (
        <div className='wishlist-product'>
          {wishlist.map((product, index) => (
            <div key={index} className='wishlist-product-info'>
                <Link to={`/product/${product.slug}`}>
                    <img src={product.images[0]?.src} alt={product.name} loading='lazy' />
                </Link>
                <div className='wishlist-product-detail'>
                    <h2>{product.name}</h2>
                    <p>${product.price}</p> 
               
                    <div onClick={() => handleRemoveFromWishlist(product)} className='remove-wishlist'>
                        <p>Remove</p>
                    </div> 
                
                </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;