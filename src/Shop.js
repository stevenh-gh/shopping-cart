import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";

const Shop = () => {
    return (
        <>
            <nav className="flex justify-end space-x-10 pt-7">
                <a href="/">home</a>
                <a href="/shop">shop</a>
                <div className="mr-2">
                    {/* todo: add link to checkout */}
                    <FontAwesomeIcon icon={faCartShopping} />
                </div>
            </nav>
            <Card/>
        </>
    );
};

export default Shop;
