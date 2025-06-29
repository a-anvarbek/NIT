import { Route, Routes } from "react-router";

import ROUTES from "./routes";

// Import Pages
import Home from "../pages/home/Home";
import AboutUs from "../pages/aboutUs/About";
import Cars from "../pages/cars/Cars";
import CarsDetail from "../pages/carsDetail/CarsDetail";
import Faqs from "../pages/faqs/Faqs";

const MainRouter = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.ABOUT} element={<AboutUs />} />
      <Route path={ROUTES.CARS} element={<Cars />} />
      <Route path={ROUTES.CARS_DETAIL} element={<CarsDetail />} />
      <Route path={ROUTES.FAQS} element={<Faqs />} />
    </Routes>
  );
};

export default MainRouter;
