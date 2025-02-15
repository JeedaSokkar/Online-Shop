import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar/Navbar'
import Footer from './component/footer/Footer'
import Home from './component/home/Home'
import Product from './component/product/Product';


export default function App() {
  return (
    <>
      <Navbar />
      <Product />

      <Footer />
    </>



  )
}
