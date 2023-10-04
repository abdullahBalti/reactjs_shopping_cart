import React, { useContext } from 'react'
import { Cart } from '../context/Context';
import { Link } from 'react-router-dom';

export default function SingleProduct({prod}) {

    const {cart, setCart} = useContext(Cart);
    
  return (
    <div className='col-md-4 my-3' >
      <div className="card mx-2">
        <div className="card-body">
        <img className="card-img-top" src={prod.brand} alt="profile" />
          <h5 className="card-title mt-3">{prod.product_name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{prod.category}</h6>
          {/* <p className="card-text">{prod.description}</p> */}
          <h6 className="card-text">$: {prod.price}</h6>
          <h6 className="card-text">Rating: {prod.rating}</h6>
        </div>
        {cart.includes(prod)? (
            <div className='d-flex justify-content-around pb-3'>
            <button className="btn btn-outline-danger" type="button" onClick={() => setCart(cart.filter((p)=> p.product_id !== prod.product_id)) }>Remove From Cart</button>
            {/* <button className="btn btn-outline-dark" type="button">View Cart</button> */}
            <Link to='/cart' className='btn btn-outline-dark'>View Cart</Link>            
            </div>
        ):(
          <div className="add-to-cart d-flex justify-content-around pb-3">
            {/* <button className="btn btn-outline-dark" type="button">Product Detail</button> */}
            <Link to={`/product/${prod.product_id}`} className="btn btn-outline-dark">Product Detail</Link>
            <button className="btn btn-outline-primary" type="button" onClick={() => setCart([...cart, prod]) }>Add to Cart</button>
          </div>
        )}
      </div>
      
    </div>
  )
}
