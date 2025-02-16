import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar/Navbar'
import Footer from './component/footer/Footer'
import Home from './component/home/Home'
import ProductDetails from './component/ProductDetails/ProductDetails'
import CategoryItem from './component/CategoryProduct/CategoryItem'



export default function App() {
  return (
    <>
      <Navbar />
      
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path="/products/:id" element={<ProductDetails/>} />
          <Route path="/Category/:category" element={<CategoryItem />} />
        </Routes>
 

      <Footer />
    </>



  )
}
