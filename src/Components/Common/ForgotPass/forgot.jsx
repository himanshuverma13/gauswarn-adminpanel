import React, { useState } from 'react';
import { useForm } from 'react-hook-form'; // React Hook Form
import { FaRegUser, FaLock } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { ForgotAPI, ResetAPI } from '../APIs/api'; // Import APIs
// Images
import Logo from "../../Assets/images/logo/RAJLAXMI JAVIK PNG.png";

const Forgot = () => {
  const [step, setStep] = useState(1); // Step 1: Input email/mobile, Step 2: Input OTP
  const [userData, setUserData] = useState(null); // To store user email/mobile temporarily
  const { register, reset, handleSubmit, watch, formState: { errors } } = useForm();

  // Step 1: Send OTP
  const handleSendOtp = async (data) => {
    setUserData(data); // Store user data temporarily
    console.log("Sending OTP to:", data);

    try {
      const response = await ForgotAPI.sendOtp(data);
      console.log('response: ', response);
      if (response.success) {
        console.log("OTP sent successfully!", response.message);
        setStep(2); // Move to OTP verification step
      } else {
        alert(response.message || "Failed to send OTP.");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert("An error occurred while sending OTP.");
    }
  };

  // Step 2: Verify OTP
  const handleVerifyOtp = async (data) => {
    console.log("Verifying OTP:", data);

    try {
      const response = await ForgotAPI.verifyOtp({ ...userData, otp: data.otp });
      if (response.success) {
        console.log("OTP verified successfully!");
        alert(response.message || "OTP verified. You can now reset your password.");
        setStep(3); // Move to password reset step
      } else {
        alert(response.message || "Failed to verify OTP.");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      alert("An error occurred while verifying OTP.");
    }
  };

  // Step 3: Reset Password
  const handleResetPassword = async (data) => {
    console.log("Resetting password:", data);

    try {
      const response = await ResetAPI.resetPassword({ 
        ...userData, 
        password: data.password 
      });
      if (response.success) {
        console.log("Password reset successfully!");
        alert(response.message || "Your password has been reset successfully.");
        reset(); // Clear the form
        setStep(1); // Reset to the initial step
      } else {
        alert(response.message || "Failed to reset password.");
      }
    } catch (error) {
      console.error("Error resetting password:", error);
      alert("An error occurred while resetting your password.");
    }
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
                      <h2 className='text-center text-uppercase mb-3'>{step === 1 ? "Forgot Password?" : step === 2 ? "Verify OTP" : "Reset Password"}</h2>

                      <form
                        className="pt-3"
                        onSubmit={handleSubmit(step === 1 ? handleSendOtp : step === 2 ? handleVerifyOtp : handleResetPassword)}
                      >
                        {step === 1 && (
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
                                className={`form-control form-control-lg border-left-0 ${errors.username ? "is-invalid" : ""}`}
                                placeholder="Email / Mobile Number"
                                {...register("username", { required: "Email / Mobile Number is required" })}
                              />
                            </div>
                            {errors.username && <div className="text-danger mt-1">{errors.username.message}</div>}
                          </div>
                        )}

                        {step === 2 && (
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
                                className={`form-control form-control-lg border-left-0 ${errors.otp ? "is-invalid" : ""}`}
                                placeholder="Enter OTP"
                                {...register("otp", { required: "OTP is required" })}
                              />
                            </div>
                            {errors.otp && <div className="text-danger mt-1">{errors.otp.message}</div>}
                          </div>
                        )}

                        {step === 3 && (
                          <>
                            <div className="form-group">
                              <label>New Password</label>
                              <div className="input-group">
                                <div className="input-group-prepend bg-transparent">
                                  <span className="input-group-text bg-transparent border-right-0 rounded-0">
                                    <FaLock className="text-primary fw-bold" />
                                  </span>
                                </div>
                                <input
                                  type="password"
                                  className={`form-control form-control-lg border-left-0 ${errors.password ? "is-invalid" : ""}`}
                                  placeholder="Enter new password"
                                  {...register("password", { required: "Password is required" })}
                                />
                              </div>
                              {errors.password && <div className="text-danger mt-1">{errors.password.message}</div>}
                            </div>

                            <div className="form-group">
                              <label>Confirm Password</label>
                              <div className="input-group">
                                <div className="input-group-prepend bg-transparent">
                                  <span className="input-group-text bg-transparent border-right-0 rounded-0">
                                    <FaLock className="text-primary fw-bold" />
                                  </span>
                                </div>
                                <input
                                  type="password"
                                  className={`form-control form-control-lg border-left-0 ${errors.confirmPassword ? "is-invalid" : ""}`}
                                  placeholder="Confirm new password"
                                  {...register("confirmPassword", {
                                    required: "Confirm password is required",
                                    validate: (value) => value === watch("password") || "Passwords do not match",
                                  })}
                                />
                              </div>
                              {errors.confirmPassword && <div className="text-danger mt-1">{errors.confirmPassword.message}</div>}
                            </div>
                          </>
                        )}

                        <div className="my-3">
                          <button
                            type="submit"
                            className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                          >
                            {step === 1 ? "Send OTP" : step === 2 ? "Verify OTP" : "Reset Password"}
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
