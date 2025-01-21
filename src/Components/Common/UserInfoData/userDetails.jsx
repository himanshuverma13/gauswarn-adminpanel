import React, { useEffect, useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
// API
import { GetAllUser } from "../APIs/api";

const UserDetails = () => {
  const [UserInfo, setUserInfo] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(8); // Adjust the number of users per page

  const FetchUserInfo = async () => {
    try {
      const response = await GetAllUser();
      setUserInfo(response);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    FetchUserInfo();
  }, []);

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = UserInfo?.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate total pages
  const totalPages = Math?.ceil(UserInfo?.length / usersPerPage);

  return (
    <div className="content-wrapper">
      <div>
        <div className="row">
          <div className="col-12">
            <div className="card">
            <h2 className='text-uppercase text-center border-bottom py-3'>User Info</h2>

              <div className="card-body full-screen-height">
                <div className="row">
                  <div className="col-12">
                    <div>
                      <div className="react-bootstrap-table table-responsive">
                        <table className="table table-bordered">
                          <thead>
                            <tr className="bg-primary text-white">
                              <th tabIndex={0} aria-label="Order # sort desc" className="sortable">
                                ID #<span className="caret-4-desc" />
                              </th>
                              <th tabIndex={0} aria-label="Purchased On sortable" className="sortable">
                                Name
                                <span className="caret-4-desc" />
                              </th>
                              <th tabIndex={0} aria-label="Customer sortable" className="sortable">
                                Email
                                <span className="caret-4-desc" />
                              </th>
                              <th tabIndex={0} aria-label="Ship to sortable" className="sortable">
                                Phone No
                                <span className="caret-4-desc" />
                              </th>
                              <th tabIndex={0} aria-label="Base Price sortable" className="sortable">
                                Address
                                <span className="caret-4-desc" />
                              </th>
                              <th tabIndex={0} aria-label="Purchased Price sortable" className="sortable">
                                Country
                                <span className="caret-4-desc" />
                              </th>
                              <th tabIndex={0} aria-label="Purchased Price sortable" className="sortable">
                                State
                                <span className="caret-4-desc" />
                              </th>
                              <th tabIndex={0} aria-label="Purchased Price sortable" className="sortable">
                                City
                                <span className="caret-4-desc" />
                              </th>
                              <th tabIndex={0} aria-label="Status sortable" className="sortable">
                                PIN
                                <span className="caret-4-desc" />
                              </th>
                              <th className="text-center" tabIndex={0}>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {currentUsers?.map((items, index) => (
                              <tr key={index}>
                                <td className="px-1 text-center">{items?.user_id}</td>
                                <td className="px-1 text-center">{items?.user_name}</td>
                                <td className="px-1 text-center">{items?.user_email}</td>
                                <td className="px-1 text-center">{items?.user_mobile_num}</td>
                                <td className="px-1 text-center">{items?.user_house_number} {", "} {items?.user_landmark}</td>
                                <td className="px-1 text-center">{items?.user_country}</td>
                                <td className="px-1 text-center">{items?.user_state}</td>
                                <td className="px-1 text-center">{items?.user_city}</td>
                                <td className="px-1 text-center">{items?.user_pincode}</td>
                                <td>
                                  <div>
                                    <button className="btn btn-outline-danger d-flex align-items-center">
                                      <RiDeleteBin6Fill />
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

                {/* Pagination Controls */}
                <div className="pagination mt-4 d-flex justify-content-center">
                  <ul className="pagination-list list-unstyled d-flex">
                    {[...Array(totalPages || [])]?.map((_, index) => (
                      <li key={index + 1} className={`page-item mx-2 ${currentPage === index + 1 ? 'active' : ''}`}>
                        <button
                          onClick={() => paginate(index + 1)}
                          className="page-link"
                        >
                          {index + 1}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
