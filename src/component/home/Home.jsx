import React from 'react'
import Loading from "../loading/Loading";
//import Product from '../product/Product'
import useFetch from "../../hooks/useFetch.jsx"
import home from './home.module.css'
import Imgbackground from '../../images/ground.webp'
export default function Home() {
  const { data, isLoading, error } = useFetch('https://dummyjson.com/products/category-list');

  console.log(data);
  if (isLoading) {
    return <Loading />
  }
  return (
    <>
      <div>
        <img src={Imgbackground} alt="background" className='w-100' />
      </div>
      {error ? <div className="alert alert-primary mt-3" role="alert">{error}</div> : ''}
      <div className="container mt-4 mb-4">
        <div className="row">
      
        </div>
      </div>
       
     
    </>

  )
}
/*
   {data.categories.map((item, index) => 
            <div key={index} className="col-md-4 col-sm-6 col-12 mb-3 mt-3">
              <div className={`${home.item} card shadow-sm border-0`}>
                <div className="card-body text-center">
                  <h6 className={` ${home.item} card-title text-uppercase fw-bold`}>{item}</h6>
                </div>
              </div>
            </div>
         )}*/