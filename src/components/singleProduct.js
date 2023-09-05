import React, { useContext } from 'react'
import { Cart } from '../Context';

export default function SingleProduct({prod}) {

    const {cart, setCart} = useContext(Cart);
    
  return (
    <div className='col-md-4 my-3'>
      <div className="card mx-2">
        <div className="card-body">
        <img className="card-img-top" src={prod.brand} alt="profile" />
          <h5 className="card-title">{prod.product_name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{prod.category}</h6>
          <p className="card-text">{prod.description}</p>
          <h6 className="card-text">RS: {prod.price}</h6>
          <h6 className="card-text">Rating: {prod.rating}</h6>
        </div>
        {cart.includes(prod)? (
            <button className="btn btn-outline-primary" type="button" onClick={() => setCart(cart.filter((p)=> p.id !== prod.id)) }>Remove From Cart</button>            
        ):(
            <button className="btn btn-outline-primary" type="button" onClick={() => setCart([...cart, prod]) }>Add to Cart</button>
        )}
      </div>
      
    </div>
  )
}
