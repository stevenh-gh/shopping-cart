import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";

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

    return (
        <>
            <nav className="flex justify-end space-x-10 pt-7">
                <a href="/">home</a>
                <a href="/shop">shop</a>
                <div className="mr-2">
                    {/* todo: add link to checkout */}
                    <FontAwesomeIcon icon={faCartShopping} />
                </div>
            </nav>
            <Card/>
        </>
    );
};

export default Shop;
