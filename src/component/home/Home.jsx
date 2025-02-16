import React from 'react'
import Loading from "../loading/Loading";
import Products from '../Someproducts/Products'
import useFetch from "../../hooks/useFetch.jsx"
import home from './home.module.css'
import Imgbackground from '../../images/ground.webp'
import CategoryList from '../Category/CategoryList'
export default function Home() {

  return (
    <>
      <div>
        <img src={Imgbackground} alt="background" className='w-100' />
      </div>
     <CategoryList/>
       <Products/>
     
    </>

  )
}
