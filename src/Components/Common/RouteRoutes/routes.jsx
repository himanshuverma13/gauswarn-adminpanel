import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLogin from "../Login/login";
import Home from "../../Pages/Home/home";

const RouteRoutes = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<UserLogin />}></Route>
                    <Route path="/home" element={<Home />}></Route>

                </Routes>
            </Router>
        </>
    );
};
export default RouteRoutes;