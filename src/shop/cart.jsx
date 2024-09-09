import React from 'react';
import { useCart } from './cartContext';
import { Link } from 'react-router-dom';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './cart.css'

const style = {
    fontFamily: 'Poppins'
}
export default function CartPage (){
  const { cart, handleRemoveFromCart } = useCart();

  return (
    <div className='cart-container' style={style}>
        <h1>Cart</h1>
        {cart.length === 0 ? (
            <div className='empty-cart'>
                <p>Your cart is empty</p>
                <Link to='/shop'>
                Browse Plans
                </Link>
            </div> 
        ) : (
            <div className='cart-products'>
            {cart.map((product, index) => (
                product ? (
                <div key={index} className='cart-product'>
                <Link to={`/product/${product.slug}`}>
                {product.images && product.images.length > 0 && (
                    <img src={product.images[0].src} alt={product.name} loading='lazy' />
                )}
                    
                </Link>
                
                <div className='cart-product-details'>
                        <h2>{product.name}</h2>
                        <p>${product.price}</p>
                        <div  className='remove-cart'>
                            <p onClick={() => handleRemoveFromCart(product)}>Remove</p>

                            <div className='checkout-from-cart'>
                                <Link to='/shop/checkout'>
                                    <ShoppingCartIcon className='shopping-cart'/>
                                    <p>Checkout</p>
                                </Link>
                            </div>
                            
                        </div>
                    </div>
                </div>
                ) : null
            ))}
        </div>
      )}
    </div>
  );
};
