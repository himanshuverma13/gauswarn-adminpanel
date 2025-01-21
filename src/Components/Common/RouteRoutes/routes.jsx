// import React, { useContext, useEffect, useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import UserLogin from "../Login/login";
// import Home from "../../Pages/Home/home";
// import Registration from "../Registration/registration";
// import Order from "../../Pages/Order/order";
// import Feedback from "../../Pages/Feedback/feedback";
// import Product from "../../Pages/Product/product";
// import Contactinfo from "../../Pages/ContactInfo/contactinfo";
// import UserInfo from "../../Pages/UserInfo/userInfo";
// import Forgot from "../ForgotPass/forgot";
// import { UserContext } from "../useContext/useContext";

// const RouteRoutes = () => {
//   const { setUserLogin, UserLogins } = useContext(UserContext);
//   useEffect(() => {
//     let getvalue = JSON.parse(localStorage.getItem("userDetails") ?? "[]");
//     console.log('getvalue: ', getvalue);
//     setUserLogin(getvalue?.data?.message);
//   }, []);

//   return (
//     <>
//       <Router>
//         <Routes>
//           {!UserLogins ? (
//             <>
//               <Route path="/login" element={<UserLogin />}></Route>
//               <Route path="/register" element={<Registration />}></Route>
//               <Route path="/forgot" element={<Forgot />}></Route>
//             </>
//           ) : (
//             <>
//               <Route path="/home" element={<Home />}></Route>
//               <Route path="/product" element={<Product />}></Route>
//               <Route path="/order" element={<Order />}></Route>
//               <Route path="/feedback" element={<Feedback />}></Route>
//               <Route path="/contact-info" element={<Contactinfo />}></Route>
//               <Route path="/user-info" element={<UserInfo />}></Route>
//             </>
//           )}
//           <Route path="*" element={<UserLogin />} />
//         </Routes>
//       </Router>
//     </>
//   );
// };
// export default RouteRoutes;

import React, { useContext, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
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
    console.log("getvalue: ", getvalue);
    setUserLogin(getvalue?.data?.message);
  }, []);

  return (
    <Routes>
      {!UserLogins ? (
        <>
          <Route path="/login" element={<UserLogin />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/forgot" element={<Forgot />} />
          {/* If not logged in, redirect all other routes to login */}
          <Route path="*" element={<Navigate to="/login" />} />
        </>
      ) : (
        <>
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/order" element={<Order />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/contact-info" element={<Contactinfo />} />
          <Route path="/user-info" element={<UserInfo />} />
          {/* If logged in, redirect unknown routes to home */}
          <Route path="*" element={<Navigate to="/home" />} />
        </>
      )}
    </Routes>
  );
};

export default RouteRoutes;
