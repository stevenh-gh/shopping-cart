import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Nav from "./Nav";

const App = () => {
    return (
        <>
            <Nav />
            <div className="grid grid-cols-12 grid-rows-2 gap-1">
                <h1 className="text-3xl col-span-4 col-start-5">
                    Welcome to Keyboards Town!
                </h1>
                <Link
                    className="bg-blue-400 p-4 text-white rounded-md hover:bg-blue-300 row-start-2 col-span-5 col-start-4 text-center mt-2"
                    to="/shop"
                >
                    Click here to begin shopping!
                    <FontAwesomeIcon icon={faCartShopping} className="ml-3" />
                </Link>
            </div>
        </>
    );
};

export default App;
