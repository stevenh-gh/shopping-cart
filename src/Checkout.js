import { useLocation } from "react-router-dom";

const Checkout = () => {
    const location = useLocation();
    const { cart } = location.state;
    console.log(cart);
    return (
        <div>
            <div>in checkout</div>
            <div className="border border-black">
                <div className="grid grid-cols-4 font-bold">
                    <div>title</div>
                    <div>price</div>
                    <div>quantity</div>
                    <div>total</div>
                </div>
                <hr className="h-3" />
                {Object.values(cart).map((val, index) => {
                    return (
                        <div key={index} className="grid grid-cols-4">
                            <div>{val.title}</div>
                            <div>{val.price}</div>
                            <div>{val.quantity}</div>
                            <div>{val.total.toFixed(2)}</div>
                        </div>
                    );
                })}
            </div>
            <div className="grid grid-cols-4">
                <div className="font-bold col-start-3">grand total:</div>
                <div className="col-start-4">
                    {Object.values(cart)
                        .reduce((acc, curr) => acc + curr.total, 0)
                        .toFixed(2)}
                </div>
            </div>
        </div>
    );
};

export default Checkout;
