import React from 'react'
import useFetch from "../../hooks/useFetch.jsx"
import Loading from "../loading/Loading";
import { Link } from 'react-router-dom';
import products from './Products.module.css'
export default function () {

  const { data, isLoading, error } = useFetch('https://dummyjson.com/products?limit=12');

  
  if (isLoading) {
    return <Loading />
  }
  return (
    <>
      {error ? <div className="alert alert-primary mt-3" role="alert">{error}</div> : ''}
      <div className="container mt-5 mb-4">
        <h1 className={`${products.head} text-primary-emphasis`}>Products</h1>
        <div className="row">
          {data?.products?.map(product =>
            <div className="card col-lg-3 g-4 me-4 shadow" style={{ width: '16rem' }} key={product.id}>
              <img src={product.thumbnail} className="card-img-top" alt={product.title} />
              <div className="card-body  d-flex flex-column">
                <h5 className={`${products.title} card-title`}>{product.title}</h5>
               
                <Link to={`/products/${product.id}`}  className={`${products.Detials} btn btn-primary mt-auto`}>Details</Link>
              </div>
            </div>
          )}
        </div>
      </div>

    </>
  )
}
