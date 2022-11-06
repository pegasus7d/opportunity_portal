import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function (props) {
  let [authMode, setAuthMode] = useState("signin");

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-form"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-form mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn">
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#">Password?</a>
            </p>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input type="text" className="form-form mt-1" placeholder="Name" />
          </div>
          <div className="form-group mt-3">
            <label>Roll Number</label>
            <input
              type="text"
              className="form-form"
              placeholder=" Roll Number"
            />
          </div>
          <div className="form-group mt-3">
            <label>Phone Number</label>
            <input
              type="number"
              className="form-form"
              placeholder="Phone Number"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-form"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-form"
              placeholder="Password"
            />
          </div>

          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn">
              <Link to="/education" style={{ textDecoration: "none" }}>
                <span class="btn-text"> Next</span>
              </Link>
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <a href="#">Password?</a>
          </p>
        </div>
      </form>
    </div>
  );
}
