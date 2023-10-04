import React, { createContext, useState } from 'react'
import products from '../components/Products.json'

export const Cart = createContext();

export const fetchdata = createContext();

const Context = ({children}) => {

// context cart fun
const [cart, setCart] = useState([]);

const AllCategoryPro = products;
// context fetch data from json
const [fetchdata, setFetchdata] = useState(products);

// context category fetch nav link 
const categories  = [...new Set(products.map((category_name)=> category_name.category ))]

// context category filter fun
const filterCat = (cat)=>{
     const newCta = products.filter((pro_cta) => pro_cta.category == cat )
     setFetchdata(newCta)
    }


  return (
    <Cart.Provider value={{ cart, setCart, fetchdata, setFetchdata, filterCat, categories, AllCategoryPro }}>{children}</Cart.Provider>
  )
}

export default Context;