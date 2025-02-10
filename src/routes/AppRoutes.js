import { jsx as _jsx } from "react/jsx-runtime";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/pages/Home/Home";
import Contact from "../components/pages/Contact/Contact";
import AirConditioning from "@/components/pages/Services/AirConditioning";
import SolarPanels from "@/components/pages/Services/SolarPanels";
import ConstructionWork from "@/components/pages/Services/ConstructionWork";
const router = createBrowserRouter([
    {
        path: "/",
        element: _jsx(App, {}),
        children: [
            {
                path: "/",
                element: _jsx(Home, {}),
            },
            {
                path: "/contact",
                element: _jsx(Contact, {}),
            },
            {
                path: "/air-conditioning",
                element: _jsx(AirConditioning, {}),
            },
            {
                path: "/solar-panels",
                element: _jsx(SolarPanels, {}),
            },
            {
                path: "/construction-work",
                element: _jsx(ConstructionWork, {}),
            },
        ],
    },
]);
export default router;
