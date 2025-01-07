import React from "react";

const Sidebar = () => {
  return (
    <>
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <div className="text-center sidebar-brand-wrapper d-flex align-items-center">
          <a className="sidebar-brand brand-logo" href="index.html">
            <img
              src="/demo/breeze/react/template/demo_1/preview/static/media/logo.1cb8ea24.svg"
              alt="logo"
            />
          </a>
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
          <li className="nav-item active">
            <a
              className="nav-link"
              href="/demo/breeze/react/template/demo_1/preview/dashboard"
            >
              <i className="mdi mdi-home menu-icon" />
              <span className="menu-title">Dashboard</span>
            </a>
          </li>
          <li className="nav-item menu-items">
            <a
              className="nav-link"
              href="/demo/breeze/react/template/demo_1/preview/layout/RtlLayout"
            >
              <i className="mdi mdi-translate menu-icon" />
              <span className="menu-title">RTL</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="/demo/breeze/react/template/demo_1/preview/widgets"
            >
              <i className="mdi mdi-widgets menu-icon" />
              <span className="menu-title">Widgets</span>
            </a>
          </li>
          
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
