import Cart from "./Cart";

const Nav = ({ cart, itemsInCart }) => {
    return (
        <nav className="flex justify-end space-x-10 pt-7">
            <a href="/">home</a>
            <a href="/shop">shop</a>
            <Cart cart={cart} itemsInCart={itemsInCart} />
        </nav>
    );
};

export default Nav;
