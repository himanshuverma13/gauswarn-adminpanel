import React from "react";
import { useForm } from "react-hook-form";
import { FaRegUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import Logo from "../../Assets/images/logo/RAJLAXMI JAVIK PNG.png";
import { GetUserDetailsAPI, LoginAPI } from "../APIs/api";
import { toast } from "react-toastify";

const UserLogin = () => {
  const navigate = useNavigate(); // ✅ Initialize useNavigate

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const payload = {
        email: data?.username,
        password: data?.password,
      };
      const response = await LoginAPI(payload);
      
      reset();
      if (response?.data?.success) {
        localStorage.setItem("userDetails", JSON.stringify(response));
        toast.success(response?.data?.message);
        // navigate("/home"); // ✅ Use navigate instead of window.location
        window.location ="/home"
      }
      toast.error(response?.data?.message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="container-fluid page-body-wrapper full-page-wrapper">
      <div className="main-panel">
        <div className="content-wrapper">
          <div className="d-flex align-items-stretch auth auth-img-bg h-100">
            <div className="row flex-grow">
              <div className="col-lg-6 d-flex align-items-center justify-content-center">
                <div className="auth-form-transparent shadow text-left p-3">
                  <div className="brand-logo mb-3 d-flex justify-content-center">
                    <img src={Logo} className="admin-Logo" alt="logo" />
                  </div>
                  <h2 className="text-center text-uppercase">Login</h2>
                  <form className="pt-3" onSubmit={handleSubmit(onSubmit)}>
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
                        <div className="text-danger mt-1">
                          {errors.username.message}
                        </div>
                      )}
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <div className="input-group">
                        <div className="input-group-prepend bg-transparent">
                          <span className="input-group-text bg-transparent border-right-0 rounded-0">
                            <FaLock className="text-primary fw-bold" />
                          </span>
                        </div>
                        <input
                          type="password"
                          className={`form-control form-control-lg border-left-0 ${
                            errors.password ? "is-invalid" : ""
                          }`}
                          placeholder="Password"
                          {...register("password", {
                            required: "Password is required",
                          })}
                        />
                      </div>
                      {errors.password && (
                        <div className="text-danger mt-1">
                          {errors.password.message}
                        </div>
                      )}
                    </div>
                    <div className="my-1 d-flex justify-content-center align-items-center">
                      <div
                        onClick={() => navigate("/forgot")} // ✅ Use navigate()
                        className="auth-link text-black"
                      >
                        Forgot password?
                      </div>
                    </div>
                    <div className="my-3">
                      <button
                        type="submit"
                        className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                      >
                        LOGIN
                      </button>
                    </div>
                    <div className="text-center mt-4 font-weight-light mb-2">
                      Don't have an account?{" "}
                      <div
                        onClick={() => navigate("/register")} // ✅ Use navigate()
                        className="text-primary"
                      >
                        Create
                      </div>
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
  );
};

export default UserLogin;
