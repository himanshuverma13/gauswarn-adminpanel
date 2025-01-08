import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLogin from "../Login/login";
import Home from "../../Pages/Home/home";
import Registration from "../Registration/registration";
import Order from "../../Pages/Order/order";
import Feedback from "../../Pages/Feedback/feedback";
import Product from "../../Pages/Product/product";
import Customerinfo from "../../Pages/CustomerInfo/customerinfo";

const RouteRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<UserLogin />}></Route>
          <Route path="/register" element={<Registration />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/order" element={<Order />}></Route>
          <Route path="/feedback" element={<Feedback />}></Route>
          <Route path="/customer" element={<Customerinfo />}></Route>

        </Routes>
      </Router>
    </>
  );
};
export default RouteRoutes;
