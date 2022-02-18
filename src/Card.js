const Card = (props) => {
    const { item, submit, data } = props;
    return (
        <div data-index={data} className="flex border border-black w-fit">
            {/* todo: img src, name, description, etc will be replaced with props */}
            <img src={item.picUrl} alt="" />
            <div className="pl-2 pr-2">
                <div>{item.title}</div>
                <form onSubmit={submit}>
                    <input
                        type="number"
                        name="inputname"
                        id="inputid"
                        min={0}
                        placeholder={0}
                    />
                    <br />
                    {/* todo: style input button */}
                    <input type="submit" value="Add to cart" />
                </form>
                <div>${item.price}</div>
            </div>
        </div>
    );
};

export default Card;
