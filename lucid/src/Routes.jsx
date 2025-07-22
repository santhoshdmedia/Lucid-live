import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import { Gallery } from "./pages/Gallery";
import {
  
  Gearoil,
  ProductLayout,
  HydraulicOilProductLayout,
  AutomotiveGreaseProductLayout
} from "./pages/products/Product";

const routes = [
  {
    path: "/",
    element: <Home />,
    exact: true,
  },
  {
    path: "/automotive-engine-oil",
    element: <ProductLayout />,
  },
  {
    path: "/hydraulic-oil",
    element: <HydraulicOilProductLayout />,
  },
  {
    path: "/gear-oil",
    element: <Gearoil />,
  },
  {
    path: "/Automotive-grease",
    element: <AutomotiveGreaseProductLayout />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/infrastructure",
    element: <Gallery />,
  },
  {
    path: "*",
    element: <NotFound />, // Changed from <Home /> to <NotFound />
  },
];

export default routes;
