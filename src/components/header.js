import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { Cart } from "../context/Context";

export default function Header() {
  
  const {cart, categories,filterCat, AllCategoryPro, setFetchdata} = useContext(Cart)
   
  const [total, setTogal] = useState()
  

  // const cartCountTotal = cart.reduce((acc, item) => acc + item.count, 0);
  useEffect(()=>{
    // setTogal(cart.reduce((acc, cr) => acc + Number(cr.price),0 ))
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
              <Link className="nav-link" onClick={()=> setFetchdata(AllCategoryPro)} to="/">
                Home
              </Link>
            </li>
            {
                  categories.map((category) => (                    
                <li className="nav-item">
                    <Link className='nav-link border-0' onClick={()=> filterCat(category)}>{category}</Link>
                </li>
                  ))

                }  

            {/* <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Category</a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                {
                  categories.map((category) => (
                    <button className='nav-link btn-outline-dark' onClick={()=> filterCat(category)}>{category}</button>
                  ))

                }
              </div>
            </li> */}
          </ul>
        </div>
          <ul className="navbar-nav mx-auto">
            {/* drop down filter by price */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Filter By Price</a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <li className="nav-item">
                <Link className="nav-link" to="/">
                  Hight Price
                </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/">
                  Low Price
                </Link>
                </li>
              </div>
            </li>
            {/* drop down filter by rating */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Filter By Rating</a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <li className="nav-item">
                <Link className="nav-link" to="/">
                  Hight Price
                </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/">
                  Low Price
                </Link>
                </li>
              </div>
            </li>                                      
            <li className="nav-item">
            <Link className="nav-link" to="/cart">
            <i class="fa-solid fa-cart-shopping mr-3"></i>
            <span class="position-absolute top-20 start-100 translate-middle badge rounded-pill bg-dark">
            $ {total}
              <span class="visually-hidden">unread messages</span>
              </span>    
            </Link>
          </li>
          </ul>
      </nav>

    </div>
  )
}
