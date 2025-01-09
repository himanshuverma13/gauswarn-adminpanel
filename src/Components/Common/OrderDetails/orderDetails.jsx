import React, { useEffect, useState } from "react";

import { RiDeleteBin6Fill } from "react-icons/ri";

// API
import { GetAllOrderDetailsAPI } from "../APIs/api";

const OrderDetails = () => {
  const [OrderDetails, setOrderDetails] = useState()
  const FetchOrderDetails = async () => {
      try {
        const response = await GetAllOrderDetailsAPI();
        console.log("response: ", response);
        setOrderDetails(response);
      } catch (error) {
        console.log("error: ", error);
      }
    };
  
    useEffect(() => {
      FetchOrderDetails();
    }, []);
  return (
    <div className="content-wrapper">
      <div>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-12">
                    <div>
                      <div className="react-bootstrap-table orders-table table-responsive">
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th
                                tabIndex={0}
                                // aria-label="Order # sort desc"
                                className="sortable"
                              >
                                ID#<span className="caret-4-desc" />
                              </th>
                              <th
                                tabIndex={0}
                                // aria-label="Customer sortable"
                                className="sortable"
                              >
                                Customer
                                <span className="caret-4-desc" />
                              </th>
                              <th
                                tabIndex={0}
                                // aria-label="Ship to sortable"
                                className="sortable"
                              >
                                Date
                                <span className="caret-4-desc" />
                              </th>
                              <th
                                tabIndex={0}
                                // aria-label="Base Price sortable"
                                className="sortable"
                              >
                                Mobile Number
                                <span className="caret-4-desc" />
                              </th>
                              <th
                                tabIndex={0}
                                // aria-label="Base Price sortable"
                                className="sortable"
                              >
                              City
                                <span className="caret-4-desc" />
                              </th>
                              <th
                                tabIndex={0}
                                // aria-label="Base Price sortable"
                                className="sortable"
                              >
                                Payment Paid
                                <span className="caret-4-desc" />
                              </th>
                              <th
                                tabIndex={0}
                                // aria-label="status Price sortable"
                                className="sortable"
                              >
                                Payment Details
                                <span className="caret-4-desc" />
                              </th>
                              <th
                                tabIndex={0}
                                // aria-label="Purchased Price sortable"
                                className="sortable"
                              >
                                Payment Details
                                <span className="caret-4-desc" />
                              </th>
                              <th
                                tabIndex={0}
                                // aria-label="status Price sortable"
                                className="sortable"
                              >
                                Total Amount
                                <span className="caret-4-desc" />
                              </th>
                              <th
                                tabIndex={0}
                                // aria-label="Status sortable"
                                className="sortable"
                              >
                                Status
                                <span className="caret-4-desc" />
                              </th>
                              <th className="text-center" tabIndex={0}>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                           {OrderDetails?.map((item, index) => (
                             <tr>
                             <td>{item.user_id}</td>
                             <td>{item.user_name}</td>
                             <td>{item.date}</td>
                             <td>{item.user_mobile_num}</td>
                             <td>{item.user_city}</td>
                             <td>{item.isPaymentPaid}</td>
                             <td>000</td>
                             <td>000</td>

                             <td>{item.user_total_amount}</td>

                             <td>
                               <label className="badge badge-info">
                                 On hold
                               </label>
                             </td>
                             <td>
                               <div>
                                 <button className="btn btn-light d-flex align-items-center">
                                   <RiDeleteBin6Fill className="text-danger" />
                                   Remove
                                 </button>
                               </div>
                             </td>
                           </tr>
                           ))}
                            
                          </tbody>
                        </table>
                      </div>
                      {/* <div className="row react-bootstrap-table-pagination">
                      <div className="col-md-6 col-xs-6 col-sm-6 col-lg-6">
                        <span
                          className="react-bs-table-sizePerPage-dropdown dropdown"
                          style={{ visibility: "visible" }}
                        >
                          <button
                            id="pageDropDown"
                            type="button"
                            className="btn btn-default btn-secondary dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            10{" "}
                          </button>
                          <ul
                            className="dropdown-menu "
                            role="menu"
                            aria-labelledby="pageDropDown"
                          >
                            <a
                              href="#"
                              tabIndex={-1}
                              role="menuitem"
                              className="dropdown-item"
                              data-page={10}
                            >
                              10
                            </a>
                            <a
                              href="#"
                              tabIndex={-1}
                              role="menuitem"
                              className="dropdown-item"
                              data-page={25}
                            >
                              25
                            </a>
                            <a
                              href="#"
                              tabIndex={-1}
                              role="menuitem"
                              className="dropdown-item"
                              data-page={30}
                            >
                              30
                            </a>
                            <a
                              href="#"
                              tabIndex={-1}
                              role="menuitem"
                              className="dropdown-item"
                              data-page={50}
                            >
                              50
                            </a>
                          </ul>
                        </span>
                      </div>
                      <div className="react-bootstrap-table-pagination-list col-md-6 col-xs-6 col-sm-6 col-lg-6">
                        <ul className="pagination react-bootstrap-table-page-btns-ul">
                          <li className="active page-item" title={1}>
                            <a href="#" className="page-link">
                              1
                            </a>
                          </li>
                          <li className="page-item" title={2}>
                            <a href="#" className="page-link">
                              2
                            </a>
                          </li>
                          <li className="page-item" title="next page">
                            <a href="#" className="page-link">
                              &gt;
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
};

export default OrderDetails;
