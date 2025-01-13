import React, { useContext } from "react";

import { FaHome, FaLock, FaCartArrowDown, FaIdCard, FaClipboardCheck, FaClipboardList } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import { MdWidgets, MdContactPhone } from "react-icons/md";
import { Link, Links, useLocation } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";


// Images
import Logo from "../../Assets/images/logo/RAJLAXMI JAVIK PNG.png";
import Avatar from "../../Assets/images/logo/avtar24.png";
import { UserContext } from "../useContext/useContext";
const Sidebar = () => {
  const location = useLocation();
  console.log("location : ", location?.pathname);
    const { SidebarOpen } = useContext(UserContext);
    console.log('SidebarOpen: ', SidebarOpen);
  
  return (
    <>
      <nav className={`sidebar sidebar-offcanvas ${SidebarOpen ? "active" : " "}`} id="sidebar">
        <div>
        <div className="text-center sidebar-brand-wrapper d-flex align-items-center justify-content-center">
          <Link to={"/home"} className="sidebar-brand brand-logo">
            <img
              src={Logo}
              alt="logo"
            />
          </Link>
          <a
            className="sidebar-brand brand-logo-mini pt-3"
            href="index.html"
          >
            <img
              src={Logo}
              alt="logo"
            />
          </a>
        </div>
        <ul className="nav">
          <li className="nav-item nav-profile border-bottom">
            <a href="!#" className="nav-link">
              <div className="nav-profile-image">
                <img
                  src={Avatar}
                  alt="profile"
                />
                <span className="login-status online" />{" "}
              </div>
              <div className="nav-profile-text d-flex align-items-center">
                {/* <div className="pr-3"> */}
                  <h4 className="font-weight-medium mt-2">Henry Klein</h4>
                {/* </div> */}
              </div>
            </a>
          </li>
          <li className={`nav-item ${location?.pathname == "/home" ? "active" : ""
            }`}>
            <Link className="nav-link" to={"/home"}>
              <FaHome className="menu-icon" />
              <span className="menu-title">Dashboard</span>
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
            className={`nav-item ${location?.pathname == "/contact-info" ? "active" : ""
              }`}
          >
            <Link className="nav-link" to={"/contact-info"}>
              <MdContactPhone className="menu-icon" />
              <span className="menu-title">Contact Info</span>
            </Link>
          </li>
          <li
            className={`nav-item ${location?.pathname == "/user-info" ? "active" : ""
              }`}
          >
            <Link className="nav-link" to={"/user-info"}>
              <FaIdCard className="menu-icon" />
              <span className="menu-title">User Info</span>
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
          {/* <li className={`nav-item ${location?.pathname == "/login" ? "active" : ""
            }`}>
            <Link to={"/login"}
              className="nav-link"
            >
              <IoMdLogIn className="menu-icon" />
              <span className="menu-title">Login</span>
            </Link>
          </li> */}
          {/* <li className={`nav-item ${location?.pathname == "/register" ? "active" : ""
            }`}>
            <Link to={"/register"}
              className="nav-link"
            >
              <FaLock className="menu-icon" />
              <span className="menu-title ms-3">Registration</span>
            </Link>
          </li> */}
          <li className={`nav-item mt-5 ${location?.pathname == "/register" ? "active" : ""
            }`}>
            <Link to={"/login"} className="nav-link">
              <BiLogOut className="menu-icon" />
              <span className="text-white menu-title bg-primary py-2 px-3 rounded">LOGOUT</span>
            </Link>
          </li>
        </ul>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
