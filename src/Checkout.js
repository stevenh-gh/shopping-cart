import { useLocation } from "react-router-dom";

const Checkout = () => {
    const location = useLocation();
    const { cart } = location.state;
    console.log(cart);
    return (
        <div>
            <div>in checkout</div>
        </div>
    );
};

export default Checkout;
