import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from "../../hooks/useFetch.jsx";
import Loading from "../loading/Loading";
import style from './CategoryStyle.module.css'
export default function CategoryItem() {
    const { category } = useParams();
    const { data, isLoading, error } = useFetch(`https://dummyjson.com/products/category/${category}`);
    console.log(data)
    if (isLoading) {
        return <Loading />;
    }


    return (
        <div className="container mt-4">
            <h2 className={`${style.title} text-primary text-center`}>Products in {category}</h2>
            <div className="row">

                {data.products.map((product) => (
                    <div key={product.id} className="col-md-4 col-sm-6 col-12 mb-3 mt-3 d-flex">
                        <div className="card shadow-sm border-0 d-flex flex-column h-100" style={{ width: '16rem' }}>
                            <div className="card-body text-center d-flex flex-column">
                                <img src={product.thumbnail} alt="" />
                                <h6 className="card-title mt-2">{product.title}</h6>
                                <p className="text-muted">{product.description}</p>
                                <p className="fw-bold mt-auto">${product.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
   
    );
}
