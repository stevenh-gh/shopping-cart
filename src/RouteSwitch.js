import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Shop from "./Shop";

const RouteSwitch = () => {
    useEffect(() => {
        document.body.classList.add("bg-slate-200");
        document.getElementById("root").classList.add("container", "m-auto");
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/shop" element={<Shop />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;