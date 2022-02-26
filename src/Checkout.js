import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Nav from "./Nav";

const Checkout = () => {
    const [checkout, setCheckout] = useState(
        JSON.parse(localStorage.getItem("cart")) || []
    );

    const handleDelete = (e) => {
        const index = e.currentTarget.dataset.index;
        const cart = JSON.parse(localStorage.getItem("cart"));
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        window.dispatchEvent(new Event("storage"));
        setCheckout(cart);
    };

    return (
        <div>
            <Nav />
            <div>in checkout</div>
            <div className="border border-black">
                <div className="grid grid-cols-4 font-bold">
                    <div>title</div>
                    <div>price</div>
                    <div>quantity</div>
                    <div>total</div>
                </div>
                <hr className="h-3" />
                {Object.values(checkout).map((val, index) => {
                    return (
                        <div key={index} className="grid grid-cols-4">
                            <div className="group">
                                {val.title}
                                <FontAwesomeIcon
                                    icon={faXmark}
                                    className="ml-4 text-red-600 invisible group-hover:visible hover:cursor-pointer"
                                    onClick={handleDelete}
                                    data-index={index}
                                />
                            </div>
                            <div>{val.price}</div>
                            <div>{val.quantity}</div>
                            <div>{val.total.toFixed(2)}</div>
                        </div>
                    );
                })}
            </div>
            <div className="grid grid-cols-4 mt-5">
                <div className="font-bold col-start-3">grand total:</div>
                <div className="col-start-4">
                    {Object.values(checkout)
                        .reduce((acc, curr) => acc + curr.total, 0)
                        .toFixed(2)}
                </div>
            </div>
        </div>
    );
};

export default Checkout;
