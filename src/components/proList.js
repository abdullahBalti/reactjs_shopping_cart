import React, { useContext } from 'react'
import { Cart } from '../Context';

export default function ProList({prod}) {

    const {cart, setCart} = useContext(Cart);
    
  return (      


        <tr key={prod.id}>
          <th scope="row">{prod.product_id}</th>
          <td><img className="card-img-top" src={prod.brand} alt="profile" /></td>
          <td>
             <h3 className="card-title">{prod.product_name}</h3>
             <h6 className="card-title">{prod.description}</h6>
          </td>
          <td><p className="card-text">{prod.price}</p></td>
          <td><button className="btn btn-outline-primary" type="button" onClick={() => setCart(cart.filter((p)=> p.id !== prod.id)) }>Remove</button></td>
          </tr>

    
  )
}
