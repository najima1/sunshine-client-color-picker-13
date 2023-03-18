import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ColorPicker from "../Pages/ColorPicker/ColorPicker";
import Colors from "../Pages/Colors/Colors";
import Color_category from "../Pages/Color_category/Color_category";
import Documentation from "../Pages/Documentation/Documentation";
import Error_page from "../Pages/Error_page/Error_page";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <Error_page />,
        children: [
            {
                path: "/",
                element: <Color_category />
            },
            {
                path: "/home",
                element: <Color_category />
            },
            {
                path: "/documentation",
                element: <Documentation />
            },
            {
                path: "/color_piker",
                element: <ColorPicker />
            },
            {
                path: "/color/:color_name",
                element: <Colors />
            }
        ]
    }
])

export default router