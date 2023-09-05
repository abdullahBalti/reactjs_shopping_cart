import { faker } from '@faker-js/faker';
import {  useState } from 'react';
import SingleProduct from './singleProduct';
import Products_data from './Products.json'

faker.seed(6);


export default function Home() {


  // const [cart, setCart] = useState([]);
  // console.log(cart);
  const [products] = useState(Products_data)

  
  // console.log(products);

  return (
    <div className='d-flex flex-wrap'>
      {products.map((prod)=>(        
        <SingleProduct prod={prod} key={products.id} />        
      ))}
    </div>
  )
}
