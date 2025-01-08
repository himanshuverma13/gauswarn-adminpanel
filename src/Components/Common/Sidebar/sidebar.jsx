import React from "react";

import { FaHome, FaLock, FaCartArrowDown, FaIdCard, FaClipboardCheck, FaClipboardList } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import { MdWidgets } from "react-icons/md";
import { Link, Links, useLocation } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";

// Images
import Logo from "../../Assets/images/logo/RAJLAXMI JAVIK PNG.png";
const Sidebar = () => {
  const location = useLocation();
  console.log("location : ", location?.pathname);
  return (
    <>
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <div className="text-center sidebar-brand-wrapper d-flex align-items-center">
          <Link to={"/"} className="sidebar-brand brand-logo">
            <img
              src={Logo}
              alt="logo"
            />
          </Link>
          <a
            className="sidebar-brand brand-logo-mini pl-4 pt-3"
            href="index.html"
          >
            <img
              src="/demo/breeze/react/template/demo_1/preview/static/media/logo-mini.f54f105e.svg"
              alt="logo"
            />
          </a>
        </div>
        <ul className="nav">
          <li className="nav-item nav-profile">
            <a href="!#" className="nav-link">
              <div className="nav-profile-image">
                <img
                  src="/demo/breeze/react/template/demo_1/preview/static/media/face1.c80e465a.jpg"
                  alt="profile"
                />
                <span className="login-status online" />{" "}
              </div>
              <div className="nav-profile-text d-flex align-items-center">
                <div className="pr-3">
                  <div className="font-weight-medium mb-2">Henry Klein</div>
                  <div>$8,753.00</div>
                </div>
                <div>
                  <span className="badge badge-danger text-white rounded">
                    3
                  </span>
                </div>
              </div>
            </a>
          </li>
          <li className={`nav-item ${location?.pathname == "/" ? "active" : ""
            }`}>
            <Link className="nav-link" to={"/"}>
              <FaHome className="menu-icon" />
              <span className="menu-title">Dashboard</span>
            </Link>
          </li>
          <li className="nav-item menu-items">
            <Link to={""}
              className="nav-link"
            >
              <i className="mdi mdi-translate menu-icon" />
              <span className="menu-title">RTL</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to={""}
              className="nav-link"
            >
              <MdWidgets className="menu-icon" />
              <span className="menu-title">Widgets</span>
            </Link>
          </li>
          <li
            className={`nav-item ${location?.pathname == "/order" ? "active" : ""
              }`}
          >
            <Link className="nav-link" to={"/order"}>
              <FaClipboardCheck className="menu-icon" />
              <span className="menu-title">Order Details</span>
            </Link>
          </li>
          <li
            className={`nav-item ${location?.pathname == "/product" ? "active" : ""
              }`}
          >
            <Link className="nav-link" to={"/product"}>
              <FaCartArrowDown className="menu-icon" />
              <span className="menu-title">Product</span>
            </Link>
          </li>
          <li
            className={`nav-item ${location?.pathname == "/customer" ? "active" : ""
              }`}
          >
            <Link className="nav-link" to={"/customer"}>
              <FaIdCard className="menu-icon" />
              <span className="menu-title">Customer Info</span>
            </Link>
          </li>
          <li
            className={`nav-item ${location?.pathname == "/feedback" ? "active" : ""
              }`}
          >
            <Link className="nav-link" to={"/feedback"}>
              <FaClipboardList className="menu-icon" />
              <span className="menu-title">Feedback</span>
            </Link>
          </li>
          <li className={`nav-item ${location?.pathname == "/login" ? "active" : ""
            }`}>
            <Link to={"/login"}
              className="nav-link"
            >
              <IoMdLogIn className="menu-icon" />
              <span className="menu-title">Login</span>
            </Link>
          </li>
          <li className={`nav-item ${location?.pathname == "/register" ? "active" : ""
            }`}>
            <Link to={"/register"}
              className="nav-link"
            >
              <FaLock className="menu-icon" />
              <span className="menu-title ms-3">Registration</span>
            </Link>
          </li>
          <li className={`nav-item mt-5 ${location?.pathname == "/register" ? "active" : ""
            }`}>
            <Link to={"/login"} className="nav-link">
              <BiLogOut className="menu-icon" />
              <span className=" text-white menu-title">LOGOUT</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
