import React, { useState } from "react";
import Sidebar from "../../Common/Sidebar/sidebar";
import Navbar from "../../Common/Navbar/navbar";

import { IoMdBasket, IoIosBriefcase } from "react-icons/io";
import { TbCube } from "react-icons/tb";
import { FaUserCircle } from "react-icons/fa";
import Footer from "../../Common/Footer/footer";
import OrderDetails from "../../Common/OrderDetails/orderDetails";

const Order = () => {
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
            <div className="container-fluid page-body-wrapper">
              <Navbar handleSidepanel={handleSidePanel} />
              <div className="main-panel w-100">
                <OrderDetails />
                {/* <Footer/> */}
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>
    </>
  );
};

export default Order;
