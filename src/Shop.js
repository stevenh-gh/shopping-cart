import Card from "./Card";

const Shop = () => {
    return (
        <>
            <nav className="flex justify-end space-x-10 pt-7">
                <a href="/">home</a>
                <a href="/shop">shop</a>
            <h1 className="text-3xl">this is the shopping page</h1>
            <button className="border-2 border-black rounded-md">
                <a href="/">to homepage</a>
            </button>
            </nav>
            <Card/>
        </>
    );
};

export default Shop;
