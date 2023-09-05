import { Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './components/home';
import CartPage from './components/cart';
import Header from './components/header';

function App() {
  return (
    <>
      <Header/>  
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/cart' element={<CartPage/>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
