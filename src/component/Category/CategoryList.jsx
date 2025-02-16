import React from 'react'
import Loading from "../loading/Loading";
import useFetch from "../../hooks/useFetch.jsx"
import style from './CategoryStyle.module.css'
import { Link } from "react-router-dom";
export default function CategoryList() {
 
    const { data, isLoading, error } = useFetch('https://dummyjson.com/products/category-list');

    console.log(data);
    if (isLoading) {
      return <Loading />
    }
    if (!data || !Array.isArray(data)) {
      return <h2>No categories found</h2>;
  }

  return (
    <>
      {error ? <div className="alert alert-primary mt-3" role="alert">{error}</div> : ''}
      <div className="container mt-4 mb-4">
        <div className="row">
        {data?.map((item,index) => 
            <div key={index} className="col-md-4 col-sm-6 col-12 mb-3 mt-3">
               <Link to={`/Category/${item}`} className='text-decoration-none'>
              <div className={`${style.item} card shadow-sm border-0`}>
                <div className="card-body text-center">
                  <h6 className={`${style.item} card-title text-uppercase fw-bold`}>{item}</h6>
                
                </div>
              </div>
               </Link>
            </div>
         )}
        </div>
      </div>
    </>
  )
}
