import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h1>Ecommerce</h1>
            <section>
                <button>Vacas</button>
                <button>Caballos</button>
                <button>Ovejas</button>
            </section>

            <CartWidget  />
            
        </nav>
    )
}

export default NavBar