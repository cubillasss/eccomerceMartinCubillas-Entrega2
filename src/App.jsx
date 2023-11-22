import ItemListContainer from './compounents/ItemListContainer/ItemListContainer'
import NavBar from './compounents/NavBar/Navbar'
import './App.css'
import ItemCount from './compounents/ItemCount/ItemCount'
import ItemDetailContainer from './compounents/ItemDetailCointeiner/ItemDetailCointainer'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from '../compounents/Cart/Cart'

import { CartProvider } from './context/CartContext'

function App() {
  return (
    <div className='App' >
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
          <Routes>
            
            <Route path='/' element={<ItemListContainer greeting={'Todos nuestros productos'}/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos por categoria'}/>}/>
            <Route path='/item/itemId' element={<ItemDetailContainer />}/>
            <Route path='/cart' element={<Cart/>} /> 
            <Route path='*' element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App
