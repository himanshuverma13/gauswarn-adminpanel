import React, { useState } from "react";
import Sidebar from "../../Common/Sidebar/sidebar";
import Navbar from "../../Common/Navbar/navbar";
import Footer from "../../Common/Footer/footer";
import UserDetails from "../../Common/UserInfoData/userDetails";

const UserInfo = () => {
  const [HandleSidePanel, setHandleSidePanel] = useState("");
  const handleSidePanel = (data) => {
    setHandleSidePanel(data);
  };

  return (
    <>
      <section
        className={`${HandleSidePanel == true ? "sidebar-icon-only" : ""}`}
      >
        <div className="container-scroller">
          <Sidebar />
          <div className="container-fluid page-body-wrapper">
            <Navbar handleSidepanel={handleSidePanel} />
            <div className="main-panel w-100">
              <UserDetails/>
              {/* <Footer/> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserInfo;
