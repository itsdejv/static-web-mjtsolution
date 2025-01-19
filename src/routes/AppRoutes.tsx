import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/pages/Home/Home.tsx";
import Contact from "../components/pages/Contact/Contact.tsx";

const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
        ],
    },
]);

export default router;
