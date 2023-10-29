import { useState, useEffect } from "react"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [products, setProducts] = useState(null)

    useEffect(() => {
        getProductById('3')
            .then(response => {
                setProduct(response)

            })
    }, [])

    return (
        <div>
            <h1>Detalle de producto</h1>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer