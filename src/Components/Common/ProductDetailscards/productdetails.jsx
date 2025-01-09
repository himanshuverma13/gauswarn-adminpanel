import React, { useState } from 'react'

// Images
import Cards from "../../Assets/images/Login/login-bg.jpg";

const ProductdetailCards = () => {
  const ProductDetailsData = [
    {
      img: Cards,
      title: "Passion Chair",
      price: "$399.00",
      actualPrice: "$499.00",
    },
    {
      img: Cards,
      title: "Passion Chair",
      price: "$399.00",
      actualPrice: "$499.00",
    },
    {
      img: Cards,
      title: "Passion Chair",
      price: "$399.00",
      actualPrice: "$499.00",
    },
    {
      img: Cards,
      title: "Passion Chair",
      price: "$399.00",
      actualPrice: "$499.00",
    },
  ];

  return (
    <>

      <div className="container-fluid page-body-wrapper">
        <div className="row product-item-wrapper mx-2 mt-3">
          {ProductDetailsData?.map((items, index) => (
            <div className="col-lg-4 col-md-6 product-item mb-3">
              <div className="card shadow">
                <div className="card-body">
                  {/* <div className="action-holder">
                    <div className="sale-badge bg-success">New</div>
                     <span className="favorite-button">
                      <i className="mdi mdi-heart-outline" />
                     </span>
                   </div> */}
                  <div className="product-img-outer">
                    <img
                      className="product_image"
                      src={items.img}
                      alt="prduct"
                    />
                  </div>
                  <p className="product-title">{items.title}</p>
                  <p className="product-price">{items.price}</p>
                  <p className="product-actual-price">{items.actualPrice}</p>
                  <ul className="product-variation">
                    <li>
                      <a href="!#">M</a>
                    </li>
                    <li>
                      <a href="!#">L</a>
                    </li>
                    <li>
                      <a href="!#">XL</a>
                    </li>
                  </ul>
                  <p className="product-description text-truncate">
                    Product Dimensions: Length (13 Inches) Width (13Inches) &amp; Height
                    (30 Inches).
                  </p>
                  <div>
                    <button className='btn btn-success px-3'>Edit</button>
                    <button className='btn btn-primary px-3'>Delete</button>

                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>


    </>
  );
};

export default ProductdetailCards;
