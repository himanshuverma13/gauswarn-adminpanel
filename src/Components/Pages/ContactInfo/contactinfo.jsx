import React, { useState } from 'react'
import Navbar from '../../Common/Navbar/navbar';
import Sidebar from '../../Common/Sidebar/sidebar';
// import Footer from '../../Common/Footer/footer';
import CustomerCards from '../../Common/CustomerCards/customercards';
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
                <div className="container-scroller">
                    <Sidebar />
                    <div className="container-fluid page-body-wrapper">
                        <Navbar handleSidepanel={handleSidePanel} />
                        <div className="main-panel w-100">
                    {/* <h1 className='text-center'>Customer Info</h1> */}
                            <CustomerCards />
                            {/* <Footer /> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contactinfo;
