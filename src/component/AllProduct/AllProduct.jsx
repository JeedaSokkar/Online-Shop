import React from 'react'
import useFetch from "../../hooks/useFetch.jsx"
import Loading from "../loading/Loading";
import { Link } from 'react-router-dom';
import style from './AllProductStyle.module.css'

export default function AllProduct() {

  const { data, isLoading, error } = useFetch('https://dummyjson.com/products');
 
   
   if (isLoading) {
     return <Loading />
   }

   return (
     <>
       {error ? <div className="alert alert-primary mt-3" role="alert">{error}</div> : ''}
       <div className="container mt-5 mb-4">
        <div className=' d-flex align-item-center justify-content-center mb-2 text-primary-emphasis'><h1 className={`${style.head}`}>Products</h1></div>
         
         <div className="row">
           {data?.products?.map(product =>
             <div className="card col-lg-3 g-4 me-4 shadow" style={{ width: '16rem' }} key={product.id}>
               <img src={product.thumbnail} className="card-img-top" alt={product.title} />
               <div className="card-body  d-flex flex-column">
                 <h5 className={`${style.title} card-title`}>{product.title}</h5>
                
                 <Link to={`/products/${product.id}`}  className={`${style.Detials} btn btn-primary mt-auto`}>Details</Link>
               </div>
             </div>
           )}
         </div>
       </div>
 
     </>
   )
}
