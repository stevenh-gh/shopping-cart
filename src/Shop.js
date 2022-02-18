import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";
import { useState } from "react";

const Shop = () => {
    const itemList = [
        { title: "item 1", price: 10.99, picUrl: "https://picsum.photos/200" },
        { title: "item 2", price: 11.99, picUrl: "https://picsum.photos/200" },
        { title: "item 3", price: 12.99, picUrl: "https://picsum.photos/200" },
    ];

    const [cart, setCart] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // const dataIndex = Number(e.nativeEvent.path[2].attributes[0].value);
        // const quantity = Number(e.target[0].value);
        // todo: if quantity is 0, do nothing
        const item = Object.assign(
            {},
            itemList[Number(e.nativeEvent.path[2].attributes[0].value)]
        );
        item.quantity = Number(e.target[0].value);
        setCart(cart.concat(item));
    };

    const itemsInCart = () => {
        return cart.reduce((acc, currentVal) => acc + currentVal.quantity, 0);
    };

    return (
        <>
            <nav className="flex justify-end space-x-10 pt-7">
                <a href="/">home</a>
                <a href="/shop">shop</a>
                <div className="mr-2">
                    {/* todo: add link to checkout */}
                    <FontAwesomeIcon icon={faCartShopping} />
                    {/* todo: if item quanitity is 1, then item else items */}
                    <div className="pl-2 inline-block">
                        ({itemsInCart()} items)
                    </div>
                </div>
            </nav>
            <Card item={itemList[0]} data={0} submit={handleSubmit} />
        </>
    );
};

export default Shop;
