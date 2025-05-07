import React from 'react';
import { useWishlist } from '../../services/shop/cartContext';
import Link from 'next/link';
import Image from 'next/image';

import styles from '../../assets/styles/shop/wishlist.module.css';

const style = {
    fontFamily: 'Poppins',
    };

const WishlistPage = () => {
  const { wishlist, handleRemoveFromWishlist } = useWishlist();

  return (
    <div className={styles.wishlistContainer} style={style}>
      <h1>Wishlist</h1>
      {wishlist.length === 0 ? (
        <div className={styles.noProduct}>
            <p>Your wishlist is empty</p>
            <Link href='/shop' legacyBehavior>
                <a>Save Plans for Later</a>
            </Link>
        </div>
      ) : (
        <div className={styles.wishlistProduct}>
          {wishlist.map((product, index) => (
            <div key={index} className={styles.wishlistProductInfo}>
                <Link href={`/shop/product/${product.slug}`}>
                    <a>
                        <Image src={product.images[0]?.src} alt={product.name} loading='lazy' width={200} height={200} />
                    </a>
                </Link>
                <div className={styles.wishlistProductDetail}>
                    <h2>{product.name}</h2>
                    <p>${product.price}</p> 
               
                    <div onClick={() => handleRemoveFromWishlist(product)} className={styles.removeWishlist}>
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