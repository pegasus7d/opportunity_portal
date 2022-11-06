import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
// import { Background } from "./images/bg.png";

function skills() {
  return (
    <div className="Auth-form-container">
      {/* <div style={{ backgroundImage: `url(${Background})` }}> */}
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Skills</h3>

          <div className="form-group mt-3">
            {/* <input
              type="textarea"
              className="form-control mt-1"
              placeholder="Department"
              rows="200"
              cols="400"
            /> */}
            <textarea
              name="textarea"
              rows="8"
              cols="55"
              placeholder="skills"
            ></textarea>
          </div>

          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn">
              Submit
              {/* <Link to="/skill">Submit</Link> */}
            </button>
          </div>
        </div>
      </form>
    </div>
    // </div>
  );
}

export default skills;
