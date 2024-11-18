import React, { createContext, useState, useContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartContext = createContext();
const WishlistContext = createContext();

export const useCart = () => useContext(CartContext);
export const useWishlist = () => useContext(WishlistContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const handleAddToCart = (product, selectedPrice, selectedOption) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, { ...product, selectedPrice, selectedOptionDescription: selectedOption.description }];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
    toast.success('Added to cart');
  };

  const handleRemoveFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
    toast.info('Removed from cart');
  };

  const handleAddToWishlist = (product) => {
    setWishlist([...wishlist, product]);
    toast.success('Added to wishlist');
  };

  const handleRemoveFromWishlist = (product) => {
    setWishlist(wishlist.filter((item) => item.id !== product.id));
    toast.info('Removed from wishlist');
  };

  return (
    <CartContext.Provider value={{ cart, handleAddToCart, handleRemoveFromCart }}>
      <WishlistContext.Provider value={{ wishlist, handleAddToWishlist, handleRemoveFromWishlist }}>
        {children}
      </WishlistContext.Provider>
    </CartContext.Provider>
  );
};
