import React from 'react';
import './cart.css';

const style = {
    fontFamily: 'Poppins',
};

export default function Cart({ products = [] }) {
    // Check if products array is empty
    const isCartEmpty = products.length === 0;

    return (
        <div className='cart-container' style={style}>
            <h1>Your Cart</h1>
            {isCartEmpty ? (
                <div className='empty-cart'>
                    <p>Your cart is currently empty</p>
                    <a href='/shop'>Browse Products</a>
                </div>
            ) : (
                <div className='cart-information'>
                    {products.map((product) => (
                        <div key={product.id} className='cart-product'>
                            <img src={product.image} alt={product.name} />
                            <div className='cart-product-information'>
                                <h2>{product.name}</h2>
                                <p>{product.description}</p>
                                <p>${product.price}</p>
                            </div>
                        </div>
                    ))}
                    <div className='cart-price'>
                        {/* Add total price calculation if needed */}
                        <h3>Total: ${products.reduce((acc, product) => acc + product.price, 0).toFixed(2)}</h3>
                    </div>
                </div>
            )}
        </div>
    );
}
