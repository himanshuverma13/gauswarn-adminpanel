import React, { useState } from 'react';
import { useForm } from 'react-hook-form'; // React Hook Form
import { FaRegUser, FaLock } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
// Images
import Logo from "../../Assets/images/logo/RAJLAXMI JAVIK PNG.png";

const Forgot = () => {
  const [step, setStep] = useState(1); // Step 1: Input email/mobile, Step 2: Input OTP
  const [userData, setUserData] = useState(null); // To store user email/mobile temporarily
  const { register, reset, handleSubmit, formState: { errors } } = useForm();

  // Step 1: Send OTP
  const handleSendOtp = (data) => {
    setUserData(data); // Store user data temporarily
    console.log("Sending OTP to:", data);
    // Mock sending OTP (Replace this with your API call)
    setTimeout(() => {
      console.log("OTP sent successfully!");
      setStep(2); // Move to OTP verification step
    }, 1000);
  };

  // Step 2: Verify OTP
  const handleVerifyOtp = (data) => {
    console.log("Verifying OTP:", data);
    // Mock OTP verification (Replace this with your API call)
    setTimeout(() => {
      console.log("OTP verified successfully!");
      reset(); // Clear the form
      alert("OTP verified. You can now reset your password.");
    }, 1000);
  };

  return (
    <>
      <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="main-panel">
          <div className="content-wrapper">
            <div>
              <div className="d-flex align-items-stretch auth auth-img-bg h-100">
                <div className="row flex-grow">
                  <div className="col-lg-6 d-flex align-items-center justify-content-center">
                    <div className="auth-form-transparent shadow text-left p-3">
                      <div className="brand-logo mb-3 d-flex justify-content-center">
                        <img src={Logo} className="admin-Logo" alt="logo" />
                      </div>
                      <h2 className='text-center text-uppercase mb-3'>{step === 1 ? "Forgot Password?" : "Verify OTP"}</h2>
                     
                      <form
                        className="pt-3"
                        onSubmit={handleSubmit(step === 1 ? handleSendOtp : handleVerifyOtp)}
                      >
                        {step === 1 && (
                          <>
                            <div className="form-group">
                              <label>Email / Mobile Number</label>
                              <div className="input-group">
                                <div className="input-group-prepend bg-transparent">
                                  <span className="input-group-text bg-transparent border-right-0 rounded-0">
                                    <FaRegUser className="text-primary fw-bold" />
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  className={`form-control form-control-lg border-left-0 ${
                                    errors.username ? "is-invalid" : ""
                                  }`}
                                  placeholder="Email / Mobile Number"
                                  {...register("username", {
                                    required: "Email / Mobile Number is required",
                                  })}
                                />
                              </div>
                              {errors.username && (
                                <div className="text-danger mt-1">{errors.username.message}</div>
                              )}
                            </div>
                          </>
                        )}

                        {step === 2 && (
                          <>
                            <div className="form-group">
                              <label>OTP</label>
                              <div className="input-group">
                                <div className="input-group-prepend bg-transparent">
                                  <span className="input-group-text bg-transparent border-right-0 rounded-0">
                                    <FaLock className="text-primary fw-bold" />
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  className={`form-control form-control-lg border-left-0 ${
                                    errors.otp ? "is-invalid" : ""
                                  }`}
                                  placeholder="Enter OTP"
                                  {...register("otp", { required: "OTP is required" })}
                                />
                              </div>
                              {errors.otp && (
                                <div className="text-danger mt-1">{errors.otp.message}</div>
                              )}
                            </div>
                          </>
                        )}

                        <div className="my-3">
                          <button
                            type="submit"
                            className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                          >
                            {step === 1 ? "Send OTP" : "Verify OTP"}
                          </button>
                        </div>
                        <div className="text-center mt-4 font-weight-light mb-2">
                          Don't have an account?{" "}
                          <NavLink to="/register" className="text-primary">
                            Create
                          </NavLink>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 login-half-bg d-flex"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forgot;
