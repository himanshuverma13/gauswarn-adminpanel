import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLogin from "../Login/login";
import Home from "../../Pages/Home/home";
import Registration from "../Registration/registration";
import Order from "../../Pages/Order/order";
import Feedback from "../../Pages/Feedback/feedback";
import Product from "../../Pages/Product/product";
import Contactinfo from "../../Pages/ContactInfo/contactinfo";
import UserInfo from "../../Pages/UserInfo/userInfo";
import Forgot from "../ForgotPass/forgot";
import { UserContext } from "../useContext/useContext";

const RouteRoutes = () => {
  const { setUserLogin, UserLogins } = useContext(UserContext);
  useEffect(() => {
    let getvalue = JSON.parse(localStorage.getItem("userDetails") ?? "[]");
    setUserLogin(getvalue?.message);
  }, []);

  return (
    <>
      <Router>
        <Routes>
          {!UserLogins ? (
            <>
              <Route path="/login" element={<UserLogin />}></Route>
              <Route path="/register" element={<Registration />}></Route>
              <Route path="/forgot" element={<Forgot />}></Route>
            </>
          ) : (
            <>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/product" element={<Product />}></Route>
              <Route path="/order" element={<Order />}></Route>
              <Route path="/feedback" element={<Feedback />}></Route>
              <Route path="/contact-info" element={<Contactinfo />}></Route>
              <Route path="/user-info" element={<UserInfo />}></Route>
            </>
          )}
          <Route path="*" element={<UserLogin />} />
        </Routes>
      </Router>
    </>
  );
};
export default RouteRoutes;
