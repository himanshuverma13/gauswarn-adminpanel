import React, { useState } from "react";

// import image
import logo from "../../Assets/images/logo-mini.svg";
import img1 from "../../Assets/images/faces/face4.jpg";
import img2 from "../../Assets/images/faces/face3.jpg";
import img3 from "../../Assets/images/faces/face2.jpg";
import img4 from "../../Assets/images/faces/face1.jpg";

import { GiHamburgerMenu } from "react-icons/gi";
// import { IoIosNotifications } from "react-icons/io";
// import { MdOutlineEmail } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";


const Navbar = ({ handleSidepanel }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleCollapse = () => {
      setIsCollapsed(!isCollapsed);
      handleSidepanel(!isCollapsed); // Pass the updated state to the handler
    };

  return (
    <>
      <nav className="navbar col-lg-12 col-12 p-lg-0 fixed-top d-flex flex-row">
        <div className="navbar-menu-wrapper d-flex align-items-stretch justify-content-between">
          <a
            className="navbar-brand brand-logo-mini align-self-center d-lg-none"
            href="index.html"
          >
            <img src={logo} alt="logo" />
          </a>
          <button
            className="navbar-toggler navbar-toggler align-self-center mr-2"
            type="button"
            onClick={toggleCollapse}
          >
            <GiHamburgerMenu className="nav-icon" />
          </button>
          <ul className="navbar-nav">
            <li className="nav-item nav-search border-0 ml-1 ml-md-3 ml-lg-5 d-none d-md-flex">
              <form className="nav-link form-inline mt-2 mt-md-0">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">
                    <FaSearch/>
                    </span>
                  </div>
                </div>
              </form>
            </li>
          </ul>
          <ul className="navbar-nav navbar-nav-right ml-lg-auto">
            
            <li>
           
            </li>
            <li className="nav-item nav-profile dropdown border-0">
             <span className="fw-bold text-white ">ADMIN</span>
            </li>
          </ul>
          <button
            className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
            type="button"
            data-toggle="offcanvas"
          >
            <span className="mdi mdi-menu" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
