import 'Cart.css'
import { useContext, useEffect } from 'react'
import {CartContext}  from '../../context/CartContext'
import Item from 'Item'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext)

    if(totalQuantity === 0) {
        return (
            <div>
                <h1> No hay items en el carrito </h1>
                <link to='/' className='Option'>Productos</link>
            </div>
            
        )
    }

    return (
        <div>
            { cart.map(p => <Item key={p.id} {...p} />)}
            <h3>Total: ${Total}</h3>
            <button onClick={() => clearCart()} className="Buttom"></button>
            <link to='/checkout' className='Option' >Checkout</link>
        </div>
    )
}