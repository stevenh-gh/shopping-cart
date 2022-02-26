import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from "./Nav";

const Checkout = () => {
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
                {Object.values(JSON.parse(localStorage.getItem("cart"))).map(
                    (val, index) => {
                        return (
                            <div key={index} className="grid grid-cols-4">
                                <div className="group">
                                    {val.title}
                                    <FontAwesomeIcon
                                        icon={faXmark}
                                        className="ml-4 text-red-600 invisible group-hover:visible hover:cursor-pointer"
                                    />
                                </div>
                                <div>{val.price}</div>
                                <div>{val.quantity}</div>
                                <div>{val.total.toFixed(2)}</div>
                            </div>
                        );
                    }
                )}
            </div>
            <div className="grid grid-cols-4 mt-5">
                <div className="font-bold col-start-3">grand total:</div>
                <div className="col-start-4">
                    {Object.values(JSON.parse(localStorage.getItem("cart")))
                        .reduce((acc, curr) => acc + curr.total, 0)
                        .toFixed(2)}
                </div>
            </div>
        </div>
    );
};

export default Checkout;
