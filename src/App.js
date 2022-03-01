import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Nav from "./Nav";

const App = () => {
    return (
        <>
            <Nav />
            <div className="grid grid-cols-12 grid-rows-[repeat(4, auto)] gap-1">
                <h1 className="text-3xl col-span-4 col-start-5">
                    Welcome to Keyboards Town!
                </h1>
                <Link
                    className="bg-blue-400 p-4 text-white rounded-md hover:bg-blue-300 row-start-2 col-span-5 col-start-4 text-center mt-2 mb-5"
                    to="/shop"
                >
                    Click here to begin shopping!
                    <FontAwesomeIcon icon={faCartShopping} className="ml-3" />
                </Link>
                <figure className="row-start-3 col-span-5 col-start-4 m-auto">
                    <img src={require("./bg.jpg")} className="h-96" alt="" />
                    <figcaption className="text-sm">
                        Photo by{" "}
                        <a href="https://unsplash.com/@nuclear?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                            Bernin Uben
                        </a>{" "}
                        on{" "}
                        <a href="https://unsplash.com/s/photos/keyboards?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                            Unsplash
                        </a>
                    </figcaption>
                </figure>
            </div>
        </>
    );
};

export default App;
