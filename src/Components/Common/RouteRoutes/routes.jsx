import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLogin from "../Login/login";
import Home from "../../Pages/Home/home";
import ProductdetailCards from "../ProductDetailscards/productdetails";
import Registration from "../Registration/registration";

const RouteRoutes = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/login" element={<UserLogin />}></Route>
                    <Route path="/register" element={<Registration />}></Route>
                    <Route path="/cards" element={<ProductdetailCards />}></Route>


                </Routes>
            </Router>
        </>
    );
};
export default RouteRoutes;