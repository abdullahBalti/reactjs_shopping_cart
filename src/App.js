import { Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './components/home';
import CartPage from './components/cart';
import Header from './components/header';
import Products from './components/Products.json';
import ProductDetail from './components/ProductDetail';

function App() {

  const categories  = [...new Set(Products.map((category_name)=> category_name.category ))] 


  return (
    <>
      <Header categories={categories} />  
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/cart' element={<CartPage/>}></Route>
          <Route path='/product/:id' element={<ProductDetail />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
