import React, { useState, useContext } from 'react'
import ProductsData from './Products.json'
import { useParams, Link } from "react-router-dom"
import { Cart } from '../context/Context';

export default function ProductDetail() {

    const  productId  = useParams()
    const [products] = useState(ProductsData)
    const [signlePro] = products.filter((pro) => pro.product_id == productId.id )

    const {cart, setCart} = useContext(Cart);


    return (
    <>

        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                    <h2>{signlePro.product_name}</h2>
                    <p>{signlePro.description}</p>
                    <h6>{signlePro.category}</h6>
                    <h6>{signlePro.price}</h6>
                    <h6>{signlePro.rating}</h6>
              </div>
              <div className="cart-footer">
              {cart.includes(signlePro)? (
                  <div className='mx-5'>
                  <button className="btn btn-outline-danger" type="button" onClick={() => setCart(cart.filter((p)=> p.product_id !== signlePro.product_id)) }>Remove From Cart</button>
                  <Link to='/cart' className='btn btn-outline-dark'>View Cart</Link>            
                  </div>
              ):(
                <div className="pb-3 ml-2">
                  <button className="btn btn-outline-primary" type="button" onClick={() => setCart([...cart, signlePro]) }>Add to Cart</button>
                </div>
              )}                
              </div>
            </div>
          </div>
        </div>

    </>
  )
}
