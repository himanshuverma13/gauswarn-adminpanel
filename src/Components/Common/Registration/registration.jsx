import React from 'react';
import { useForm } from 'react-hook-form';
// React-Icons
import { FaRegUser, FaPhoneAlt, FaLock } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

const Registration = () => {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log('Form Data:', data);
        reset();
        // Handle form submission logic here
    };

    return (
        <div className="container-fluid page-body-wrapper full-page-wrapper">
            <div className="main-panel">
                <div className="content-wrapper">
                    <div>
                        <div className="d-flex align-items-stretch auth auth-img-bg h-100">
                            <div className="row flex-grow">
                                <div className="col-lg-6 d-flex align-items-center justify-content-center">
                                    <div className="auth-form-transparent text-left p-3">
                                        <div className="brand-logo">
                                            <img
                                                src="/demo/breeze/react/template/demo_1/preview/static/media/logo.1cb8ea24.svg"
                                                alt="logo"
                                            />
                                        </div>
                                        <h4>New here?</h4>
                                        <h6 className="font-weight-light">
                                            Join us today! It takes only few steps
                                        </h6>
                                        <form className="pt-3" onSubmit={handleSubmit(onSubmit)}>
                                            <div className="form-group">
                                                <label>Username</label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend bg-transparent">
                                                        <span className="input-group-text bg-transparent border-right-0">
                                                            <FaRegUser className="text-primary" />
                                                        </span>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-lg border-left-0"
                                                        placeholder="Username"
                                                        {...register('username', { required: 'Username is required' })}
                                                    />
                                                </div>
                                                {errors.username && (
                                                    <p className="text-danger">{errors.username.message}</p>
                                                )}
                                            </div>
                                            <div className="form-group">
                                                <label>Email</label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend bg-transparent">
                                                        <span className="input-group-text bg-transparent border-right-0">
                                                            <IoMailOutline className="text-primary fs-4" />
                                                        </span>
                                                    </div>
                                                    <input
                                                        type="email"
                                                        className="form-control form-control-lg border-left-0"
                                                        placeholder="Email"
                                                        {...register('email', {
                                                            required: 'Email is required',
                                                            pattern: {
                                                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                                                message: 'Enter a valid email',
                                                            },
                                                        })}
                                                    />
                                                </div>
                                                {errors.email && (
                                                    <p className="text-danger">{errors.email.message}</p>
                                                )}
                                            </div>
                                            <div className="form-group">
                                                <label>Mobile Number</label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend bg-transparent">
                                                        <span className="input-group-text bg-transparent border-right-0">
                                                            <FaPhoneAlt className="text-primary" />
                                                        </span>
                                                    </div>
                                                    <input
                                                        type="tel"
                                                        className="form-control form-control-lg border-left-0"
                                                        placeholder="Mobile Number"
                                                        {...register('mobile', {
                                                            required: 'Mobile number is required',
                                                            pattern: {
                                                                value: /^[0-9]{10}$/,
                                                                message: 'Enter a valid 10-digit mobile number',
                                                            },
                                                        })}
                                                    />
                                                </div>
                                                {errors.mobile && (
                                                    <p className="text-danger">{errors.mobile.message}</p>
                                                )}
                                            </div>
                                            <div className="form-group">
                                                <label>Password</label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend bg-transparent">
                                                        <span className="input-group-text bg-transparent border-right-0">
                                                            <FaLock className="text-primary" />
                                                        </span>
                                                    </div>
                                                    <input
                                                        type="password"
                                                        className="form-control form-control-lg border-left-0"
                                                        placeholder="Password"
                                                        {...register('password', {
                                                            required: 'Password is required',
                                                            minLength: {
                                                                value: 6,
                                                                message: 'Password must be at least 6 characters',
                                                            },
                                                        })}
                                                    />
                                                </div>
                                                {errors.password && (
                                                    <p className="text-danger">{errors.password.message}</p>
                                                )}
                                            </div>
                                            <div className="form-group">
                                                <label>Confirm Password</label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend bg-transparent">
                                                        <span className="input-group-text bg-transparent border-right-0">
                                                            <FaLock className="text-primary" />
                                                        </span>
                                                    </div>
                                                    <input
                                                        type="password"
                                                        className="form-control form-control-lg border-left-0"
                                                        placeholder="Confirm Password"
                                                        {...register('confirmPassword', {
                                                            required: 'Please confirm your password',
                                                        })}
                                                    />
                                                </div>
                                                {errors.confirmPassword && (
                                                    <p className="text-danger">{errors.confirmPassword.message}</p>
                                                )}
                                            </div>
                                            <div className="mt-2">
                                                <button
                                                    type="submit"
                                                    className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                                                >
                                                    SIGN UP
                                                </button>
                                            </div>
                                            <div className="text-center mt-2 font-weight-light">
                                                Already have an account?{' '}
                                                <NavLink 
                                                    className="text-primary"
                                                     to="/login"
                                                >
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
