import React from "react";

const UserDetails = () => {
  return (
    <div className="content-wrapper">
      <div>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body full-screen-height">
                <div className="row">
                  <div className="col-12">
                    <div>
                      <div className="react-bootstrap-table table-responsive">
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th
                                tabIndex={0}
                                aria-label="Order # sort desc"
                                className="sortable"
                              >
                                ID #<span className="caret-4-desc" />
                              </th>
                              <th
                                tabIndex={0}
                                aria-label="Purchased On sortable"
                                className="sortable"
                              >
                                Name
                                <span className="caret-4-desc" />
                              </th>
                              <th
                                tabIndex={0}
                                aria-label="Customer sortable"
                                className="sortable"
                              >
                                Email
                                <span className="caret-4-desc" />
                              </th>
                              <th
                                tabIndex={0}
                                aria-label="Ship to sortable"
                                className="sortable"
                              >
                                Phone No
                                <span className="caret-4-desc" />
                              </th>
                              <th
                                tabIndex={0}
                                aria-label="Base Price sortable"
                                className="sortable"
                              >
                                Address
                                <span className="caret-4-desc" />
                              </th>
                              <th
                                tabIndex={0}
                                aria-label="Purchased Price sortable"
                                className="sortable"
                              >
                                Country
                                <span className="caret-4-desc" />
                              </th>
                              <th
                                tabIndex={0}
                                aria-label="Purchased Price sortable"
                                className="sortable"
                              >
                                State
                                <span className="caret-4-desc" />
                              </th>
                              <th
                                tabIndex={0}
                                aria-label="Purchased Price sortable"
                                className="sortable"
                              >
                                City
                                <span className="caret-4-desc" />
                              </th>
                              <th
                                tabIndex={0}
                                aria-label="Status sortable"
                                className="sortable"
                              >
                                PIN 
                                <span className="caret-4-desc" />
                              </th>
                              <th className="text-center" tabIndex={0}>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>XN-9</td>
                              <td>29/09/2019</td>
                              <td>John</td>
                              <td>Tokyo</td>
                              <td>$2100</td>
                              <td>$6300</td>
                              <td>$6300</td>
                              <td>$6300</td>
                              <td>$6300</td>
                              
                              <td>
                                <div>
                                  <button className="btn btn-outline-danger">
                                    <i className="mdi mdi-eye-outline text-danger" />
                                    Remove
                                  </button>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>XN-8</td>
                              <td>29/09/2019</td>
                              <td>Tim</td>
                              <td>Italy</td>
                              <td>$6300</td>
                              <td>$2100</td>
                              <td>$2100</td>
                              <td>$2100</td>
                              <td>$2100</td>
                              
                              <td>
                                <div>
                                  <button className="btn btn-outline-danger">
                                    <i className="mdi mdi-eye-outline text-danger" />
                                    Remove
                                  </button>
                                </div>
                              </td>
                            </tr>
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

export default UserDetails;
