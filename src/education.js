import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Progressbar from "./components/Progressbar";

function education() {
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Education Details</h3>

          <div className="form-group mt-3">
            <label>Department</label>
            <input type="text" className="form-form" placeholder="Department" />
          </div>
          <Progressbar />
          <div className="form-group mt-3">
            <label>CGPA</label>
            <input type="number" className="form-form" placeholder="CGPA" />
          </div>
          <div className="form-group mt-3">
            <label>Graduation Year</label>
            <input
              type="number"
              className="form-form"
              placeholder="Graduation Year"
            />
          </div>
          <div className="form-group">
            <label>Secondary School</label>
            <input type="text" className="form-form" placeholder="School" />
          </div>
          <div className="form-group mt-3">
            <label>Percenatge/CGPA</label>
            <input
              type="number"
              className="form-form"
              placeholder="Percenatge/CGPA"
            />
          </div>

          <div className="form-group mt-3">
            <label>Senior Secondary School</label>
            <input type="text" className="form-form" placeholder="School" />
          </div>
          <div className="form-group mt-3">
            <label>Percenatge/CGPA</label>
            <input
              type="number"
              className="form-form"
              placeholder="Percentage/CGPA"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn">
              {" "}
              <Link to="/skills" style={{ textDecoration: "none" }}>
                {" "}
                <span class="btn-text">Next </span>
              </Link>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default education;
