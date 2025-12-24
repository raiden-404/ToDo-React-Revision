import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ToDo from "../pages/ToDo";
import Home from "../pages/Home";

const Router = createBrowserRouter([
    {
        path : "/",
        element : <App />,
        children : [
            {
                index : true,
                element : <Home />
            },
            {
                path : "/todo",
                element : <ToDo />
            }
        ]
    }
]);
export default Router;