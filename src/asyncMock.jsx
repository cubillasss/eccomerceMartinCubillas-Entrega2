const products = [
    {
        id: '1',
        name: 'Ovejas',
        price: 1500,
        category: 'Ovejas',
        img: './assets/cart.png ',
        stock: 20,
        description: 'Descripcion de Ovejas'
    },
    { id: '2', name: 'Vacas', price: 1000, category: 'Vacas', img: '/assets.chair.jpg', stock: '15', description: 'Descripcion de Vacas'},
    { id: '3', name: 'Caballos', price: 1200, category: 'Caballos', img: '/assets.lamp.jpg', stock: '12', description: 'Descripcion de Caballos'}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
        })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}