import React from 'react'
import { Link } from 'react-router-dom'
import nav from './Navbar.module.css'


export default function Navbar() {
  return (
    <div>
  <nav className={`${nav.navbar} navbar navbar-expand-lg bg-body-tertiary`}>
    <div className="container">
      <Link className="navbar-brand fw-bold fs-1 text-primary" to="#">SHOP</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className= "navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link text-primary active" aria-current="page" to={'/'}>Home</Link>
          </li>
          <li className="nav-item">
            <Link className={`${nav.navitem} nav-link`} to="#">Category</Link>
          </li>
         
          <li className="nav-item">
            <Link className={`${nav.navitem} nav-link`} aria-disabled="true">product</Link>
          </li>
         
          <li className="nav-item" >
            <Link className={`${nav.navitem} nav-link`} aria-disabled="true">Add Product</Link>
          </li>
        </ul>
        
      </div>
    </div>
  </nav>
  
</div>
  )
}
