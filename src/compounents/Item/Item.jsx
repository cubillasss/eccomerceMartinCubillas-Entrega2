import { Link } from "react-router-dom"

const Item = ({ name, img, price}) => {
    return (
        <div >
            <p>{name}</p>
            <img src={img} style={{ width: 400 }} />
            <p>${price}</p>
            <Link to='/item'> Ver Detalles </Link>
        </div>
    )
}

export default Item

