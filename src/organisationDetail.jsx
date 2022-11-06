import React from "react";
import "./App.css";

function organisationDetail() {
  return (
    <React.Fragment>
      {" "}
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
              Organisation Details
            </h3>

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
                      Organisation Name<span class="astreisk">*</span>
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      name="O-name"
                      id="O-name"
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
                      Organisation Details<span class="astreisk">*</span>
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      name="or-detail"
                      id="or-detail"
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
                      value="Next"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default organisationDetail;
