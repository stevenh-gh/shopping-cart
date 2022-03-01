import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
    const [numItems, setNumItems] = useState(
        localStorage.getItem("numItems") || 0
    );

    // https://stackoverflow.com/a/61178371
    useEffect(() => {
        const checkCart = () => {
            console.log("in check cart");
            const json = JSON.parse(localStorage.getItem("cart"));
            if (json === null) {
                setNumItems(0);
            } else {
                const num = json.reduce(
                    (acc, currentVal) => acc + currentVal.quantity,
                    0
                );
                setNumItems(num);
            }
        };
        window.addEventListener("storage", checkCart);
        return () => {
            window.removeEventListener("storage", checkCart);
        };
    }, []);

    useEffect(() => {
        localStorage.setItem("numItems", numItems);
    });

    return (
        <Link to="/shopping-cart/checkout">
            <FontAwesomeIcon icon={faCartShopping} />
            {(() => {
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
