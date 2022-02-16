const Card = () => {
    return (
        <div className="flex border border-black w-fit">
            {/* todo: img src, name, description, etc will be replaced with props */}
            <img src="https://picsum.photos/200" alt="" />
            <div>
                <div>item name</div>
                <div>description</div>
                <form>
                    <input type="number" name="" id="" min={0} value={0} />
                    <br />
                    {/* todo: style input button */}
                    <input type="submit" value="Add to cart" />
                </form>
            </div>
        </div>
    );
};

export default Card;
