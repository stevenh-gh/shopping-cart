import { useEffect } from "react";

const App = () => {
    useEffect(() => {
        document.getElementById("root").classList.add("container", "m-auto");
    }, []);
    return <h1 className="text-3xl">react app</h1>;
};

export default App;
