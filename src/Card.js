const Card = (props) => {
    const { item, submit, data } = props;
    return (
        <div
            data-index={data}
            className="flex border border-black w-fit rounded-md hover:scale-105"
        >
            <img src={item.picUrl} className="p-2" alt="" />
            <div className="pl-2 pr-2 pt-2 space-y-3">
                <div>{item.title}</div>
                <form onSubmit={submit}>
                    <input
                        className="w-full"
                        type="number"
                        name="inputname"
                        id="inputid"
                        min={0}
                        placeholder={0}
                    />
                    <br />
                    <input
                        className="bg-gray-300 mt-3 w-full hover:cursor-pointer"
                        type="submit"
                        value="Add to cart"
                    />
                </form>
                <div>${item.price}</div>
            </div>
        </div>
    );
};

export default Card;
