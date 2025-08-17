import React from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/homepage/HomePage.Components';
import ShopPage from './pages/shop/ShopPage.Component';
import Header from './components/header/header.component';


const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={ <ShopPage/>} />
      </Routes>
    </div>
  )
}
export default App