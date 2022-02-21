import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";
import { useState } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
    const itemList = [
        { title: "item 1", price: 10.99, picUrl: "https://picsum.photos/200" },
        { title: "item 2", price: 11.99, picUrl: "https://picsum.photos/200" },
        { title: "item 3", price: 12.99, picUrl: "https://picsum.photos/200" },
    ];

    const [cart, setCart] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const quantity = Number(e.target[0].value);
        if (quantity !== 0) {
            const item = Object.assign(
                {},
                itemList[Number(e.nativeEvent.path[2].attributes[0].value)]
            );
            item.quantity = quantity;
            item.total = item.quantity * item.price;
            setCart(cart.concat(item));
        }
    };

    const itemsInCart = () => {
        return cart.reduce((acc, currentVal) => acc + currentVal.quantity, 0);
    };

    return (
        <>
            <nav className="flex justify-end space-x-10 pt-7">
                <a href="/">home</a>
                <a href="/shop">shop</a>
                <Link to="/checkout" state={{ cart: cart }} href="/checkout">
                    {/* todo: add link to checkout */}
                    <FontAwesomeIcon icon={faCartShopping} />
                    {/* todo: if item quanitity is 1, then item else items */}
                    <div className="pl-2 inline-block">
                        ({itemsInCart()} items)
                    </div>
                </Link>
            </nav>
            <div className="grid grid-cols-3 mt-5 gap-8">
                <Card item={itemList[0]} data={0} submit={handleSubmit} />
                <Card item={itemList[1]} data={1} submit={handleSubmit} />
                <Card item={itemList[2]} data={2} submit={handleSubmit} />
                <Card item={itemList[2]} data={2} submit={handleSubmit} />
                <Card item={itemList[2]} data={2} submit={handleSubmit} />
                <Card item={itemList[2]} data={2} submit={handleSubmit} />
            </div>
        </>
    );
};

export default Shop;
