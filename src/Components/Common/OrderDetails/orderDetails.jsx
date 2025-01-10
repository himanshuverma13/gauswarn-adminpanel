import React, { useEffect, useState } from "react";

import { RiDeleteBin6Fill } from "react-icons/ri";

// API
import { GetAllOrderDetailsAPI } from "../APIs/api";

const OrderDetails = () => {
  const [OrderDetails, setOrderDetails] = useState();
  const FetchOrderDetails = async () => {
    try {
      const response = await GetAllOrderDetailsAPI();
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
                                ID#
                                <span className="caret-4-desc" />
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
                                email
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
                              <th className="text-center" tabIndex={0}>
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {OrderDetails?.map((item, index) => (
                              <tr>
                                <td className="px-1 text-center">
                                  {item?.user_id}
                                </td>
                                <td className="px-1 text-center">
                                  {item?.user_name}
                                </td>
                                <td
                                  className="px-1
                             "
                                >
                                  {new Date(item?.date)?.toLocaleString()}
                                </td>
                                <td className="px-1 text-center">
                                  {item?.user_mobile_num}
                                </td>
                                <td className="px-1 text-center">
                                  {item?.user_city}
                                </td>
                                <td className="px-1 text-center">
                                  {item?.isPaymentPaid}
                                </td>
                                <td className="px-1 text-center">
                                  {item?.user_email}
                                </td>
                                <td className="px-1 text-center">000</td>

                                <td className="px-1 text-center">
                                  {item?.user_total_amount}
                                </td>

                                <td className="px-1 text-center">
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default OrderDetails;
