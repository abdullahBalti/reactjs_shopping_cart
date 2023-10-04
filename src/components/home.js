import {  useContext, useState } from 'react';
import SingleProduct from './singleProduct';
import {Cart } from '../context/Context'

export default function Home() {

  const {fetchdata, setFetchdata} = useContext(Cart)

    // const ct_filter = products.filter((pro)=>{})
  // console.log(products);

  return (
    <div className='d-flex flex-wrap'>
      {fetchdata.map((prod)=>(        
        <SingleProduct prod={prod} key={fetchdata.id} />        
      ))}
    </div>
  )
}
