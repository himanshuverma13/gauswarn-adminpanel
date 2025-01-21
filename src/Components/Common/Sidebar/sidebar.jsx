import React, { useContext, useState } from "react";

import {
  FaHome,
  FaLock,
  FaCartArrowDown,
  FaIdCard,
  FaClipboardCheck,
  FaClipboardList,
} from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import { MdWidgets, MdContactPhone } from "react-icons/md";
import {
  Link,
  Links,
  NavLink,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { BiLogOut } from "react-icons/bi";

// Images
import Logo from "../../Assets/images/logo/RAJLAXMI JAVIK PNG.png";
import Avatar from "../../Assets/images/logo/avtar24.png";
import { UserContext } from "../useContext/useContext";
const Sidebar = () => {
  const location = useLocation();
  const [logoutModal, setLogoutModal] = useState(false);
  const { SidebarOpen, setSidebarOpen } = useContext(UserContext);

  const userName = localStorage?.getItem('userName' ?? '');

  const handleLogout = () => {
    localStorage.removeItem("userDetails");
    window.location = "/login"
  };

  return (
    <>
      <nav
        className={`sidebar sidebar-offcanvas ${SidebarOpen ? "active" : " "}`}
        id="sidebar"
      >
        <div>
          <div className="text-center sidebar-brand-wrapper d-flex align-items-center justify-content-center">
            <Link to={"/home"} className="sidebar-brand brand-logo">
              <img src={Logo} alt="logo" />
            </Link>
            <span className="sidebar-brand brand-logo-mini pt-3">
              <img src={Logo} alt="logo" />
            </span>
          </div>
          <ul className="nav">
            <li className="nav-item nav-profile border-bottom">
              <span className="nav-link">
                <div className="nav-profile-image">
                  <img src={Avatar} alt="profile" />
                  <span className="login-status online" />{" "}
                </div>
                <div className="nav-profile-text d-flex align-items-center">
                  {/* <div className="pr-3"> */}
                  <h4 className="font-weight-medium mt-2">{userName || "unknown"}</h4>
                  {/* </div> */}
                </div>
              </span>
            </li>
            <li
              className={`nav-item ${location?.pathname == "/home" ? "active" : ""
                }`}
            >
              <Link className="nav-link" to={"/home"} onClick={() => setSidebarOpen(!SidebarOpen)}>
                <FaHome className="menu-icon" />
                <span className="menu-title">Dashboard</span>
              </Link>
            </li>
            <li
              className={`nav-item ${location?.pathname == "/order" ? "active" : ""
                }`}
            >
              <Link className="nav-link" to={"/order"} onClick={() => setSidebarOpen(!SidebarOpen)}>
                <FaClipboardCheck className="menu-icon" />
                <span className="menu-title">Order Details</span>
              </Link>
            </li>
            <li
              className={`nav-item ${location?.pathname == "/product" ? "active" : ""
                }`}
            >
              <Link className="nav-link" to={"/product"} onClick={() => setSidebarOpen(!SidebarOpen)}>
                <FaCartArrowDown className="menu-icon" />
                <span className="menu-title">Product</span>
              </Link>
            </li>
            <li
              className={`nav-item ${location?.pathname == "/contact-info" ? "active" : ""
                }`}
            >
              <Link className="nav-link" to={"/contact-info"} onClick={() => setSidebarOpen(!SidebarOpen)}>
                <MdContactPhone className="menu-icon" />
                <span className="menu-title">Contact Info</span>
              </Link>
            </li>
            <li
              className={`nav-item ${location?.pathname == "/user-info" ? "active" : ""
                }`}
            >
              <Link className="nav-link" to={"/user-info"} onClick={() => setSidebarOpen(!SidebarOpen)}>
                <FaIdCard className="menu-icon" />
                <span className="menu-title">User Info</span>
              </Link>
            </li>
            <li
              className={`nav-item ${location?.pathname == "/feedback" ? "active" : ""
                }`}
            >
              <Link className="nav-link" to={"/feedback"} onClick={() => setSidebarOpen(!SidebarOpen)}>
                <FaClipboardList className="menu-icon" />
                <span className="menu-title">Feedback</span>
              </Link>
            </li>
            {/* <li className={`nav-item ${location?.pathname == "/login" ? "active" : ""
            }`} onClick={()=> setSidebarOpen(!SidebarOpen)}>
            <Link to={"/login"}
              className="nav-link"
            >
              <IoMdLogIn className="menu-icon" />
              <span className="menu-title">Login</span>
            </Link>
          </li> */}
            {/* <li className={`nav-item ${location?.pathname == "/register" ? "active" : ""
            }`} onClick={()=> setSidebarOpen(!SidebarOpen)}>
            <Link to={"/register"}
              className="nav-link"
            >
              <FaLock className="menu-icon" />
              <span className="menu-title ms-3">Registration</span>
            </Link>
          </li> */}
            <li
              className={`nav-item logout-btn${location?.pathname == "/register" ? "active" : ""
                }`}
            >
              <div onClick={() => setLogoutModal(true)}  className="nav-link">
                <BiLogOut className="menu-icon" />
                <span className="text-white menu-title bg-primary py-2 px-3 rounded">
                  LOGOUT
                </span>
              </div>
            </li>
          </ul>
        </div>
        </nav>



        {/* Delete Confirmation Modal */}
        {logoutModal && (
          <div className="modal show d-block" tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Logout Confirmation</h5>
                  <button
                    type="button"
                    className="close"
                    onClick={() => setLogoutModal(false)}
                  >
                    <span>&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <p>Are you sure you want to Logout?</p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => handleLogout()} 
                  >
                    Confirm
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setLogoutModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
    </>
  );
};

export default Sidebar;
