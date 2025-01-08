import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLogin from "../Login/login";
import Home from "../../Pages/Home/home";
import ProductdetailCards from "../ProductDetailscards/productdetails";
import Registration from "../Registration/registration";
import Order from "../../Pages/Order/order";
import Feedback from "../../Pages/Feedback/feedback";

const RouteRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<UserLogin />}></Route>
          <Route path="/register" element={<Registration />}></Route>
          <Route path="/cards" element={<ProductdetailCards />}></Route>
          <Route path="/order" element={<Order />}></Route>
          <Route path="/feedback" element={<Feedback />}></Route>
        </Routes>
      </Router>
    </>
  );
};
export default RouteRoutes;
