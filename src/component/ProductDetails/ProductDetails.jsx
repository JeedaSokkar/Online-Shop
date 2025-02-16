import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from "../../hooks/useFetch.jsx"
import Loading from "../loading/Loading";
import { Link } from 'react-router-dom';
import style from './ProductStyle.module.css'

export default function () {
  const { id } = useParams();
  const { data, error, isLoading } = useFetch(`https://dummyjson.com/products/${id}`);

  if (isLoading) {
    return <Loading />
  }
  return (
    <>
      {error ? <div className="alert alert-primary mt-3" role="alert">{error}</div> : ''}
      <div className="container mt-4 mb-4" key={data.id}>
        <h1 className={`${style.title} text-primary-emphasis d-flex align-item-center justify-content-center mb-4`}>{data.title}</h1>
        <div className="d-flex flex-row align-items-start mb-4" >
          {data?.images?.map((img) => (
            <div className="card p-3 border-0 shadow-sm text-center product-card " key={img.id}>
              <img src={img} alt={data.title} className="img-fluid rounded" style={{ maxWidth: '200px', height: 'auto' }} />
            </div>
          ))}
        </div>
        <div className="d-flex flex-column align-items-start ">
          <p className='fw-light fs-6 mb-2 col-lg-6'>{data.description}</p>
          <span className='fw-bold mb-2 '><span className='fw-semibold'>brand : </span>{data.brand}</span>
          <span className='fw-bold mb-2'><span className='fw-semibold'>Price: </span>${data.price}</span>
          <span className="product-rating"><span className='fw-semibold'>Rating : </span>{data.rating} / 5</span>
          <div className="mt-2">
            {data?.reviews?.map((review) => (
              <div className="card mb-3 p-3 border-light shadow-sm" key={review.id}>
                <div className="card-body">
                  <h5 className="card-title fw-bold">{review.reviewerName}</h5>
                  <p className="card-text"><span className="fw-semibold">Comment:</span> {review.comment}</p>
                  <p className="card-text"><span className="fw-semibold">Date:</span> {new Date(review.date).toLocaleDateString()}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  )
}