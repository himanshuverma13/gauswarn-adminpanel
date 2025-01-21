import React, { useState } from "react";
import Navbar from "../../Common/Navbar/navbar";
import Sidebar from "../../Common/Sidebar/sidebar";
// import Footer from '../../Common/Footer/footer';
import CustomerCards from "../../Common/CustomerCards/customercards";
const Contactinfo = () => {
  const [HandleSidePanel, setHandleSidePanel] = useState("");
  const handleSidePanel = (data) => {
    setHandleSidePanel(data);
  };
  return (
    <>
      <section
        className={`${HandleSidePanel == true ? "sidebar-icon-only" : ""}`}
      >
        {/* <div className="container-scroller"> */}
          <div className="row">
            <div className={`${HandleSidePanel == true ? "col-lg-1" : "col-lg-2"}`}>
              <Sidebar />
            </div>
            <div className={`${HandleSidePanel == true ? "col-lg-11" : "col-lg-10"}`}>
              <div className=" content-wrapper">
                <Navbar handleSidepanel={handleSidePanel} />
                <div className="main-panel w-100">
                  <CustomerCards />
                </div>
              </div>
            </div>
          </div>
        {/* </div> */}
      </section>
    </>
  );
};

export default Contactinfo;
