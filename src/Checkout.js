import { useLocation } from "react-router-dom";

const Checkout = () => {
    const location = useLocation();
    const { cart } = location.state;
    console.log(cart);
    return (
        <div>
            <div>in checkout</div>
            <div className="border border-black">
                <div className="grid grid-cols-3 font-bold">
                    <div>title</div>
                    <div>quantity</div>
                    <div>total</div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
