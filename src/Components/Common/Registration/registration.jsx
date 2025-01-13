import React from "react";
import { useForm } from "react-hook-form";
// React-Icons
import { FaRegUser, FaPhoneAlt, FaLock } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
// Images
import Logo from "../../Assets/images/logo/RAJLAXMI JAVIK PNG.png";
import { RegisterAPI } from "../APIs/api";
import { toast } from "react-toastify";

const Registration = () => {
  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // Watch the values of password and confirmPassword
  const password = watch("password");

  const onSubmit = async (data) => {

    try {
      const payload = {
        full_name: data?.username,
        email: data?.email,
        password: data?.password,
        mobile_number: data?.mobile,
      };
      const response = await RegisterAPI(payload);
      if(response?.message){
        toast.success(response?.message)
        window.location = "/login"
      }
      reset();
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <div className="container-fluid page-body-wrapper full-page-wrapper">
      <div className="main-panel">
        <div className="content-wrapper">
          <div>
            <div className="d-flex align-items-stretch auth auth-img-bg h-100">
              <div className="row flex-grow">
                <div className="col-lg-6 d-flex align-items-center justify-content-center">
                  <div className="auth-form-transparent text-left p-3 shadow shadow-primary">
                    <div className="brand-logo mb-3 d-flex justify-content-center">
                      <img src={Logo} alt="logo" />
                    </div>
                    <h2 className="text-center text-uppercase">Registration</h2>

                    <form
                      className="pt-3 row"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <div className="form-group col-lg-12">
                        <label>Username</label>
                        <div className="input-group">
                          <div className="input-group-prepend bg-transparent">
                            <span className="input-group-text bg-transparent border-right-0 rounded-0">
                              <FaRegUser className="text-primary" />
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control form-control-lg border-left-0"
                            placeholder="Username"
                            {...register("username", {
                              required: "Username is required",
                            })}
                          />
                        </div>
                        {errors.username && (
                          <p className="text-danger">
                            {errors.username.message}
                          </p>
                        )}
                      </div>
                      <div className="form-group col-lg-12">
                        <label>Email</label>
                        <div className="input-group">
                          <div className="input-group-prepend bg-transparent">
                            <span className="input-group-text bg-transparent border-right-0 rounded-0">
                              <IoMailOutline className="text-primary fs-4" />
                            </span>
                          </div>
                          <input
                            type="email"
                            className="form-control form-control-lg border-left-0"
                            placeholder="Email"
                            {...register("email", {
                              required: "Email is required",
                              pattern: {
                                value:
                                  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Enter a valid email",
                              },
                            })}
                          />
                        </div>
                        {errors.email && (
                          <p className="text-danger">{errors.email.message}</p>
                        )}
                      </div>
                      <div className="form-group col-lg-12">
                        <label>Mobile Number</label>
                        <div className="input-group">
                          <div className="input-group-prepend bg-transparent">
                            <span className="input-group-text bg-transparent border-right-0 rounded-0">
                              <FaPhoneAlt className="text-primary" />
                            </span>
                          </div>
                          <input
                            type="tel"
                            className="form-control form-control-lg border-left-0"
                            placeholder="Mobile Number"
                            {...register("mobile", {
                              required: "Mobile number is required",
                              pattern: {
                                value: /^[0-9]{10}$/,
                                message: "Enter a valid 10-digit mobile number",
                              },
                            })}
                          />
                        </div>
                        {errors.mobile && (
                          <p className="text-danger">{errors.mobile.message}</p>
                        )}
                      </div>
                      <div className="form-group col-lg-6">
                        <label>Password</label>
                        <div className="input-group">
                          <div className="input-group-prepend bg-transparent">
                            <span className="input-group-text bg-transparent border-right-0 rounded-0">
                              <FaLock className="text-primary" />
                            </span>
                          </div>
                          <input
                            type="password"
                            className="form-control form-control-lg border-left-0"
                            placeholder="Password"
                            {...register("password", {
                              required: "Password is required",
                              minLength: {
                                value: 6,
                                message:
                                  "Password must be at least 6 characters",
                              },
                            })}
                          />
                        </div>
                        {errors.password && (
                          <p className="text-danger">
                            {errors.password.message}
                          </p>
                        )}
                      </div>
                      <div className="form-group col-lg-6">
                        <label>Confirm Password</label>
                        <div className="input-group">
                          <div className="input-group-prepend bg-transparent">
                            <span className="input-group-text bg-transparent border-right-0 rounded-0">
                              <FaLock className="text-primary" />
                            </span>
                          </div>
                          <input
                            type="password"
                            className="form-control form-control-lg border-left-0"
                            placeholder="Confirm Password"
                            {...register("confirmPassword", {
                              required: "Please confirm your password",
                              validate: (value) =>
                                value === password || "Passwords do not match",
                            })}
                          />
                        </div>
                        {errors.confirmPassword && (
                          <p className="text-danger">
                            {errors.confirmPassword.message}
                          </p>
                        )}
                      </div>
                      <div className="col-lg-12 d-flex justify-content-center">
                        <div className="mt-2">
                          <button
                            type="submit"
                            className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                          >
                            SIGN UP
                          </button>
                        </div>
                      </div>
                      <div className="text-center my-3 font-weight-light col-lg-12 d-flex justify-content-center">
                        Already have an account?{" "}
                        <NavLink className="text-primary" to="/login">
                          Login
                        </NavLink>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 register-half-bg d-flex flex-row"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
