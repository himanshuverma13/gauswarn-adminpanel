import React, { useEffect, useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";

// API
import { GetAllOrderDetailsAPI } from "../APIs/api";

const OrderDetails = () => {
  const [OrderDetails, setOrderDetails] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8); // Number of items per page

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

  // Calculate indices for slicing data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = OrderDetails.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(OrderDetails.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
                              <th>ID#</th>
                              <th>Customer</th>
                              <th>Date</th>
                              <th>Mobile Number</th>
                              <th>City</th>
                              <th>Payment Paid</th>
                              <th>Email</th>
                              <th>Payment Details</th>
                              <th>Total Amount</th>
                              <th>Status</th>
                              <th className="text-center">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {currentItems?.map((item, index) => (
                              <tr key={index}>
                                <td className="px-1 text-center">{item?.user_id}</td>
                                <td className="px-1 text-center">{item?.user_name}</td>
                                <td className="px-1">{new Date(item?.date)?.toLocaleString()}</td>
                                <td className="px-1 text-center">{item?.user_mobile_num}</td>
                                <td className="px-1 text-center">{item?.user_city}</td>
                                <td className="px-1 text-center">{item?.isPaymentPaid}</td>
                                <td className="px-1 text-center">{item?.user_email}</td>
                                <td className="px-1 text-center">000</td>
                                <td className="px-1 text-center">{item?.user_total_amount}</td>
                                <td className="px-1 text-center">
                                  <label className="badge badge-info">On hold</label>
                                </td>
                                <td>
                                  <button className="btn btn-light d-flex align-items-center">
                                    <RiDeleteBin6Fill className="text-danger" />
                                    Remove
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                        {/* Pagination */}
                        <div className="pagination-container mt-3">
                          <nav>
                            <ul className="pagination justify-content-center">
                              {[...Array(totalPages)]?.map((_, index) => (
                                <li
                                  key={index}
                                  className={`page-item mx-2 ${
                                    currentPage === index + 1 ? "active" : ""
                                  }`}
                                >
                                  <button
                                    className="page-link"
                                    onClick={() => handlePageChange(index + 1)}
                                  >
                                    {index + 1}
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
