import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
// import About from "../pages/About/About";
// import Services from "../pages/Services/Services";
import Contact from "../pages/Contact/Contact";
import NotFound from "../pages/NotFound/NotFound";
import About from "../pages/About/About";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

      <Route path="/contact" element={<Contact />} />

      {/* <Route path="/services" element={<Services />} />


{/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
