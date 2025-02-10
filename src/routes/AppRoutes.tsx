import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/pages/Home/Home";
import Contact from "../components/pages/Contact/Contact";
import AirConditioning from "@/components/pages/Services/AirConditioning";
import SolarPanels from "@/components/pages/Services/SolarPanels";
import ConstructionWork from "@/components/pages/Services/ConstructionWork";

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

      {
        path: "/air-conditioning",
        element: <AirConditioning />,
      },

      {
        path: "/solar-panels",
        element: <SolarPanels />,
      },

      {
        path: "/construction-work",
        element: <ConstructionWork />,
      },
    ],
  },
]);

export default router;
