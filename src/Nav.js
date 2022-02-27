import { Link } from "react-router-dom";
import Cart from "./Cart";

const Nav = () => {
    return (
        <nav className="flex justify-between mt-2 mb-3">
            <Link to="/" className="text-3xl">
                Keyboards Town
            </Link>
            <div className="flex justify-end space-x-10 pt-7">
                <a href="/">home</a>
                <a href="/shop">shop</a>
                <Cart />
            </div>
        </nav>
    );
};

export default Nav;
