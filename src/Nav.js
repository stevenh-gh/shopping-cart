import Cart from "./Cart";

const Nav = () => {
    return (
        <nav className="flex justify-end space-x-10 pt-7">
            <a href="/">home</a>
            <a href="/shop">shop</a>
            <Cart />
        </nav>
    );
};

export default Nav;
