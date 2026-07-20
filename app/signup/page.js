
"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import "../styles/styles.css";
import Link from "next/link";
import { useState } from "react";

function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!formData.firstName.trim()) {
      validationErrors.firstName = "Please enter your first name";
    }
    if (!formData.lastName.trim()) {
      validationErrors.lastName = "Please enter your last name";
    }
    if (!formData.password.trim()) {
      validationErrors.password = "Please enter a password";
    }
    if (!formData.confirmPassword.trim()) {
      validationErrors.confirmPassword = "Please confirm your password";
    }
    if (
      formData.password &&
      formData.confirmPassword &&
      formData.password !== formData.confirmPassword
    ) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        password: "",
        confirmPassword: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="container my-5">
      <div
        style={{
          border: "2px solid #ddd",
          borderRadius: "15px",
          padding: "30px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          backgroundColor: "#fff",
        }}
      >
        <div className="row align-items-center">
          {/* LEFT SIDE: Logo + Hero Image */}
          <div className="col-lg-7 text-center text-lg-start position-relative">
            <div className="mb-3">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={120}
                height={60}
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
            <Image
              src="/images/Layer.png"
              alt="Hero Image"
              width={600}
              height={400}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>

          {/* RIGHT SIDE: Signup Form */}
          <div className="col-lg-5">
            <form className="p-4 p-md-5" onSubmit={handleSubmit}>
              <div
                className="d-flex justify-content-end align-items-center mb-3"
                style={{ gap: "8px" }}
              >
                <Link
                  href="/login"
                  className="text-muted"
                  style={{ textDecoration: "underline" }}
                >
                  Already a member?
                </Link>
                <button
                  type="button"
                  className="btn btn-sm"
                  style={{
                    backgroundColor: "pink",
                    color: "white",
                    borderRadius: "20px",
                  }}
                  onClick={() => (window.location.href = "/login")}
                >
                  Login
                </button>
              </div>

              <h2 className="fw-bold mb-2">Sign Up</h2>
              <small className="text-muted mb-4 d-block">
                Enter your details below
              </small>

              {/* First Name */}
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="First Name"
                  style={{ borderRadius: "20px" }}
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <label htmlFor="firstName">First Name</label>
                {errors.firstName && (
                  <small className="text-danger">{errors.firstName}</small>
                )}
              </div>

              {/* Last Name */}
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Last Name"
                  style={{ borderRadius: "20px" }}
                  value={formData.lastName}
                  onChange={handleChange}
                />
                <label htmlFor="lastName">Last Name</label>
                {errors.lastName && (
                  <small className="text-danger">{errors.lastName}</small>
                )}
              </div>

              {/* Password */}
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  style={{ borderRadius: "20px" }}
                  value={formData.password}
                  onChange={handleChange}
                />
                <label htmlFor="password">Password</label>
                {errors.password && (
                  <small className="text-danger">{errors.password}</small>
                )}
              </div>

              {/* Confirm Password */}
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  style={{ borderRadius: "20px" }}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <label htmlFor="confirmPassword">Confirm Password</label>
                {errors.confirmPassword && (
                  <small className="text-danger">{errors.confirmPassword}</small>
                )}
              </div>

              {/* Signup Button */}
              <div className="icon-row-bottom">
                <button
                  className="btn btn-primary btn-sm w-50"
                  type="submit"
                  style={{
                    backgroundColor: "pink",
                    color: "white",
                    borderRadius: "20px",
                  }}
                >
                  Sign Up
                </button>

                <span className="follow-text mt-5">Sign Up With :</span>

                <Image
                  src="/images/Group8.png"
                  width={50}
                  height={50}
                  className="bottom-icon mt-5"
                  alt="Facebook"
                />
                <Image
                  src="/images/Group37.png"
                  width={50}
                  height={50}
                  className="bottom-icon mt-5"
                  alt="Instagram"
                />
              </div>

              <hr className="my-4" />

              <small className="text-body-secondary d-block text-center">
                By clicking Sign Up, you agree to the terms of use.
              </small>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
