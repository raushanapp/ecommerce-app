import React from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/homepage/HomePage.Components';
import ShopPage from './pages/shop/ShopPage.Component';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={ <ShopPage/>} />
    </Routes>
  )
}
export default App