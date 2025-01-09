import React from "react";

import { RiDeleteBin6Fill } from "react-icons/ri";

const OrderDetails = () => {
  return (
    <div className="content-wrapper">
      <div>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body ">
                <div className="row">
                  <div className="col-12">
                    <div>
                      <div className="react-bootstrap-table orders-table table-responsive">
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th
                                tabIndex={0}
                                aria-label="Order # sort desc"
                                className="sortable"
                              >
                                Order #<span className="caret-4-desc" />
                              </th>
                              <th
                                tabIndex={0}
                                aria-label="Customer sortable"
                                className="sortable"
                              >
                                Customer
                                <span className="caret-4-desc" />
                              </th>
                              <th
                                tabIndex={0}
                                aria-label="Ship to sortable"
                                className="sortable"
                              >
                                Ship to
                                <span className="caret-4-desc" />
                              </th>
                              <th
                                tabIndex={0}
                                aria-label="Base Price sortable"
                                className="sortable"
                              >
                                Base Price
                                <span className="caret-4-desc" />
                              </th>
                              <th
                                tabIndex={0}
                                aria-label="Purchased Price sortable"
                                className="sortable"
                              >
                                Purchased Price
                                <span className="caret-4-desc" />
                              </th>
                              <th
                                tabIndex={0}
                                aria-label="Status sortable"
                                className="sortable"
                              >
                                Status
                                <span className="caret-4-desc" />
                              </th>
                              <th className="text-center" tabIndex={0}>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>WD-80</td>
                              <td>Tony</td>
                              <td>Germany</td>
                              <td>$1100</td>
                              <td>$2300</td>
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
                            <tr>
                              <td>WD-79</td>
                              <td>Jack</td>
                              <td>Tokyo</td>
                              <td>$3100</td>
                              <td>$7300</td>
                              <td>
                                <label className="badge badge-danger">
                                  Pending
                                </label>
                              </td>
                              <td>
                                <div>
                                  <button className="btn btn-light d-flex align-items-center">
                                    <RiDeleteBin6Fill  className="text-danger"/>
                                    Remove
                                  </button>
                                </div>
                              </td>
                            </tr>
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
