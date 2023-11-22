import cart from './assets/cart.png'
import { useContext } from 'react'
import { cartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { totalQuantity } = useContext(cartContext)

    return (
        <Link to='/cart' className='cartWidget' style={{display: totalQuantity > 0 ? 'block' : 'none'}}  > 
            <img src='https://cdn-icons-png.flaticon.com/512/8146/8146003.png' alt="cart" width={50} />
            {totalQuantity}
        </Link>
    )
}

export default CartWidget