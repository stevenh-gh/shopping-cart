import { Link } from "react-router-dom";
import Cart from "./Cart";

const Nav = () => {
    return (
        <nav className="flex justify-between mt-2 mb-3">
            <Link to="/shopping-cart" className="text-3xl">
                Keyboards Town
            </Link>
            <div className="flex justify-end space-x-10 pt-7">
                <a href="/shopping-cart">home</a>
                <a href="/shopping-cart/shop">shop</a>
                <Cart />
            </div>
        </nav>
    );
};

export default Nav;
