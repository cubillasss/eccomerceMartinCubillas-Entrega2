const products = [
    {
        id: '1',name: 'Ovejas',price: 500,category: 'Ovejas',img: 'https://cdn.shopify.com/s/files/1/0268/6861/files/sheep-4356668_960_720_grande.jpg?v=1592323019',stock: 20,description: 'Descripcion de Ovejas'
    },
    { id: '2', name: 'Vacas', price: 1200, category: 'Vacas', img: 'https://www.gastroactitud.com/wp-content/uploads/2021/07/frisona.jpg', stock: '15', description: 'Descripcion de Vacas'},
    { id: '3', name: 'Caballos', price: 2000, category: 'Caballos', img: 'https://revistamundoequino.com/wp-content/uploads/2018/08/purasangre2-760x490.jpg', stock: '12', description: 'Descripcion de Caballos'}
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