import React from 'react';
import Homepage from './Homepage';
import Blog from './Blog';
import { Routes, Route } from 'react-router-dom';


export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
     
  )
}
