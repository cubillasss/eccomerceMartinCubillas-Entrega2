import ItemListContainer from './compounents/ItemListContainer/ItemListContainer'
import NavBar from './compounents/NavBar/Navbar'
import './App.css'
import ItemCount from './compounents/ItemCount/ItemCount'
import ItemDetailContainer from './compounents/ItemDetailCointeiner/ItemDetailCointainer'
import {BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Listado de productos'} />}>
          <Route path='/item' element={<ItemDetailContainer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
