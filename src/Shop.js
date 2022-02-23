import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";
import { useState } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
    const itemList = [
        {
            title: "ASUS ROG Strix Flare Pnk (Cherry MX Brown) Limited Edition Mechanical Gaming Keyboard with Switches, Aura Sync RGB Lighting, Customizable Badge, USB Pass Through and Media CONTROLS",
            price: 129.99,
            picUrl: "https://m.media-amazon.com/images/I/81StA5Ss8BL._AC_UY218_.jpg",
        },
        {
            title: "Corsair K95 RGB Platinum XT Mechanical Gaming Keyboard, Backlit RGB LED, Cherry MX Speed RGB Silver, Black (CH-9127414-NA)",
            price: 174.99,
            picUrl: "https://m.media-amazon.com/images/I/714yy-QPysL._AC_UY218_.jpg",
        },
        {
            title: "Logitech 920-009388 G Pro Mechanical Wired Gaming Keyboard GX Blue Clicky Switch + LIGHTSYNC RGB Backlit Keys (Renewed)",
            price: 67.95,
            picUrl: "https://m.media-amazon.com/images/I/41OZYRq6cVL._AC_UY218_.jpg",
        },
        {
            title: "SteelSeries Apex Pro Mechanical Gaming Keyboard – Adjustable Actuation Switches – World’s Fastest Mechanical Keyboard – OLED Smart Display – RGB Backlit",
            price: 149.99,
            picUrl: "https://m.media-amazon.com/images/I/81yOuAUQAiL._AC_UY218_.jpg",
        },
        {
            title: "ASUS ROG Strix Scope TKL Electro Punk Mechanical Gaming Keyboard | Cherry MX Red Switches | 2X Wider Ctrl Key for Greater FPS Precision | Gaming Keyboard for PC | Aura Sync RGB Lighting, Quick-Toggle",
            price: 109.99,
            picUrl: "https://m.media-amazon.com/images/I/81f3w3TrFjL._AC_UY218_.jpg",
        },
        {
            title: "Logitech - G413 Mechanical Gaming Keyboard - Silver (Renewed)",
            price: 42.0,
            picUrl: "https://m.media-amazon.com/images/I/51Mqthj0HdL._AC_UY218_.jpg",
        },
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
            </nav>
            <div className="grid grid-cols-3 mt-5 gap-8">
                <Card item={itemList[0]} data={0} submit={handleSubmit} />
                <Card item={itemList[1]} data={1} submit={handleSubmit} />
                <Card item={itemList[2]} data={2} submit={handleSubmit} />
                <Card item={itemList[3]} data={3} submit={handleSubmit} />
                <Card item={itemList[4]} data={4} submit={handleSubmit} />
                <Card item={itemList[5]} data={5} submit={handleSubmit} />
            </div>
        </>
    );
};

export default Shop;
