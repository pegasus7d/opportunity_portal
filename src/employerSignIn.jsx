import React from "react";
import "./App.css";

function employerSignIn() {
  return (
    <React.Fragment>
      <div className="cont">
        <div className="container2">
          <div className="imageSU">
            {/*<img width="100%" height="100%" src={intern} alt="internship" /> */}
          </div>
          <div className="formSU">
            <h3
              style={{
                //textAlign: "center",
                width: "100%",
                //marginBottom: "10%",
                color: "black",
                fontWeight: "bolder",
                fontSize: "2rem",
                borderWidth: 30,
                borderLeftColor: "red",
                marginLeft: "-10%",
              }}
            >
              Create your Account
            </h3>
            <h4
              style={{
                //textAlign: "center",
                width: "100%",
                marginTop: "-2%",
                marginLeft: "-5%",
                color: "black",
                fontWeight: "bolder",
                fontSize: "1rem",
                borderWidth: 30,
                borderLeftColor: "red",
              }}
            >
              Already Have an Account? <span class="signIn">Sign In</span>
            </h4>
            <div>
              <form>
                <div className="row tbox">
                  <div className="col-1">
                    <i
                      className="bi bi-file-lock2"
                      style={{ fontSize: "2rem", color: "gray" }}
                    ></i>
                  </div>
                  &nbsp;&nbsp;
                  <div className="col-8">
                    <span class="label">
                      Name<span class="astreisk">*</span>
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      name="name"
                      id="name"
                    />
                  </div>
                </div>

                <div className="row tbox">
                  <div className="col-1">
                    {" "}
                    <i
                      className="bi bi-envelope"
                      style={{ fontSize: "2rem", color: "gray" }}
                    ></i>
                  </div>
                  &nbsp;&nbsp;
                  <div className="col-6">
                    <span class="label">
                      Email<span class="astreisk">*</span>
                    </span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input
                      type="text"
                      class="form-control"
                      /* placeholder="&nbsp;&nbsp;Email Address" */
                      name="email"
                      id="email"
                    />
                    {/* <div className="col-2">
                      <select className="form-control-opt">
                        <option className="form-control-opt" value="1">
                          @kgpian.iitkgp.ac.in
                        </option>
                        <option
                          className="form-control-opt"
                          value="2"
                          style={{
                            color: "blav",
                          }}
                        >
                          @iitkgp.ac.in
                        </option>
                      </select>
                        </div>  */}
                  </div>
                </div>

                <div className="row tbox">
                  <div className="col-1">
                    <i
                      className="bi bi-file-lock2"
                      style={{ fontSize: "2rem", color: "gray" }}
                    ></i>
                  </div>
                  &nbsp;&nbsp;
                  <div className="col-8">
                    <span class="label">
                      Phone Number<span class="astreisk">*</span>
                    </span>
                    <input
                      type="number"
                      class="form-control"
                      name="ph-no"
                      id="ph-no"
                    />
                  </div>
                </div>

                <div className="row tbox">
                  <div className="col-1">
                    <i
                      className="bi bi-lock-fill"
                      style={{ fontSize: "2rem", color: "gray" }}
                    ></i>
                  </div>
                  &nbsp;&nbsp;
                  <div className="col-8">
                    &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span class="label">
                      Password<span class="astreisk">*</span>
                    </span>
                    <input
                      type="password"
                      class="form-control"
                      name="password"
                      id="password"
                    />
                  </div>
                </div>
                <div className="row tbox">
                  <div className="col-1">
                    <i
                      className="bi bi-file-lock2"
                      style={{ fontSize: "2rem", color: "gray" }}
                    ></i>
                  </div>
                  &nbsp;&nbsp;
                  <div className="col-8">
                    <span class="label">
                      Confirm Password<span class="astreisk">*</span>
                    </span>
                    <input
                      type="password"
                      class="form-control"
                      name="cpassword"
                      id="cpassword"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-11">
                    <input
                      type="submit"
                      className="btn btn-lg btn-outline-secondary"
                      id="button"
                      style={{ width: "80%" }}
                      value="Sign Up"
                    />
                  </div>
                </div>
                <div className="row mt-3 justify-content-center">
                  {/*<h5 className="text-center text-success font-weight-bold">
                    Already Registered?
                  </h5>
                      */}
                  <h4
                    style={{
                      // textAlign: "center",
                      width: "100%",
                      marginTop: "1%",
                      marginLeft: "0%",
                      color: "black",
                      fontWeight: "bolder",
                      fontSize: "1rem",
                      borderWidth: 30,
                      borderLeftColor: "red",
                    }}
                  >
                    Already Registered?
                  </h4>
                  <button
                    type="buttons"
                    style={{ width: "50%" }}
                    /* className=" btn btn-primary mt-3"  */
                    id="button-2"
                  >
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default EmployerSignIn;
