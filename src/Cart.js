import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Cart = ({ cart, itemsInCart }) => {
    return (
        <Link to="/checkout" state={{ cart: cart }}>
            <FontAwesomeIcon icon={faCartShopping} />
            {(() => {
                const numItems = itemsInCart();
                const item = numItems === 1 ? "item" : "items";
                return (
                    <div className="pl-2 inline-block">
                        ({numItems} {item})
                    </div>
                );
            })()}
        </Link>
    );
};

export default Cart;
