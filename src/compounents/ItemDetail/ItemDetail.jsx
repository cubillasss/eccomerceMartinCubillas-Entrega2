import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ name, img, price, stock, descriprion}) => {
    return (
        <div >
            <p>{name}</p>
            <img src={img} style={{ width: 100 }} />
            <p>${price}</p>
            <p>Descriprion: {descriprion} </p>
            {/* <ItemCount stock={stock}/> */}
            <ItemCount stock={10} onAdd={(quantity) => console.log('cantidad agregada: ' + quantity)}/>
        </div>
    )
}

export default ItemDetail