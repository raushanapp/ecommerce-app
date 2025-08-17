import React from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/homepage/HomePage.Components';
import ShopPage from './pages/shop/ShopPage.Component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';


const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/signin" element={<SignInAndSignUpPage />} />
        
      </Routes>
    </div>
  )
}
export default App