import React from 'react';
import { useForm } from 'react-hook-form'; // React Hook Form
import { FaRegUser, FaLock } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const UserLogin = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    reset();
    console.log('Form Data:', data);
    // Handle login logic here
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
                      <div className="brand-logo">
                        <img src="" alt="logo" />
                      </div>
                      <h4>Welcome back!</h4>
                      <h6 className="font-weight-light">Happy to see you again!</h6>
                      <form className="pt-3" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                          <label>Username</label>
                          <div className="input-group">
                            <div className="input-group-prepend bg-transparent">
                              <span className="input-group-text bg-transparent border-right-0 rounded-0">
                                <FaRegUser className="text-primary fw-bold" />
                              </span>
                            </div>
                            <input
                              type="text"
                              className={`form-control form-control-lg border-left-0 ${errors.username ? 'is-invalid' : ''
                                }`}
                              placeholder="Username"
                              {...register('username', { required: 'Username is required' })}
                            />
                          </div>
                          {errors.username && (
                            <div className="text-danger mt-1">{errors.username.message}</div>
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
                              className={`form-control form-control-lg border-left-0 ${errors.password ? 'is-invalid' : ''
                                }`}
                              placeholder="Password"
                              {...register('password', { required: 'Password is required' })}
                            />
                          </div>
                          {errors.password && (
                            <div className="text-danger mt-1">{errors.password.message}</div>
                          )}
                        </div>
                        <div className="my-1 d-flex justify-content-center align-items-center">
                          <a href="#!" className="auth-link text-black">
                            Forgot password?
                          </a>
                        </div>
                        <div className="my-3">
                          <button
                            type="submit"
                            className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                          >
                            LOGIN
                          </button>
                        </div>
                        <div className="text-center mt-4 font-weight-light">
                          Don't have an account?{' '}
                          <NavLink to="/register"
                            className="text-primary"
                          >
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

export default UserLogin;
