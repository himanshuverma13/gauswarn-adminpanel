import React, { useState } from "react";

// import image
import logo from "../../Assets/images/logo-mini.svg";
import img1 from "../../Assets/images/faces/face4.jpg";
import img2 from "../../Assets/images/faces/face3.jpg";
import img3 from "../../Assets/images/faces/face2.jpg";
import img4 from "../../Assets/images/faces/face1.jpg";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosNotifications } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";

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
            <li className="nav-item dropdown">
              <a
                className="nav-link count-indicator dropdown-toggle"
                id="notificationDropdown"
                href="#"
                data-toggle="dropdown"
              >
                <IoIosNotifications className="nav-icon" />
                <span className="count count-varient1">7</span>
              </a>
              <div
                className="dropdown-menu navbar-dropdown navbar-dropdown-large preview-list"
                aria-labelledby="notificationDropdown"
              >
                <h6 className="p-3 mb-0">Notifications</h6>
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <img src={img1} alt="" className="profile-pic" />
                  </div>
                  <div className="preview-item-content">
                    <p className="mb-0">
                      {" "}
                      Dany Miles{" "}
                      <span className="text-small text-muted">
                        commented on your photo
                      </span>
                    </p>
                  </div>
                </a>
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <img src={img2} alt="" className="profile-pic" />
                  </div>
                  <div className="preview-item-content">
                    <p className="mb-0">
                      {" "}
                      James{" "}
                      <span className="text-small text-muted">
                        posted a photo on your wall
                      </span>
                    </p>
                  </div>
                </a>
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <img src={img3} alt="" className="profile-pic" />
                  </div>
                  <div className="preview-item-content">
                    <p className="mb-0">
                      {" "}
                      Alex{" "}
                      <span className="text-small text-muted">
                        just mentioned you in his post
                      </span>
                    </p>
                  </div>
                </a>
                <div className="dropdown-divider" />
                <p className="p-3 mb-0">View all activities</p>
              </div>
            </li>
            <li className="nav-item dropdown d-none d-sm-flex">
              <a
                className="nav-link count-indicator dropdown-toggle"
                id="messageDropdown"
                href="#"
                data-toggle="dropdown"
              >
                <div className="nav-icon">
                <MdOutlineEmail />
                </div>
                <span className="count count-varient2">5</span>
              </a>
              <div
                className="dropdown-menu navbar-dropdown navbar-dropdown-large preview-list"
                aria-labelledby="messageDropdown"
              >
                <h6 className="p-3 mb-0">Messages</h6>
                <a className="dropdown-item preview-item">
                  <div className="preview-item-content flex-grow">
                    <span className="badge badge-pill badge-success">
                      Request
                    </span>
                    <p className="text-small text-muted ellipsis mb-0">
                      {" "}
                      Suport needed for user123{" "}
                    </p>
                  </div>
                  <p className="text-small text-muted align-self-start">
                    {" "}
                    4:10 PM{" "}
                  </p>
                </a>
                <a className="dropdown-item preview-item">
                  <div className="preview-item-content flex-grow">
                    <span className="badge badge-pill badge-warning">
                      Invoices
                    </span>
                    <p className="text-small text-muted ellipsis mb-0">
                      {" "}
                      Invoice for order is mailed{" "}
                    </p>
                  </div>
                  <p className="text-small text-muted align-self-start">
                    {" "}
                    4:10 PM{" "}
                  </p>
                </a>
                <a className="dropdown-item preview-item">
                  <div className="preview-item-content flex-grow">
                    <span className="badge badge-pill badge-danger">
                      Projects
                    </span>
                    <p className="text-small text-muted ellipsis mb-0">
                      {" "}
                      New project will start tomorrow{" "}
                    </p>
                  </div>
                  <p className="text-small text-muted align-self-start">
                    {" "}
                    4:10 PM{" "}
                  </p>
                </a>
                <h6 className="p-3 mb-0">See all activity</h6>
              </div>
            </li>
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
                      <i className="mdi mdi-magnify" />
                    </span>
                  </div>
                </div>
              </form>
            </li>
          </ul>
          <ul className="navbar-nav navbar-nav-right ml-lg-auto">
            <li className="nav-item dropdown d-none d-xl-flex border-0">
              <a
                className="nav-link dropdown-toggle"
                id="languageDropdown"
                href="#"
                data-toggle="dropdown"
              >
                <i className="mdi mdi-earth" /> English{" "}
              </a>
              <div
                className="dropdown-menu navbar-dropdown"
                aria-labelledby="languageDropdown"
              >
                <a className="dropdown-item" href="#">
                  {" "}
                  French{" "}
                </a>
                <a className="dropdown-item" href="#">
                  {" "}
                  Spain{" "}
                </a>
                <a className="dropdown-item" href="#">
                  {" "}
                  Latin{" "}
                </a>
                <a className="dropdown-item" href="#">
                  {" "}
                  Japanese{" "}
                </a>
              </div>
            </li>
            <li className="nav-item nav-profile dropdown border-0">
              <a
                className="nav-link dropdown-toggle"
                id="profileDropdown"
                href="#"
                data-toggle="dropdown"
              >
                <img
                  className={img4}
                  alt=""
                  src="assets/images/faces/face1.jpg"
                />
                <span className="profile-name">Henry Klein</span>
              </a>
              <div
                className="dropdown-menu navbar-dropdown w-100"
                aria-labelledby="profileDropdown"
              >
                <a className="dropdown-item" href="#">
                  <i className="mdi mdi-cached mr-2 text-success" /> Activity
                  Log{" "}
                </a>
                <a className="dropdown-item" href="#">
                  <i className="mdi mdi-logout mr-2 text-primary" /> Signout{" "}
                </a>
              </div>
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
