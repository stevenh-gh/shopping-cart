import { Link } from "react-router-dom";
import Cart from "./Cart";

const Nav = () => {
    return (
        <nav className="flex justify-between mt-2 mb-3">
            <Link to="/shopping-cart" className="text-3xl">
                Keyboards Town
            </Link>
            <div className="flex justify-end space-x-10 pt-7">
                <Link to="/shopping-cart">home</Link>
                <Link to="/shopping-cart/shop">shop</Link>
                <Cart />
            </div>
        </nav>
    );
};

export default Nav;
