import React, { useContext, useEffect, useState } from 'react';
import { Cart } from "../Context";
import ProList from './proList';

export default function CartPage() {

  const {cart, setCart} = useContext(Cart);

  const [total, setTogal] = useState()

  useEffect(()=>{
    setTogal(cart.reduce((acc, cr) => acc + Number(cr.price),0 ))
  },[cart])
  


  return (
    <>

      <div className='container d-flex flex-wrap'>

        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">IMAGE</th>
                <th scope="col">NAME</th>
                <th scope="col">PRICE</th>
                <th scope="col">DELETE</th>
              </tr>
            </thead>
            <tbody>

              {cart.map((prod) => (<ProList prod={prod} key={prod.id} cart={cart} setCart={setCart} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="total mt-2 ">
        <span className="border "><h4 className='px-3 py-2'>Total: {total}</h4></span>
      </div>
    </>    
  )
}
