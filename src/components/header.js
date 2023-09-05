import React, { useContext, useEffect, useState } from 'react';

import { Link } from 'react-router-dom'
import { Cart } from "../Context";
import Products_category from './Products.json'

export default function Header() {
  
  const pro_ct  = [...new Set(Products_category.map((ctg)=> ctg.category ))] 
  // console.log(pro_ct)

  const {cart, setCart} = useContext(Cart);

  const [total, setTogal] = useState()



  useEffect(()=>{
    setTogal(cart.reduce((acc, cr) => acc + Number(cr.price),0 ))
  },[cart])
  

  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light container navbar-fixed-top">
        <Link className="navbar-brand" to="/#">
          Navbar
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Category</a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                {
                  pro_ct.map((category) => (
                    <a className="dropdown-item" href="#">{category}</a>
                  ))

                }
              </div>
            </li>
          </ul>
        </div>
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
            <Link className="nav-link" to="/cart">
            <button className="btn btn-primary" >
                    Cart <span className="badge bg-primary">Rs {total}</span>
            </button>
            </Link>
          </li>
          </ul>
      </nav>

    </div>
  )
}
