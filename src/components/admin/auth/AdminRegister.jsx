"use client";
import Link from "next/link";
import React from "react";

const AdminRegister = () => {
  return (
    <div className="authentication-wrapper authentication-cover">
      {/* Logo */}
      <Link
        href="#"
        className="auth-cover-brand d-flex align-items-center gap-2"
      >
        <span className="app-brand-logo demo">
          <span className="text-primary">
            {/* SVG Correct */}
            <svg
              width={32}
              height={18}
              viewBox="0 0 38 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30.0944 2.22569C29.0511 0.444187 26.7508 -0.172113 24.9566 0.849138C23.1623 1.87039 22.5536 4.14247 23.5969 5.92397L30.5368 17.7743C31.5801 19.5558 33.8804 20.1721 35.6746 19.1509C37.4689 18.1296 38.0776 15.8575 37.0343 14.076L30.0944 2.22569Z"
                fill="currentColor"
              />
              <path
                d="M30.171 2.22569C29.1277 0.444187 26.8274 -0.172113 25.0332 0.849138C23.2389 1.87039 22.6302 4.14247 23.6735 5.92397L30.6134 17.7743C31.6567 19.5558 33.957 20.1721 35.7512 19.1509C37.5455 18.1296 38.1542 15.8575 37.1109 14.076L30.171 2.22569Z"
                fill="url(#paint0_linear)"
                fillOpacity="0.4"
              />
            </svg>
          </span>
        </span>
        <span className="app-brand-text demo text-heading fw-semibold">
          Materialize
        </span>
      </Link>

      {/* Body wrapper */}
      <div className="authentication-inner row m-0">

        {/* Left Illustration */}
        <div className="d-none d-lg-flex col-lg-7 col-xl-8 align-items-center justify-content-center p-12 pb-2">
          <img
            src="/img/illustrations/auth-register-illustration-light.png"
            className="auth-cover-illustration w-100"
            alt="auth-illustration"
          />

          <img
            src="/img/illustrations/auth-cover-register-mask-light.png"
            className="authentication-image"
            alt="mask"
          />
        </div>

        {/* Register Form */}
        <div className="d-flex col-12 col-lg-5 col-xl-4 align-items-center authentication-bg position-relative py-sm-12 px-12 py-6">
          <div className="w-px-400 mx-auto pt-12 pt-lg-0">

            <h4 className="mb-1">Adventure starts here 🚀</h4>
            <p className="mb-5">Make your app management easy and fun!</p>

            <form className="mb-5">
              {/* Username */}
              <div className="form-floating form-floating-outline mb-5">
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Enter your username"
                />
                <label htmlFor="username">Username</label>
              </div>

              {/* Email */}
              <div className="form-floating form-floating-outline mb-5">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                />
                <label htmlFor="email">Email</label>
              </div>

              {/* Password */}
              <div className="mb-5 form-password-toggle">
                <div className="input-group input-group-merge">
                  <div className="form-floating form-floating-outline flex-grow-1">
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      placeholder="********"
                    />
                    <label htmlFor="password">Password</label>
                  </div>
                  <span className="input-group-text cursor-pointer">
                    <i className="icon-base ri ri-eye-off-line" />
                  </span>
                </div>
              </div>

              {/* Terms */}
              <div className="mb-5">
                <div className="form-check mt-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="terms"
                  />
                  <label className="form-check-label" htmlFor="terms">
                    I agree to <Link href="#">privacy policy & terms</Link>
                  </label>
                </div>
              </div>

              <button type="submit" className="btn btn-primary d-grid w-100">
                Sign up
              </button>
            </form>

            {/* Login Link */}
            <p className="text-center mb-5">
              <span>Already have an account?</span>
              <Link href="/admin/login">
                <span> Sign in instead</span>
              </Link>
            </p>

            {/* Divider */}
            <div className="divider my-5">
              <div className="divider-text">or</div>
            </div>

            {/* Social Icons */}
            <div className="d-flex justify-content-center gap-2">
              <Link href = "#" className="btn btn-icon rounded-circle btn-text-facebook">
                <i className="icon-base ri ri-facebook-fill icon-18px" />
              </Link>
              <Link href = "#" className="btn btn-icon rounded-circle btn-text-twitter">
                <i className="icon-base ri ri-twitter-fill icon-18px" />
              </Link>
              <Link href = "#" className="btn btn-icon rounded-circle btn-text-github">
                <i className="icon-base ri ri-github-fill icon-18px" />
              </Link>
              <Link href = "#" className="btn btn-icon rounded-circle btn-text-google-plus">
                <i className="icon-base ri ri-google-fill icon-18px" />
              </Link>
            </div>

          </div>
        </div>
        {/* /Register */}
      </div>
    </div>
  );
};

export default AdminRegister;
