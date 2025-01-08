import React, { useState } from 'react'
import Navbar from '../../Common/Navbar/navbar';
import Sidebar from '../../Common/Sidebar/sidebar';
import Footer from '../../Common/Footer/footer';
import ProductdetailCards from "../../Common/ProductDetailscards/productdetails";
const Product = () => {
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
                            <ProductdetailCards />
                            <Footer />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Product;
