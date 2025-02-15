import React from 'react'
import useFetch from "../../hooks/useFetch.jsx"
import Loading from "../loading/Loading";
export default function () {
  const { data, isLoading, error } = useFetch('https://dummyjson.com/products?limit=12');

console.log(data);

  if (isLoading) {
    return <Loading />
  }
  return (
    <>
      {error ? <div className="alert alert-primary mt-3" role="alert">{error}</div> : ''}
      <div className="container mt-4 mb-4">
        <div className="row">
        {data.products.map(product => 
        <div className="card col-lg-3 g-4 me-4" style={{ width: '16rem' }} key={product.id}>
          <img src={product.thumbnail} className="card-img-top" alt={product.title} />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
          </div>
        </div>
      )}
        </div>
      </div>

    </>
  )
}
