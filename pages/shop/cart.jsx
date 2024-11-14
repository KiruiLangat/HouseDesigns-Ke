import React from 'react';
import { useCart } from '../../services/shop/cartContext';
import Link from 'next/link';
import Image from 'next/image';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styles from '../../assets/styles/shop/cart.module.css';

const style = {
    fontFamily: 'Poppins'
}
export default function CartPage (){
  const { cart, handleRemoveFromCart } = useCart();

  return (
    <div className={styles.cartContainer} style={style}>
        <h1>Cart</h1>
        {cart.length === 0 ? (
            <div className={styles.emptyCart}>
                <p>Your cart is empty</p>
                <Link href='/shop'>
                Browse Plans
                </Link>
            </div> 
        ) : (
            <div className={styles.cartProducts}>
            {cart.map((product, index) => (
                product ? (
                <div key={index} className={styles.cartProduct}>
                    <Link href={`/shop/product/${product.slug}`}>
                    {product.images && product.images.length > 0 && (
                        <Image src={product.images[0].src} alt={product.name} loading='lazy' width={100} height={100} />
                    )}
                        
                    </Link>
                    
                    <div className={styles.cartProductDetails}>
                            <h2>{product.name}</h2>
                            <p>{product.selectedOptionDescription}</p>
                            
                            <div className={styles.removeCart}>
                                {product.selectedPrice !== null ? (
                                <h3>${product.selectedPrice}</h3>
                            ) : (
                                <h3>No price selected</h3>
                            )}
                                <p onClick={() => handleRemoveFromCart(product)}>Remove</p>                          
                            </div>
                    </div>
                </div>
                ) : null
            ))}
            
        </div>
      )}
      
        <Link href='/shop/checkout'>
            <button className={styles.checkoutFromCart}>
                <ShoppingCartIcon  className={styles.shoppingCart}/>
                <p>Checkout</p>
            </button>
        </Link>
      
      
      
        
    </div>
  );
};
