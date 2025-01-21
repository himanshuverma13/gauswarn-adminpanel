import React, { useContext, useState } from "react";

// import image
import logo from "../../Assets/images/logo-mini.svg";
import Logo from "../../Assets/images/logo/RAJLAXMI JAVIK PNG.png";
import { GiHamburgerMenu } from "react-icons/gi";
// import { IoIosNotifications } from "react-icons/io";
// import { MdOutlineEmail } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { UserContext } from "../useContext/useContext";


const Navbar = ({ handleSidepanel, handleSidebarOpen }) => {
  const { SidebarOpen,setSidebarOpen } = useContext(UserContext);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    handleSidepanel(!isCollapsed); // Pass the updated state to the handler
    // Set Sidebar in responisve
    setSidebarOpen(!SidebarOpen);
  };

  // const HandleSidebarResponsive =()=>{
  // };
  return (
    <>
      <nav className="navbar col-lg-12 col-12 p-lg-0 fixed-top d-flex flex-row">
        <div className="navbar-menu-wrapper d-flex align-items-center justify-content-between">
          {/* <button
            className="navbar-brand brand-logo-mini align-self-center d-lg-none"
          >
            <GiHamburgerMenu className="nav-icon" />
          </button> */}
          <button
            className="navbar-toggler navbar-toggler align-self-center"
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
                      <FaSearch />
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
          <div
            className="navbar-logo d-lg-none align-self-center"
            // type="button"
            // data-toggle="offcanvas"
          >
            <img src={Logo} alt="Loading" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
