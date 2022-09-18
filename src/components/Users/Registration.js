import axios from "axios";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { signUpFormValidation } from "./validation";

const Registration = () => {
  const fullName = useRef();
  const mobile = useRef();
  const email = useRef();
  const password = useRef();
  const repassword = useRef();
  const errorRef = useRef();
  const [submitStatus, setSubmitStatus] = useState(false);
  const [error, setError] = useState({});

  const registerFn = async () => {
    const url = `${process.env.REACT_APP_API_URL}/users/adduser`;
    const tempObj = {};
    tempObj.name = fullName.current.value;
    tempObj.mobile = mobile.current.value;
    tempObj.email = email.current.value;
    tempObj.password = password.current.value;

    let formError = signUpFormValidation(tempObj);
    console.log(formError);
    setError(formError);
    if (repassword.current.value === tempObj.password) {
      if (formError === null) {
        const response = await axios.post(url, tempObj);
        if (response.status === 201) {
          setSubmitStatus(true);
          errorRef.current.textContent = "";
        } else {
          errorRef.current.textContent = "Error. Plz try again.";
        }
      }
    } else {
      errorRef.current.textContent = "Error. Password doesn't match";
    }
  };

  return (
    <>
      {submitStatus ? (
        <section id="" className="section-bg">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div className="col-12">
                <div className="alert alert-success" role="alert">
                  Successfully user created...
                </div>
                <Link to="/login" className="btn btn-dark">Login</Link>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="vh-100" style={{ backgroundColor: "#eee" }}>
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-12 col-xl-11">
                <div
                  className="card text-black"
                  style={{ borderRadius: "25px" }}
                >
                  <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                          Sign up
                        </p>

                        <form className="mx-1">
                          <div className="mb-4">
                            <div className="d-flex flex-row align-items-center">
                              <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <input
                                  type="text"
                                  // id="form3Example1c"
                                  className="form-control"
                                  placeholder="Full Name*"
                                  ref={fullName}
                                />
                              </div>
                            </div>
                            {error && error.name && (
                              <div
                                style={{
                                  color: "red",
                                  marginLeft: "2rem",
                                  display: "block",
                                }}
                              >
                                {`*${error.name}`}
                              </div>
                            )}
                          </div>
                          <div className="mb-4">
                            <div className="d-flex flex-row align-items-center">
                              <i className="fas fa-solid fa-phone fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <input
                                  type="text"
                                  // id="form3Example2c"
                                  className="form-control"
                                  placeholder="Mobile No."
                                  ref={mobile}
                                />
                              </div>
                            </div>
                            {error && error.mobile && (
                              <div
                                style={{
                                  color: "red",
                                  marginLeft: "2rem",
                                  display: "block",
                                }}
                              >
                                {`*${error.mobile}`}
                              </div>
                            )}
                          </div>
                          <div className="mb-4">
                            <div className="d-flex flex-row align-items-center">
                              <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <input
                                  type="email"
                                  // id="form3Example3c"
                                  className="form-control"
                                  placeholder="Mail*"
                                  ref={email}
                                />
                              </div>
                            </div>
                            {error && error.email && (
                              <div
                                style={{
                                  color: "red",
                                  marginLeft: "2rem",
                                  display: "block",
                                }}
                              >
                                {`*${error.email}`}
                              </div>
                            )}
                          </div>

                          <div className="mb-4">
                            <div className="d-flex flex-row align-items-center">
                              <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <input
                                  type="password"
                                  // id="form3Example4c"
                                  className="form-control"
                                  placeholder="Password*"
                                  ref={password}
                                />
                              </div>
                            </div>
                            {error && error.password && (
                              <div
                                style={{
                                  color: "red",
                                  marginLeft: "2rem",
                                  display: "block",
                                }}
                              >
                                {`*${error.password}`}
                              </div>
                            )}
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="password"
                                // id="form3Example4cd"
                                className="form-control"
                                placeholder="Confirm password*"
                                ref={repassword}
                              />
                            </div>
                          </div>
                          <div>
                            <div className="col-sm-10">
                              <p className="text-danger" ref={errorRef}></p>
                            </div>
                          </div>
                          {/* <div className="form-check d-flex justify-content-center mb-5">
                            <input
                              className="form-check-input me-2"
                              type="checkbox"
                              value=""
                              id="form2Example3c"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="form2Example3c"
                            >
                              I agree all statements in{" "}
                              <a href="#!">Terms of service</a>
                            </label>
                          </div> */}
                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button
                              type="button"
                              className="btn btn-primary btn-lg"
                              onClick={registerFn}
                            >
                              Register
                            </button>
                          </div>
                        </form>
                      </div>
                      <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                        <img
                          //   src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                          src="https://img.freepik.com/free-vector/illustration-hands-holding-junk-food_53876-26715.jpg?w=2000"
                          className="img-fluid"
                          alt="Sample"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Registration;
