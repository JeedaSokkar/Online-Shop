import React from 'react'
import footer from './Footer.module.css'
export default function Footer() {
    return (
        <div className={`${footer.foot} mt-5`}>
            <div className="container text-center ">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <h3 className=' text-uppercase mt-5 mb-4'>Location</h3>
                        <p className=' mb-5 '>2215 John Daniel Drive Clark, MO 65243</p>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 ms-auto">
                        <h3 className=' text-uppercase mt-5 mb-4'>Contact Us</h3>
                        <div className='mb-5 d-flex align-items-center '>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <i className={`${footer.icon} fa-brands fa-facebook fa-1x border border-2 rounded-circle  p-3 `}></i>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <i className={`${footer.icon} fa-brands fa-twitter fa-1x border border-2 rounded-circle  p-3`}></i>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <i className={`${footer.icon} fa-brands fa-linkedin fa-1x border border-2 rounded-circle  p-3`}></i>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <i className={` ${footer.icon} fa-brands fa-instagram fa-1x border border-2 rounded-circle  p-3`}></i>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}