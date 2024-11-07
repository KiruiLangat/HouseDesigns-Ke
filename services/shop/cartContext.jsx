import React, { createContext, useState, useContext, useEffect } from 'react';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartContext = createContext();
const WishlistContext = createContext();

export const useCart = () => useContext(CartContext);
export const useWishlist = () => useContext(WishlistContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
    })

  const [wishlist, setWishlist] = useState(() =>{
    const savedWishlist = localStorage.getItem('wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  useEffect (() => {    
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect (() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const handleAddToCart = (product, selectedPrice, selectedOption) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, { ...product, selectedPrice, selectedOptionDescription : selectedOption.description }];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
    toast.success('Added to cart!');
  };

  const handleRemoveFromCart = (product) => {
    setCart((prevCart) => prevCart.filter((item) => item !== product))
    toast.error('Removed from cart!');
  };

  const handleAddToWishlist = (product) => {
    setWishlist((prevWishlist) => [...prevWishlist, product]);
    toast.success('Added to wishlist!');
  };

    const handleRemoveFromWishlist = (product) => {
        setWishlist((prevWishlist) => prevWishlist.filter((item) => item !== product));
        toast.error('Removed from wishlist!');
    };

  return (
    <CartContext.Provider value={{ cart, handleAddToCart, handleRemoveFromCart }}>
      <WishlistContext.Provider value={{ wishlist, handleAddToWishlist, handleRemoveFromWishlist }}>
        {children}
      </WishlistContext.Provider>
    </CartContext.Provider>
  );
};