import React, { useEffect, useState } from "react";
import { GetWeatherReportAPI } from "../APIs/api";
import { IoMdBasket, IoIosBriefcase } from "react-icons/io";
import { TbCube } from "react-icons/tb";
import { FaUserCircle } from "react-icons/fa";
import Footer from "../../Common/Footer/footer";
import LineChart from "../../Common/Charts/lineChart";

const Dashboard = () => {
  const [Weather, setWeather] = useState();

  const FetchDasboardData = async () => {
    try {
      const response = await GetWeatherReportAPI();
      setWeather(response?.data);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    FetchDasboardData();
  }, []);

  return (
    <div className="main-panel w-100">
      <div className="content-wrapper">
        <div>
          <div className="page-header d-flex justify-content-between">
            <h3>Hi, welcome back! </h3>
            <h6 className="text-muted d-inline-block">
              Your web analytics dashboard template.
            </h6>
    
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-12 stretch-card grid-margin">
              <div className="row">
                <div className="col-xl-12 col-md-6 stretch-card grid-margin grid-margin-sm-0 pb-sm-3">
                  <div className="card bg-warning">
                    <div className="card-body px-3 py-4">
                      <div className="d-flex justify-content-between align-items-start">
                        <div className="color-card">
                          <p className="mb-0 color-card-head">Sales</p>
                          <h2 className="text-white">
                            $8,753.<span className="h5">00</span>
                          </h2>
                        </div>
                        {/* <i className="card-icon-indicator mdi mdi-basket bg-inverse-icon-warning" /> */}
                        <div className="card-icon-indicator bg-inverse-icon-warning d-flex align-items-center justify-content-center">
                          <IoMdBasket />
                        </div>{" "}
                      </div>
                      <h6 className="text-white">18.33% Since last month</h6>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 col-md-6 stretch-card grid-margin grid-margin-sm-0 pb-sm-3">
                  <div className="card bg-danger">
                    <div className="card-body px-3 py-4">
                      <div className="d-flex justify-content-between align-items-start">
                        <div className="color-card">
                          <p className="mb-0 color-card-head">Margin</p>
                          <h2 className="text-white">
                            $5,300.<span className="h5">00</span>
                          </h2>
                        </div>
                        {/* <i className="card-icon-indicator mdi mdi-cube-outline " /> */}
                        <div className="card-icon-indicator bg-inverse-icon-danger d-flex align-items-center justify-content-center">
                          <TbCube />
                        </div>
                      </div>
                      <h6 className="text-white">13.21% Since last month</h6>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 col-md-6 stretch-card grid-margin grid-margin-sm-0 pb-sm-3 pb-lg-0 pb-xl-3">
                  <div className="card bg-primary">
                    <div className="card-body px-3 py-4">
                      <div className="d-flex justify-content-between align-items-start">
                        <div className="color-card">
                          <p className="mb-0 color-card-head">Orders</p>
                          <h2 className="text-white">
                            $1,753.<span className="h5">00</span>
                          </h2>
                        </div>
                        {/* <i className="card-icon-indicator mdi mdi-briefcase-outline bg-inverse-icon-primary" /> */}
                        <div className="card-icon-indicator bg-inverse-icon-primary d-flex align-items-center justify-content-center">
                          <IoIosBriefcase />
                        </div>
                      </div>
                      <h6 className="text-white">67.98% Since last month</h6>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 col-md-6 stretch-card pb-sm-3 pb-lg-0">
                  <div className="card bg-success">
                    <div className="card-body px-3 py-4">
                      <div className="d-flex justify-content-between align-items-start">
                        <div className="color-card">
                          <p className="mb-0 color-card-head">Affiliate</p>
                          <h2 className="text-white">2368</h2>
                        </div>
                        <div className="card-icon-indicator bg-inverse-icon-success d-flex align-items-center justify-content-center">
                          <FaUserCircle />
                        </div>
                      </div>
                      <h6 className="text-white">20.32% Since last month</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 stretch-card grid-margin">
              <div className="card">
                <div className="card-body">
                  {/* <div className="row">
                            <div className="col-sm-7">
                              <h5>Business Survey</h5>
                              <p className="text-muted">
                                Show overview jan 2018 - Dec 2019{" "}
                                <a
                                  className="text-muted font-weight-medium pl-2"
                                  href="!#"
                                >
                                  <u>See Details</u>
                                </a>
                              </p>
                            </div>
                            <div className="col-sm-5 text-md-right">
                              <button
                                type="button"
                                className="btn btn-icon-text mb-3 mb-sm-0 btn-inverse-primary font-weight-normal mr-0"
                              >
                                <i className="mdi mdi-email btn-icon-prepend" />
                                Download Report
                              </button>
                            </div>
                          </div> */}
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="card mb-3 mb-sm-0 shadow">
                        <div className="card-body py-3 px-4">
                          <p className="m-0 survey-head">Today Earnings</p>
                          <div className="d-flex w-100 align-items-end justify-content-between">
                            <div>
                              <h3 className="survey-value">$5,300</h3>
                              <p className="text-success m-0">
                                -310 avg. sales
                              </p>
                            </div>
                            <div>
                              <div className="chartjs-size-monitor">
                                <div className="chartjs-size-monitor-expand">
                                  <div className="" />
                                </div>
                                <div className="chartjs-size-monitor-shrink">
                                  <div className="" />
                                </div>
                              </div>
                              <canvas
                                height={62}
                                width={87}
                                style={{
                                  display: "block",
                                  height: 50,
                                  width: 70,
                                }}
                                className="chartjs-render-monitor"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="card mb-3 mb-sm-0 shadow">
                        <div className="card-body py-3 px-3">
                          <p className="m-0 survey-head">Product Sold</p>
                          <div className="d-flex w-100 align-items-end justify-content-between">
                            <div>
                              <h3 className="survey-value">$5,300</h3>
                              <p className="text-danger m-0">-310 avg. sales</p>
                            </div>
                            <div>
                              <div className="chartjs-size-monitor">
                                <div className="chartjs-size-monitor-expand">
                                  <div className="" />
                                </div>
                                <div className="chartjs-size-monitor-shrink">
                                  <div className="" />
                                </div>
                              </div>
                              <canvas
                                height={62}
                                width={87}
                                style={{
                                  display: "block",
                                  height: 50,
                                  width: 70,
                                }}
                                className="chartjs-render-monitor"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="card">
                        <div className="card-body py-3 px-3 shadow">
                          <p className="m-0 survey-head">Today Orders</p>
                          <div className="d-flex w-100 align-items-end justify-content-between">
                            <div>
                              <h3 className="survey-value">$5,300</h3>
                              <p className="text-success m-0">
                                -310 avg. sales
                              </p>
                            </div>
                            <div>
                              <div className="chartjs-size-monitor">
                                <div className="chartjs-size-monitor-expand">
                                  <div className="" />
                                </div>
                                <div className="chartjs-size-monitor-shrink">
                                  <div className="" />
                                </div>
                              </div>
                              <canvas
                                height={62}
                                width={87}
                                style={{
                                  display: "block",
                                  height: 50,
                                  width: 70,
                                }}
                                className="chartjs-render-monitor"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row my-3">
                    <div className="col-sm-12">
                      <LineChart />
                      {/* <div className="sales-chart-height">
                                <div className="chartjs-size-monitor">
                                  <div className="chartjs-size-monitor-expand">
                                    <div className="" />
                                  </div>
                                  <div className="chartjs-size-monitor-shrink">
                                    <div className="" />
                                  </div>
                                </div>
                                <canvas
                                  height={325}
                                  width={1026}
                                  style={{
                                    display: "block",
                                    height: "260px",
                                    width: '821px',
                                  }}
                                  className="chartjs-render-monitor"
                                />
                              </div> */}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-8">
                      <p className="text-muted mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore.{" "}
                        <b>Learn More</b>
                      </p>
                    </div>
                    <div className="col-sm-4">
                      <p className="mb-0 text-muted">Sales Revenue</p>
                      <h5 className="d-inline-block survey-value mb-0">
                        $2,45,500
                      </h5>
                      <p className="d-inline-block text-danger mb-0 ml-1">
                        last 8 months
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-8 col-sm-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body px-4 px-xl-0  overflow-auto">
                  <h4 className="card-title pl-4">Purchase History</h4>
                  <div className="table-responsive">
                    <table className="table">
                      <thead className="bg-light">
                        <tr>
                          <th> Customer </th>
                          <th> Project </th>
                          <th> Invoice </th>
                          <th> Amount </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <img
                                src="/demo/breeze/react/template/demo_1/preview/static/media/face1.c80e465a.jpg"
                                alt="profile"
                              />
                              <div className="table-user-name ml-3">
                                <p className="mb-0 font-weight-medium">
                                  Cecelia Cooper
                                </p>
                                <small> Payment on hold</small>
                              </div>
                            </div>
                          </td>
                          <td> Angular Admin</td>
                          <td>
                            <div className="badge badge-inverse-success">
                              {" "}
                              Completed{" "}
                            </div>
                          </td>
                          <td> $ 77.99 </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <img
                                src="/demo/breeze/react/template/demo_1/preview/static/media/face10.e3a405bd.jpg"
                                alt="profile"
                              />
                              <div className="table-user-name ml-3">
                                <p className="mb-0 font-weight-medium">
                                  Victor Watkins
                                </p>
                                <small>Email verified</small>
                              </div>
                            </div>
                          </td>
                          <td> Angular Admin </td>
                          <td>
                            <div className="badge badge-inverse-success">
                              {" "}
                              Completed{" "}
                            </div>
                          </td>
                          <td> $245.30 </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <img
                                src="/demo/breeze/react/template/demo_1/preview/static/media/face11.5839877e.jpg"
                                alt="profile"
                              />
                              <div className="table-user-name ml-3">
                                <p className="mb-0 font-weight-medium">
                                  Ada Burgess
                                </p>
                                <small>Email verified</small>
                              </div>
                            </div>
                          </td>
                          <td> One page html </td>
                          <td>
                            <div className="badge badge-inverse-danger">
                              {" "}
                              Completed{" "}
                            </div>
                          </td>
                          <td> $ 160.25 </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <img
                                src="/demo/breeze/react/template/demo_1/preview/static/media/face13.16f59cba.jpg"
                                alt="profile"
                              />
                              <div className="table-user-name ml-3">
                                <p className="mb-0 font-weight-medium">
                                  Dollie Lynch
                                </p>
                                <small>Email verified</small>
                              </div>
                            </div>
                          </td>
                          <td> Wordpress </td>
                          <td>
                            <div className="badge badge-inverse-success ">
                              {" "}
                              Declined{" "}
                            </div>
                          </td>
                          <td> $ 123.21 </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <img
                                src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QN/aHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MiA3OS4xNjA5MjQsIDIwMTcvMDcvMTMtMDE6MDY6MzkgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NzE4YzQ2ZjItNWU5MC0zMDQwLWE1MzktOGQyYzI2Yzc4MzZjIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkIwRTE1NzA0RDEwODExRTc4MkRCRjg3MEEzRDJGMTYxIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkIwRTE1NzAzRDEwODExRTc4MkRCRjg3MEEzRDJGMTYxIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmQzNTUwZGMyLWNiYzMtZTE0YS1iYzdiLTU3NTM2ZDU1MzhiNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3MThjNDZmMi01ZTkwLTMwNDAtYTUzOS04ZDJjMjZjNzgzNmMiLz4gPC9yZGY6RGVzY3JpcHRpb24+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"
                                alt="profile"
                              />
                              <div className="table-user-name ml-3">
                                <p className="mb-0 font-weight-medium">
                                  Harry Holloway
                                </p>
                                <small>Payment on process</small>
                              </div>
                            </div>
                          </td>
                          <td> VueJs Application </td>
                          <td>
                            <div className="badge badge-inverse-danger">
                              {" "}
                              Declined{" "}
                            </div>
                          </td>
                          <td> $ 150.00 </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <a className="text-black mt-3 d-block pl-4" href="!#">
                    {" "}
                    <span className="font-weight-medium h6">
                      View all order history
                    </span>{" "}
                    <i className="mdi mdi-chevron-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-sm-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="card-title font-weight-medium">
                    Business Survey
                  </div>
                  <p className="text-muted">
                    Lorem ipsum dolor sitadipiscing elit, sed amet do eiusmod
                    tempor we find a new solution{" "}
                  </p>
                  <div className="d-flex flex-wrap border-bottom py-2 border-top justify-content-between">
                    <img
                      className="survey-img mb-lg-3"
                      src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBMRXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAU6ADAAQAAAABAAAAPwAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/8AAEQgAPwBTAwERAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/bAEMBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/dAAQAC//aAAwDAQACEQMRAD8A/r7+FXjbW/GUutXPjG9i1P7bfz31jPGHjFtFK7GO1dWklCJFGQkCRN5axqAihOK+oxtChCnQngWuR0oe/CUJwqxa92dOcLxqRnvzJ2lv3cvEwVbEN4injE1XhVnFwlCVKpSld3pVaVS0oTjonGSi7rb7J22peCvCt7cTal4nP2jR5I5I0txNuW6ilG1rW5tvLLyxxnDxuSDE21gdwDJnSxmJpxjSw6cayfvTatyuOzjNNW3d+j1Vm02XVw9CrzvERU4NOLhK7i1JWcZRu+aPVJLmTs7u6PhD9qv4deBfCnhTWrzRbxrWzv5odR0tHcXUrX9skcctseF2wzln3GR2aFl3AMGr7zhfMcbXxVKNampTgpQqO3JFQldqT31il6NdFZo/P+Kspy7C4KrUoS9j7SXtKcVaaVSK1STaajJfzSTT6y0UvyfTW4n2MhYzBnTr0+c5O0n+9ghs4O3v/F+r0k+2lk7dXb81vvtdPufj2JnGPLve7Ubatrv9nl3urre9rWvLsLHVpVWNkPzEje5YFnOe5HQnKng4+XuNtdkYppprRfZe3nru+23lrqeTXXJO8Ptauysvnum/i3XlrexvSX5ZAOASOGXhgQTjkZJxkjOT1IAHzBKUUnpda3tvra3ftb+b9TF1JTSjJaJu2trK+60dnfXbXoo393HlZlPTapYgYXpu9GXB+Yj5ucEkg4BzW8ZPay2vvZ6abXS082nbVLrIilKUfdiknZW13TemjV99t76tNJE8EvkgnOMhiRgDr1OehJIGRgAZOc4JqpNy5Va19Fve9uu2+2m60V0rmvs6ertbTe1t09bbXvpZW73XK2I90DhgN5HQ7cFTuwfm+8CRkk8Anp0y1KO++972v8tI+fbTVdfdbhFq1nZu796zv3Te7TWqvu9pJLlopdMkxkDMHZtwYMQcqcg5BDcHp6EA5GKd7pq11tt309HppttqraHJKHK3KMrLdLlWrv8AK19Gn80n7yPrnwZ+2p8dvBPhjSPCum+K5rnT9FgktbOXVLeDVL0WzXE08UD3t9a3V1LFapKLa0jknZba0hgtoVihhjiT43H8CcOZhi6+MrYJQq15KdSNGcqNPmUYxbVOmowUpcvNNpXnOUpyvKUnL7jLuPuI8BgsPg6ON56WHi4U5VoUq1Tl55NRdSqp1GoJ8kFKT5IRUI2jGMY//9D90Phb8YvE/wANvtUtm1vq+i6hO89xYXcgkVYoywWTTr5dz2b7dwwm+3c43wEqSv8AAvh9408T8A1aWB9rLOsg5oqpkuPrVEqEftTy7EPneDqtO/IozoT2dKL98/0o8SPA7hHxEjUxc6ccj4kcGqeeZfh6aliKij7kM0w6UIY6kmlacp08TBaxrNPkl9OeHfj/AAeK7aD9zJZ7pBItheTpLNbCX5t7MzqsgBzh42dfVFHC/wB++HviHwV4jYX2nD+ZRjmlOlGeNyLGKNDNsM1pK1FtxxVBPRYjC+1otK83CT5D/OzxN8NuOvC3FunxJlTqZPUrulgOIsAp4rJ8XFtuHNX914PEuO+GxipVE/gjONpy+eP21fiv8LvhX8KT8R/HfjjRodM097u+h8LyXG6+1JGiCPDLDbybljNwoCTlFlkd4rW1jmmnRa+q4h48wPAGDlVr4apis1xkXh8my2k7VswxcVo4ykm6ODo8yni8TKLjShdJuo4wPneDvCzM/FfMoUcJjaeX5BlcoYviXPMQubCZRgZ7xcYtfWMwxDi4ZdgYyjUr1WpvloxnM/kv0r/go74qn+M3ibxTYWMN18PvEWqxpafCvxFqFjpghsbdUtYb34e+MJo0t/DWt3UUaz3PhTxjNe+GNZvHdrXxJoF/LI918jwn468TZbipPjHD4fNsvxdX2tWplWGdKtk0Xb91Rw6lOeLwlJW/ec0sS7SlUhLmc4foXHn0ZuD85wtOfhviMVkuZ4CisPQwuf4uNfD8Rey5v9pqY2XsqeW5jiHJt0JRjgG+SNOrQ5Up/sn8FfjN8NvjV4am1zwFrLX02mTx2XiPw/qVtLpPizwlq7AM+keKvD15s1HR7xQSYJHSSx1CP/SdMvL21dJ2/q7I8/yjiPA0szybHUMdhK0YyhOjUT5U1dRnBWcJK9mp2s1a8m7x/hnirhvO+Fs0r5Pn+WYvK8xwk5QrYfFUpU2mna8ObScJO7U4uSktVpaUvahIu9UG7bgZXrk4IIz1PPHJ3HqM5r3Ixvpez+9+utvPy9bJHzUVdPe6200+b3+Sv+sSRG3YVmyCODgZyPXDfL0HI7ndtJNbxi+zd1u+luuul7tta6fJQKhVjHfSSeqW3Z3eyXwpN6rV2Tbck3MgJf5j0+Y5HYZ65OABk8juSSw3W0pWW9tnbX7vdTtt079GhyrKPve7e9rXunLRpaW9fla3WLWBCFwSQcEjpgAt90dcE4A6/d9yFG1ypdevT7/mlv8AqYyrWau9WujWibat8tXf07siUDzRxjIyckcf45HPUgY7ZJYWl3ay6dH5tXctU+je+qv9mpSla3l3+eun4X8naz5rWWHRN3vvIz74GR+XXrx0p2b2lp03/S6XonZbK5EZXiny766Xtv5afd/mf//R/XnWNJOn2GyyKW9wbfa/loPstxJIBGTLAGwCXfcJYikoz85m2hV/ySji+eqlVScW007u6807Pa1rNNNpW5bvm/2Upx53zRvaMuq1VteijpbTZfO9o19e1nQPA3hDWPHHxH1jTvBfw88F2cWr+M/F+qz+TpGiaFbTw/bb2OdVaS5uhFlbTTlRbq8naO3gSSR1VvZ4dxGbVM/yyHDlfH086ljKSy+vlk508bSxMpe5KlUpzpuEo35+aMuSKjJyvBSR4fF2NyLDcPZrHP6GX5hl9XL8S8TluaQpVcJi6EaU3Kni6VaE4KhJpKU3F8spWh78oH8eH7fH7eVp+1X8Xtdn+Hh1zRfgno+oC08FaHrN/LPqmsQWMS2cfifX8lo477U1R7q10pWa20S3uPskTy3Buri4/vTBZRxBWtm3F+bYrP8AiWth6VDEZhilTbw2HpxXJgsLTpU6NKnTp/FVnTpQeJrSqVqnM5OMf4ahxLkmEy2hw3wtlmXZBw1hcViMWssyqlVo0cXjsRNzq47FVa1WvXxNW0lSw7xFaaoUIwo05Ri3y/C41n7WpTdtHG4t/Dx90L0ywOACCqg5wwI3dMsMqNnyt7tLa773snbu9bbd2d9DMY1/cUnp8XNZOLfkku7snf11Z7l8JPjx4z+G+v6Rq2ha7rOm6poqpbaP4l0O7jh8TaJZCQSPpXm3sVxp3ibwnK43X3gfxXa6loF1knTl0S/KapF05Lnmd8J5j/a3D+OngazfPicLK88vx8d3HFYZe6qklosTTUakd6irx5YFcRcJcLeImULIeK8thj6UY+ywOYU3GnnOUv7NTB4yUbyowk23gq8Z0Jaun7GbVU/oj/ZR/bd0r413GkeCPG2nQ2HjvUEmj0XxL4XstQfwX4tns7SS9uLe5spPt2p/DrxTHaQT3U3hzxFLPo18sM03hfxPrMKeRB/XHht4u5TxvOnlWLpSyjiVQbqZZVfPSxahBupWwNZXjWpKMZTdkpQin7SNKT5T+BvGDwC4j8L6dfN8LV/1g4OlVjCjneGpuFTBTqzjGjhs1w15TwWIc5xhCU37GvKyo1aybkfoMjbeGy2QRuLHbjPOMcKxxzn1IHev2lpNXT03ttqvvvbylLXtdo/nFpKVnfbr1v8ANWbd99+trtxjIJDlyCv07447EYGehA54OeFpK2lnZ9Ot7tr8F5/fdApPlautNbNrve1+mttFfVWaaaRG5BXAxj+L8CMAcEc46nIyeMHmqbemm61ku3d6q90tNI9rOzQ7RlqpKDTt2Wy2+59fJN2XNXbdkbQh3cYbgY7Zw4JBzztHrycU3e1rXfTpG76dG92tHotrJFVH7sYrVtdNr+a0dn5SVlr0tL5N8S/EXx1puvarYXN7NZy2t5LD9mtUjS3jiU/uPKViW2vB5UmSTktnJzmvy7MM5zinjcTTlXq0nCo4+zpxgoRSsoqN5p2cbO7Wt766nydbEY2NWpGWKq02pyXJTclCKvoorTS1nfre7ve5/9L9oNVP2OKObUnje2W4tt08Qwi/vlJEsLb3i+5jO54+v7xeBX+OOIxHJdx1tfS6urK9re7f5dd7fDL/AGYoR9o/ZUoyjVkmop36pvmVTr3tJKVtNbtR+SP2kb2z/aDhsf2cporaTwJ47e+0TXbSaNprC/Nzpd8ltdX8dvLE11Dp10sF5HEJFJkgUgqxWvrPBTFYrGeK/CcoynTp4XMJYiFP3lepSoVnzztZ6XcYpuS105vs+N4p8NYPKvBXxHzjGpV8yxXD7wUK09XhqWLxWGpuFBtS9nKXN7zjq+raR/F9+0J+yF4z+DHi7xFYeElv5rbSNUvLafw/q0E1pfWot5XUJBHcKJ4W2KCkE6gRowXgc1/qqp4bHRXtoxpVrfGlaMntZ77u93e/Vt/a/wAg6eYYzKqkledahF2TV/aU4rb3VZu1lZLmVlra9z5dsfFFxBK2m6jbz6fqEHEtrdxvBPGf4nAYkyKezJvVsjDADK+PjMrlBuXL7vRrVNdk09PVertblPvcl4njWguSqnom5LePR3TSenb3lrdSjsen+B5NY8S6/pXh/wAOaZfa/rmsX9vp2k6RpNrPfanqWoXEgjgtrWztkkmuJ5mICpEHIAJOxEZl+bxeBnOUaUYv2lacKNOF9alSpNU6VODfs1zTnJQgua7corVtOX6vkOdwjF1KrtRoU54ivVs26NKjGVWtWquHNJU6dKnKpJqMuWEJNu1kf1GfsPfsSj4E29h8TfiTMbr4sahprx2uiWV250nwXZXsW2aynktZhBrOuywP5d7O7T6Zp26S2sEnnD3z/wBR+FfhJR4WlQ4hz6MK/EiUpYTDpqWHyWFanKnU5JJtVswqUZypVqv8OlCcqNK7c6s/4x8ePpBV+OljOE+E61TC8HudOOPxcoyhjOJp4evCtS5oSSeGyilWpQrYfDv99iZ04Yiv7NKFI/SqPzXBIGFByp5HbgkcADAJ7gd+ua/eFJe7fp527eT6/wCLfRK6R/K8KftJOTvZ6K6b7pc1rX2TV3HzvaPMK/JU/LhcsAMbj3wADxzzgY69OKJSWvnayv18/hTbto9Oz6MJRjT5fibivevGyd1e3XpbV6N68ysTRncMgEg8FlOWIGOCMArjkZypOAQTgmhvfo/K7v3td6J2WqvtZL4lHJJSfW3na9rbW6LzXfy5oy/Y3kbIXGDnlQSAD1GAexHyhiTkk4OTSc7Le7fyaa13dr+t/k+YuzfXVN+St3u9G9E9FHVWWxTufB2h6hO95faLY3V1MEMs8qgSSFEWNS2XByqIqgkchc85rjq4PBVakqlWlB1JW5m4XvZJLXXol1++xP1enP3pRi5Pdvm6afyPol189bn/0/1p8X6m8y28UM4SMebKVV+hjTC5IznBcEEt15+bDCv8Y6sXPmez5Gtr283t5br/AMCt73+2WX01GWqTleKT20d+a1ktVbV+misfOfhuzhuPi7od3sG60+33paPAzJHH5QkKg4Dn7R99VVyerkElf2P6PmW+18S8llKPMqFDG1VdO8eXDygrS91tLm2bkl0vY+G+krmX1PwO4mpxnyLFTyzCpJ/FzYylU5UldNXp62eiXVI+IP8Agox8DYtK+Kp8Tizt30vx3pKa0GRrqW6TVoSbbV5bue4Voke+u45riG2jkeNLfZtVAGRf9HIJJPkutbtb6PS9raa32a7a2R/kZXd7OSupLR2vJNWe73XXWybVnJWPxD+Jv7NHhrxiJDNp4S6Dr5V/bD7PewMylQyyJtcAFgcH5WPXAIVu+lWq01ySXPFpXjJXVnpdfErt7e703d7R8t040puvhqjpTum3BNX33hZX1avZ6rdxumfZf/BJr4W+Afg/8QPiS2taTF4j+KNuyQeF/FuohJb/AEXw3JpljdalYaHYt+5tb64N/C2panabtUurMPaKIrMXCS/zD9I6WaTw+VU8HiqmGya8ZYzC0n7NVsZOU3halerH3nSp+yqRpU5ydJVeWp/EcHH+/fohRyvF4TNsXjsNSr8QOdSng8ZV9908BR5I4ujh6Ti4wlNVac6tWKdSpSk4e7SjKJ+/9ii3cCTKY3S4XzYyq+uTtYYO0qwIYY4ZSBjFf6T+C+eT4g8KPDzN61WVWvieE8pp4qrOTqVJ4nBYdYCvUnOTvObrYabnJ3lKTvK7dj/Jb6Q3D0OFvG7xXyLD0oYfD4PjbOq2Fo0oRp0qeEzDE/2rhoUoR5YQpxoY2MYRjGMVFJKMVFRlKIWtySxO3ODuIBI74Hl45z97nHUA4Ar9R5lJJX2u35NdU11S7fFu4r7P45SbpuXLqlZJXtd3WuiXot32erRnzuVZv4VzkN/kDqe/zDjIzgCtIKO19W9Lvd3s/m99rK3vW0KknPmUmtHfmeutrtK76Suopre60vckt79ImG443MBx1785+YDkEYwuR951wWq5xSXu22ba30XfXX5W3tZ2MXBxs7xvLVO/XpZNfhfW+qtys6JLyNQhCo5OAQcZXoM8HHXPJbPUDbk7uRu7dm1ZJWvdde6te1nqnayd3ewS5lG+7vdyWvyts1pq9bb2aTR00FuJ4Y5Rcoodc4LICO2Mc4/z0ziuaVVptOMm1pv9321stNvvOqmpOEWpaPXaS6vpr+eu+tz/1P0I1rVL22aR7OJrmGOA7oZZ381Ed1XMUrLhmGw/JM3Py5lXGK/x0dKM21NuGsfeteL33jq0m7aro76Wsf7iUaSjJdXq7xilsvJ2e1rpR/m5X9rs/wBk3wPZfGL48J4YuL650nb4S8R332iO1SWa0lgNisDPDIypPbmWVfNWOVS6rhJoyylv6D+jvhHHjn6wlzLDZTjJXTvH3p0IWvvGVn1V2tOR2PwH6VuLVPwn+qqpZ4vPstp8r/6dwxFXTa/LyrZN93oe7ft+fsl+NNV+C+r6lHYS69/wgyzeIrC+0WaEWptoxEusSanaXKG6TyNKjuJbeGMhWn+VXkYBG/uuFWPtFa6u1o7PXa6emi9d7PWyR/mJXozdN2T0u/d+/XW+2uzScbtuzZ/M/qPhhHDkxbSrxscpsOI5oshh15AYnhcddoxhfQTs7b2elu21k7NvdaO23k2ePKN+Z9VLW17aW16dVquXu9NUeQ6Xr0/wl+On/CQWj7HstQ8ManNACYzeadqGkzaVfWwKhQ7S21rKm3724K5QbVdvyXxPyenneFq5dVStjMtnTpz0fs8TRrynQq9GuSooNvtda3sf1b9HXO55HSjmFNyvl+fr21O7Sq4TFYWEK9ONmuZ1KfPaPL8XK7LlbP3w+H3ibTdb0LSp7XUIpmu4zcWoaTabi2kAurdoZHysu6GZG2qfMAOCAa/Z/opeJXCtTgDJPDjH53hMDxlw9ic3wf8AYuOqfVK+Kw1XNcXi8NLL54hU6WPlGNd06mHw9SWIpSg70lBqZ+DfTn8GOOaHijxH4u5Vw1j8z8POKMFkONlxDldNY3D4HGUMlwOBxizejhfaYjLKc5YaFWni8VRhhKkal413NThH0KSQOpDrjGQ3Tt9VJOO5BX6txX9hxfRX0sv0en3KOtlu7an+fiSupXT5kveTvGS6+VrvTX7W0re7hXKhWAdBtLepJY9QP4sEk4HT8MsF2jJq7Wr8tNuq7d7Nu3dpJS0XK1ZqNnsrXu1qrfC1fyenW9vezpYdwKrhW35B2AYO4j8QQOMdMnd0q/abbrfZ3X/pK/LXRXVzJxco9pdU49dLq3NHtdeulvtXYEePYu4cHnrzz25wPxYcdjjC5Talrql3W7fRb/8Atsb79RxppO7d+66Jteb11slu0rWat73TRTlI0XZuwOuW5zz/AHD64/w6VyOUrvW3k1r/AOkPffd+r3N4wSivdb3626/41ttt91z/1fvu6fd/aYbkrHbx7SOASkjnHcgE8gEdADnAK/47ytanLq3Lf7k+m/nfe9ldM/3Iim5pbKz1XTS3V2XZetk1vH0H9ks6hp/xbv8AW9KMiX+m6SIlFtdyWl20V5cyrOLZo8iSRUt1meJmVGhicsWYIK/pf6O1Bzz/ADispOHs8upRU0rW9pVb162lyW6Wdt9OX+XvpcYn2XBvD2FsprEZ1UqOOif7jCpXXT3fa7O11rpZRP2G8L/Gez8UaTP4b8TW1vrNlqGnfZLyK5jSO8kiuLVfMjvbeTFveI6SYlVAm7JLbwdrf2LatCyqLT+ZbXfpdWunbuteV6qX+fEVSqX9nOztd05KzT6prrv0v0Wn2v54Pjj8HfBUfxE8YeFcxW2paZrd/ZLfWdu2nNdRLNI0NzHaToolgkIG1xu3BTiVvu16FKraCknzWXV7aWas2tlfy9LXj4eJhFVJQlFw1fvK3LZ2adnbdNdfLVNI/I79qPwEfBvxPW0lkhuoNX8EeHb+CXZhX+wa94k0+bMbbsSxrJbg4JwGUjgla+E4zn++yqpG8b0sZSdnZ6OlNXkpa/E3pGz231P6A8EfZ1Mv4kpe5NQxeW1lGWq9+nXhJpbq/LC0n262vH5W8aeMf2qvB9/4M+Jn7O+teMNb1Lw7N4S+E158MdI0bUvGWneN7vxV4i1Y+D7N/DFtHdS6lqc093Po1otjFHrHkx240+8g8l9nj5DwTw1xJgs3w2aZfTnXqZnRzLC4/D/7NmOCrzw1KnVq4TGUXCrSk6uHjiLXlCVWU3OEm7n2HiB4o8b8CZ7wxjcgzWtSwqyDE5Vjssxn+3ZJmlHDZhVq0aGPwFe9Guvq2OeG50oV4UqcIU6sVdS/q6/Zs/Zv/bC/4Z88JeLP2q/hPY/Cr4n6+j3TeA9P8SQ+KtQ0XRjb272knioxxMnhrVrgGeV/Dj6trF/pOI7bULwXPmW1v/W/hPmOY5HkEskz/iTG8RSwuNqvLcfmzc8xpZZKlRhRwOJxHM5YqeGrQrcleUnJ0akYyceWMT+CfHbCZNxhxPR4p4V4MyzguGNyyjDPcpyCKhk2IzynXxM8Vm+DwnJFYCjjsPUoe0wsVKMa9JycpurzHL69pz2NxLDMskMlu5QK4OVkU7HyTwQr5XPXuvGa/dqOIjUipqSalrp23Vt97p26eWx/NdSm6UnBp3i2rNNPR2e/nq7adOiOJudRa0U4+c5wT/DwcDOc4A7cD3PWt1JS1Wtvn922iV1u76W2SMI3Tb/mV7J3X+LXlflq++isZVrqtzeXywJKoLtxk8BiRge4J4x8uOzd6idRQjfdaap9l57W3W/dRbZtGPM1D5fhstW+3pfdn0FpHwy8f6pptpqGneDfFGpWV1F5lvfWeg3lza3CbmUvDPHlJEDqyZU8FdvJBrx6uc5dSqTp1Mdhqc4ytKE61GM4ve0lKtFp2aeqW+mjPYw+RZvXo061HLMVWpVFzQqwoVZwmrtXUoUpRet1pJ69tj//1v0d+MXw78efBLxj4q8E+ObKznu9M1G4it77TLy1f7bpaBH0/VI4kuZEWO+spLe8WCZ7O8hWbyrmygnR4V/yq4t4Nx3Cee4nIsxiqeKwdSahJVaVejiaLk5UMRCVKUpU44ily1Y06qhUgpKFWnCalGP+z/A3F+UccZBl3EeS1Z1MJjKFOVSnVoVqFXDYlrkxOEqe1hBTnhq0alF1KLq0KjhzUqsqcoTn0n7JVzb3XibxNrNs7FIrPTXt5ipV1lt75MnYyhgwN1tPy7TzhivNf0H9HXASo1eJKtVe+qeCpfEnonVm9U9rPrJ3fRaqX8yfS+xd8JwZhU3Z4jNKzS0XNyYaCTb3s3a7v3XVR/SeHRLfVZ5NZtl8nUrK4hi1lD8sd0qWFvFHfQssm2OXm3WWNFTzZJJpiFxhv6po1LL2Ld1f3Xq2trr0d7Le3S17x/hapSjzOcXr9rfXTfW1tuid9G3ofmp+334Eez8ReBPH8E9w1z4k0+TSbuOWSFYYhoDW1vZPamLFyrzLPeCdpC3MUZXZkF+ulTg1Ut7vK+i+a003Tu9b62ure75+LveDVqilHXm0aSsm/wDwLTSzVvRy/CT9sCHVB4s8AXV7cJM58DeMLLbON7lNP1/wtfxK88ZLkxjU5gjlH67SpyRXxXGlKLw2BqtybhjakLq14qpRu9LxTT5Pe0b6q7tzftvgdKqsZxFhqfKlVwGEr8kvhU6Vdx0lHVNKbd3fmt3Scf0u/wCCEfjiz8P+O/2rtKnsIpNS0r4T+C/iPpUz28M11p1x4W8Xy6PPcWN4VbyJLiz8VvF+6eGZ0VlOATu9Dwuoyq8Q0cLJpwxnLSi/s3catNJxezvUvfRJ69Ly3+kHOGH4aw+YxT9rl9au5wej5KlOlV92Scrr9ze10+ml+aP78n9qnSb6KRtS0uS9Kn7PLDPC7xzbfmcEMWRQcDJ2uR/CTtw39O/6oVKf8KsoXd007OL+Gye61b1Tta97H8RPj3DtS9rhZzfwuFouMl2d5aJ2f2X8r2PjP40614a8Y+IbjXNM0mDS7W7gSOK1igEaJIB80nlqgUOWYKWIYkndwM19pkuGxWBw8cPUryqyi3zSk+a6Wyu9WkltaztbQ/N+IsThs0x0sXh8LDD05U0owSjGztdtpaN3esmm21fXY+d7Xwb4dk1At4kubqGxbeyQ2MXmT3Mr5EUYfd5cCM2NxI4UHG0ld3uV8TXhT/2ZJzvb33aMVs9NLv0+980meDhcBB1rYuUowUedKnaUpdUtbKKbt6fyx0Nz4P8Awh8L+LfjF4W8Ka/qt5pui6zq8cVxcabB5l4YXYmC2jaTzBDJOQsLXJilEW8yFGAYN52dZriMHk2KxmGhCpXoUpSUKj926teTso83Lvy9bW0u2etw/keHx+eYPA4yrUpYavWSc6NnUcbpxgm78rm/c5mnyJ3tJL3P6SPCPww0fwp4Z0Xw5oOlaVDo+kWMVnYJNEvnNAm4iaYrCwM1wzNPK2ctJIxIViVX+csVjsVjMRWxVfEVXVrzdSdpe7d9Fe9kkkkr6JJa2P6iweAwmBw1HB4ajCFDDwVOnFxi3yrrJ6XlJtyk7aybelz/2Q=="
                      alt=""
                    />
                    <div className="pt-2">
                      <h5 className="mb-0">Villa called Archagel</h5>
                      <p className="mb-0 text-muted">St, San Diego, CA </p>
                      <h5 className="mb-0">$600/mo</h5>
                    </div>
                  </div>
                  <div className="d-flex flex-wrap border-bottom py-2 justify-content-between">
                    <img
                      className="survey-img mb-lg-3"
                      src="data:image/jpeg;base64,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"
                      alt=""
                    />
                    <div className="pt-2">
                      <h5 className="mb-0">Luxury villa in Hermo</h5>
                      <p className="mb-0 text-muted">Glendale, CA </p>
                      <h5 className="mb-0">$900/mo</h5>
                    </div>
                  </div>
                  <div className="d-flex flex-wrap border-bottom py-2 justify-content-between">
                    <img
                      className="survey-img mb-lg-3"
                      src="/demo/breeze/react/template/demo_1/preview/static/media/img_2.5f9db113.jpg"
                      alt=""
                    />
                    <div className="pt-2">
                      <h5 className="mb-0">House on the Clarita</h5>
                      <p className="mb-0 text-muted">Business Survey </p>
                      <h5 className="mb-0">$459/mo</h5>
                    </div>
                  </div>
                  <a
                    className="text-black mt-3 d-block font-weight-medium h6"
                    href="!#"
                  >
                    View all <i className="mdi mdi-chevron-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12 col-md-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="chartjs-size-monitor">
                    <div className="chartjs-size-monitor-expand">
                      <div className="" />
                    </div>
                    <div className="chartjs-size-monitor-shrink">
                      <div className="" />
                    </div>
                  </div>
                  <h4 className="card-title text-black">Business Survey</h4>
                  <p className="text-muted pb-2">Jan 01 2019 - Dec 31 2019</p>
                  <canvas
                    height={196}
                    width={392}
                    id="surveyBarChart"
                    style={{
                      display: "block",
                      height: 157,
                      width: 314,
                    }}
                    className="chartjs-render-monitor"
                  />
                  <div className="row border-bottom pb-4 pt-4 align-items-center mx-0">
                    <div className="col-sm-9 pl-0">
                      <div className="d-flex">
                        <img
                          src="data:image/jpeg;base64,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"
                          alt=""
                        />
                        <div className="pl-2">
                          <h6 className="m-0">Red Chair</h6>
                          <p className="m-0">Home Decoration</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3 pl-0 pl-sm-3">
                      <div className="badge badge-inverse-success mt-3 mt-sm-0">
                        {" "}
                        +7.7%
                      </div>
                    </div>
                  </div>
                  <div className="row py-3 pb-0 align-items-center mx-0">
                    <div className="col-sm-9 pl-0">
                      <div className="d-flex">
                        <img
                          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBMRXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAKqADAAQAAAABAAAAKgAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/8AAEQgAKgAqAwERAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/bAEMBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/dAAQABv/aAAwDAQACEQMRAD8A/u1mmknkaWVizMSeTnGf4R6KOgAAAGAAMUARUAFABQAoJBBBII6EcEe46fz/ACoA1F1m9VVXep2qFyygscDGWJQkk9SSSSeST1oA/9D+7CgDjr/4h+AdKu5dP1Pxr4V0++gma3ns7zXtNtrmGdDteGaGW4WSKVWIVkcKVPB5JVYdSmnZzin1u9vXVW77P8GPll2f3fp1/T5mVefGL4SafKtvffFD4f2s7gssU3i7Q1cqDGGcD7bjahkj3tnCB1LlVJNS69Fb1qaXfmVl62cvz+/XlfLL+WT9Iy/4Hrt91kVJ/jj8FbYKbj4v/DGAPjaZvHfhiIEE4z8+pDAzxk4/Cn7aj0rU31upxem99Nlbyl23bE4yX2ZL5P8AX0/y3PQtK1bS9d02y1jQ9T0/WdI1GBbrTtV0q9ttR02/tnJCXFlfWcktrdQMVYLNBLJGxBAbghdE01dNNPqndfev66dBF+gD/9H+pz9uj9sPxx+yPe+BdYXwro9z8MvEuna1Fqniu7S/uby28UadvuV0cfZybTSrddKWK+jvL+GZL+WWW2ieJrV648TiZYedP4fZyi3zPfmT95WvokrO/K9H1tY2p0vaQnJPWFvdte99vytZWt1vf3fwTT9sKD9onxr8SfG2g+EfHs2iyazaTW+q6ZoPi/VtN1e91Oye41Z9L1XSLKfT7mKC5U+fFFI0dm1xHEz5ZIovKnjKFT2k5yjTbk7JvV2WjS3SbvvrfRdTqp0MTJRcacqiikm42tHrycyck5JeVkrJ3seDeNvi+sHj7wvYroPju3eXT/FObGTwf4y+030j6RhY7ZZtIEk/ltteYWyMIlBe7lii+auKeMw7pykq0G4268rte12m22rq3Ta/ZGkcLi1VUVQqQcnJLS8WnrJpr3U7ab3Xlc8l8d/ELVnWOCPwt4vtJJ7m10tbnUPD3i6SwsxfXMNouo6iPsmyDTLETteXku6JIreKYmRRlleHxmGlvWjq1a8nHV22eie17dPPcmrhq0VZUai5b+ba2t8Ss20ve6+W5+xvwE/bH+MmkeOf2Q/2Tv2efG3h/wAR+CZNb8PeErh9Q8O+HdS1LVfA+j3E2p+MLifU3SKWzWx0Gx8QagLqzBvomCRRF2hQV2RxuJjWwuGotOM6kIfDD4LtzcpNWSjDm1T1eq+zzZww9N0qlSbkuWLe/wAMtop6NuTlb7KVr6dT+kdsbm2/dydufTPH6V9CcJ//0v6gv+Cn37OHib9pz4S/D/wV4TsdO1TVPD3xAPjefS9Y+yf2Rqek6JpUq6jY6jHqEsVjdW04uIBJZXPnRXSBopLW6QtA/wAZxVmOa4HGZFSyrKZ5zLFyzNYrD08XhsHKhh6FDC1Hi1VxVqMpUXLlhQcqcqzq2jUjyzZ9Tw9l+W4/CZw8yzWnlCw39nTwuIqYbEYqNbEVauJpxwzp4W9aMJ8vNOsoVI0lG7g7pn85nxO+MPxW+EWpHwd4i8Q6rpj6GhsRp/hnwB4j1DSLKGFTFHbWX/CO+HZdKFrBtCRQWo8hF2hVGCK8P/WPMJxd+Ec2Uue2mNyRrlW6alj7Xtre2vyvL2JcM0KdlHirKZLlUtMJmkVqtklg01p0X/Aj89ah+1d4om12x1EeJPGVytjb6nC1tb/CH4gOZm1KGKLzHkfwejoYvL3lULKwJQhclq555zmU5Jx4OzWybbm8bknNtq1BY1p312lFx3tK1gjw9hYPXivLr9o4TNLPXv8AVe1tk0+t/s8lrX7Q+ta7IsbXXjebc+UiPwl8dRZbcMbpZfCqOMktyHG3PcKBUxznNeb/AJJTNkmt3iskadvL+0W3pbp992wlw/grO/FOWXTW+GzVa9bf7Dpqt1DTex9z/wDBNrwz44sf2wfgt8bNZsBb+E9P1jXtIkifRbrRNRudb1vwX4pgs5prS8srG9cTW6sjTGCVT5EYkkDBK7cHmObyzbJIVOH8VhMDiccsPPHV8bl01QqSw+LrRpPCYSvXrSjNUXD2vMoU5Ss170Tir5XltLAZrKnn2FxeMoYX28MJQwmPi60I18PSc1iMTQw9KLp+05nTSnOaTd1Y/ruTx7aMqt/Zep/Mobi3kI5GeD5fI9/8a/TbS7P7j4s//9P+7AjB5GGUkc9Qe49ulH9ffv8A11+QDGjif78UT57vFGx/Mgn9Vz3znFKy7J+qv+e/9dh3fd/J2EEMA6QQA/7MMY/ko/z3OCKastkvuX6+n9aBd939/wDXcPKh6+RDn18pM/nt46+/45ypp2X3Lp+W729RXf8AWv8AX9dgaGFtu6GFtrBkzDGdrDoy5B2sMnDDDDJwTlhSsuy77f1/wPmw2/L5f1/mWBDKQCI3IIBBA4IPTH4VV5d394H/1P7xdZVVvX2qq5VWO0AZYgEscAZJJyScknnPJoAyqACgAoAkhAMsYIBBdcg8g89D1/l+dAHoYAUBVAVVACqBgADgAAYAAHAAHHtQB//Z"
                          alt=""
                        />
                        <div className="pl-2">
                          <h6 className="m-0">Gray Sofa</h6>
                          <p className="m-0">Home Decoration</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3 pl-0 pl-sm-3">
                      <div className="badge badge-inverse-success mt-3 mt-sm-0">
                        {" "}
                        +7.7%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12 grid-margin stretch-card">
              <div className="card card-calender">
                <div className="card-body">
                  <div className="row pt-4">
                    <div className="col-sm-6">
                      <h1 className="text-white">
                        {new Date()?.toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </h1>
                      <h5 className="text-white">
                        {new Date().toLocaleTimeString()}
                      </h5>
                      <h5 className="text-white pt-2 m-0">
                        pressure : {Weather?.current?.pressure_in}
                      </h5>
                      <h5 className="text-white m-0">
                        Humidity : {Weather?.current?.humidity} %
                      </h5>
                      <h5 className="text-white m-0">
                        Wind : {Weather?.current?.wind_mph} km/h
                      </h5>
                    </div>
                    <div className="col-sm-6 text-sm-right pt-3 pt-sm-0">
                      <div className="d-flex justify-content-end align-items-center">
                      <img src={Weather?.current?.condition?.icon} alt="loading" />
                      <h3 className="text-white my-0">{Weather?.current?.condition?.text}</h3>
                      </div>
                      <p className="text-white m-0">
                        {" "}
                        {Weather?.location?.name}, {Weather?.location?.country}
                      </p>
                      <h3 className="text-white m-0">
                        {Weather?.current?.temp_c}°C
                      </h3>
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col-sm-12">
                      <ul className="d-flex justify-content-between pl-0 overflow-auto">
                        {Weather?.forecast?.forecastday?.map((item, index) => (
                          <li
                            key={index}
                            className="weakly-weather-item text-white font-weight-medium text-center active px-3"
                          >
                            <p className="mb-0">{new Date(item?.date)?.toLocaleDateString('en-US', { weekday: 'long' })}</p>
                            <div className="d-flex justify-content-center align-items-center">
                            {item?.day?.condition?.text}
                            <img src={item?.day?.condition?.icon} width={30}  alt="" />
                            </ div>
                            <p className="mb-0">
                              {item?.day?.maxtemp_c}<span className="symbol">°c</span>
                            </p>
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
        <div>
          <div id="right-sidebar" className="settings-panel right-sidebar">
            <i className="settings-close mdi mdi-close" />
            <nav className="bg-primary nav nav-tabs" role="tablist">
              <a
                href="#"
                role="tab"
                data-rb-event-key="TODOLIST"
                id="uncontrolled-tab-example-tab-TODOLIST"
                aria-controls="uncontrolled-tab-example-tabpane-TODOLIST"
                aria-selected="true"
                className="nav-item nav-link active"
              >
                TO DO LIST
              </a>
              <a
                href="#"
                role="tab"
                data-rb-event-key="CHATS"
                id="uncontrolled-tab-example-tab-CHATS"
                aria-controls="uncontrolled-tab-example-tabpane-CHATS"
                tabIndex={-1}
                aria-selected="false"
                className="nav-item nav-link"
              >
                CHATS
              </a>
            </nav>
            <div className="tab-content">
              <div
                id="uncontrolled-tab-example-tabpane-TODOLIST"
                aria-labelledby="uncontrolled-tab-example-tab-TODOLIST"
                role="tabpanel"
                aria-hidden="false"
                className="fade test-tab tab-pane active show"
              >
                <div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="px-3">
                        <div>
                          <h4 className="card-title">Todo List</h4>
                          <form className="add-items d-flex">
                            <input
                              type="text"
                              className="form-control h-auto"
                              placeholder="What do you need to do today?"
                              required=""
                              defaultValue=""
                            />
                            <button
                              type="submit"
                              className="btn btn-primary font-weight-bold"
                            >
                              Add
                            </button>
                          </form>
                          <div className="list-wrapper">
                            <ul className="d-flex flex-column todo-list">
                              <li>
                                <div className="form-check">
                                  <label
                                    htmlFor=""
                                    className="form-check-label"
                                  >
                                    <input
                                      className="checkbox"
                                      type="checkbox"
                                    />{" "}
                                    Pick up kids from school{" "}
                                    <i className="input-helper" />
                                  </label>
                                </div>
                                <i className="remove mdi mdi-close-circle-outline" />
                              </li>
                              <li className="completed">
                                <div className="form-check">
                                  <label
                                    htmlFor=""
                                    className="form-check-label"
                                  >
                                    <input
                                      className="checkbox"
                                      type="checkbox"
                                      defaultChecked=""
                                    />{" "}
                                    Prepare for presentation{" "}
                                    <i className="input-helper" />
                                  </label>
                                </div>
                                <i className="remove mdi mdi-close-circle-outline" />
                              </li>
                              <li>
                                <div className="form-check">
                                  <label
                                    htmlFor=""
                                    className="form-check-label"
                                  >
                                    <input
                                      className="checkbox"
                                      type="checkbox"
                                    />{" "}
                                    Print Statements{" "}
                                    <i className="input-helper" />
                                  </label>
                                </div>
                                <i className="remove mdi mdi-close-circle-outline" />
                              </li>
                              <li>
                                <div className="form-check">
                                  <label
                                    htmlFor=""
                                    className="form-check-label"
                                  >
                                    <input
                                      className="checkbox"
                                      type="checkbox"
                                    />{" "}
                                    Create invoice{" "}
                                    <i className="input-helper" />
                                  </label>
                                </div>
                                <i className="remove mdi mdi-close-circle-outline" />
                              </li>
                              <li className="completed">
                                <div className="form-check">
                                  <label
                                    htmlFor=""
                                    className="form-check-label"
                                  >
                                    <input
                                      className="checkbox"
                                      type="checkbox"
                                      defaultChecked=""
                                    />{" "}
                                    Call John <i className="input-helper" />
                                  </label>
                                </div>
                                <i className="remove mdi mdi-close-circle-outline" />
                              </li>
                              <li>
                                <div className="form-check">
                                  <label
                                    htmlFor=""
                                    className="form-check-label"
                                  >
                                    <input
                                      className="checkbox"
                                      type="checkbox"
                                    />{" "}
                                    Meeting with Alisa{" "}
                                    <i className="input-helper" />
                                  </label>
                                </div>
                                <i className="remove mdi mdi-close-circle-outline" />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="events py-4 border-bottom px-3">
                    <div className="wrapper d-flex mb-2">
                      <i className="mdi mdi-circle-outline text-primary mr-2" />
                      <span>Feb 11 2018</span>
                    </div>
                    <p className="mb-0 font-weight-thin text-gray">
                      Creating component page
                    </p>
                    <p className="text-gray mb-0">build a js based app</p>
                  </div>
                  <div className="events pt-4 px-3">
                    <div className="wrapper d-flex mb-2">
                      <i className="mdi mdi-circle-outline text-primary mr-2" />
                      <span>Feb 7 2018</span>
                    </div>
                    <p className="mb-0 font-weight-thin text-gray">
                      Meeting with Alisa
                    </p>
                    <p className="text-gray mb-0 ">Call Sarah Graves</p>
                  </div>
                </div>
              </div>
              <div
                id="uncontrolled-tab-example-tabpane-CHATS"
                aria-labelledby="uncontrolled-tab-example-tab-CHATS"
                role="tabpanel"
                aria-hidden="true"
                className="fade tab-pane"
              >
                <div>
                  <div className="d-flex align-items-center justify-content-between border-bottom">
                    <p className="settings-heading border-top-0 mb-3 pl-3 pt-0 border-bottom-0 pb-0">
                      FRIENDS
                    </p>
                    <small className="settings-heading border-top-0 mb-3 pt-0 border-bottom-0 pb-0 pr-3 font-weight-normal">
                      See All
                    </small>
                  </div>
                  <ul className="chat-list">
                    <li className="list active">
                      <div className="profile">
                        <img
                          src="/demo/breeze/react/template/demo_1/preview/static/media/face1.c80e465a.jpg"
                          alt="profile"
                        />
                        <span className="online" />
                      </div>
                      <div className="info">
                        <p>Thomas Douglas</p>
                        <p>Available</p>
                      </div>
                      <small className="text-muted my-auto">19 min</small>
                    </li>
                    <li className="list">
                      <div className="profile">
                        <img
                          src="/demo/breeze/react/template/demo_1/preview/static/media/face2.97479542.jpg"
                          alt="profile"
                        />
                        <span className="offline" />
                      </div>
                      <div className="info">
                        <div className="wrapper d-flex">
                          <p>Catherine</p>
                        </div>
                        <p>Away</p>
                      </div>
                      <div className="badge badge-success badge-pill my-auto mx-2">
                        4
                      </div>
                      <small className="text-muted my-auto">23 min</small>
                    </li>
                    <li className="list">
                      <div className="profile">
                        <img
                          src="/demo/breeze/react/template/demo_1/preview/static/media/face3.4812ae2b.jpg"
                          alt="profile"
                        />
                        <span className="online" />
                      </div>
                      <div className="info">
                        <p>Daniel Russell</p>
                        <p>Available</p>
                      </div>
                      <small className="text-muted my-auto">14 min</small>
                    </li>
                    <li className="list">
                      <div className="profile">
                        <img
                          src="/demo/breeze/react/template/demo_1/preview/static/media/face4.8a9f802c.jpg"
                          alt="profile"
                        />
                        <span className="offline" />
                      </div>
                      <div className="info">
                        <p>James Richardson</p>
                        <p>Away</p>
                      </div>
                      <small className="text-muted my-auto">2 min</small>
                    </li>
                    <li className="list">
                      <div className="profile">
                        <img
                          src="/demo/breeze/react/template/demo_1/preview/static/media/face5.70c1ae8c.jpg"
                          alt="profile"
                        />
                        <span className="online" />
                      </div>
                      <div className="info">
                        <p>Madeline Kennedy</p>
                        <p>Available</p>
                      </div>
                      <small className="text-muted my-auto">5 min</small>
                    </li>
                    <li className="list">
                      <div className="profile">
                        <img
                          src="/demo/breeze/react/template/demo_1/preview/static/media/face6.3b8a2f0b.jpg"
                          alt="profile"
                        />
                        <span className="online" />
                      </div>
                      <div className="info">
                        <p>Sarah Graves</p>
                        <p>Available</p>
                      </div>
                      <small className="text-muted my-auto">47 min</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
