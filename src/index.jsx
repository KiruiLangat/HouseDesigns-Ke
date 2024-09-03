import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './shop/cartContext';
import App from './App';


ReactDOM.createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>

);
