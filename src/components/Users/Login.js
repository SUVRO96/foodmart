import axios from "axios";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setLoginData } from "./actionLogin";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const errorRef = useRef();
  const { REACT_APP_API_URL } = process.env;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginData = useSelector(state => state.login);
  console.log(loginData);

  const loginFn = async () => {
    const tempObj = {};
    tempObj.email = email.current.value;
    tempObj.password = password.current.value;
    const url = `${REACT_APP_API_URL}/users/login`;
    console.log(url);
    if (tempObj.email !== "" && tempObj.password !== "") {
      try {
        const response = await axios.post(url, tempObj);
        if (response.status === 200) {
          errorRef.current.textContent = "";
          console.log("login successful");

          dispatch(setLoginData(response.data));
          if (loginData.loginUrl) {
            navigate(loginData.loginUrl);
          } else {
            navigate("/");
          }
        }
      } catch (err) {
        // console.log(err.response);
        if (err.response.status === 422) {
          errorRef.current.textContent = "username or password incorrect";
        } else {
          errorRef.current.textContent = "Error! Try again.";
        }
      }
    } else {
      errorRef.current.textContent = "Error! Plz fill all the values";
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <div className="shadow col-md-4">
          <div className="card px-5 py-5">
            <div className="form-data text-center">
              <h3>Login:</h3>
              <div className="forms-inputs mb-4 text-center">
                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                <input
                  className="w-75 p-1"
                  autoComplete="off"
                  type="text"
                  placeholder="e-mail"
                  ref={email}
                />
              </div>
              <div className="forms-inputs mb-4 text-center">
                <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                <input
                  className="w-75 p-1"
                  autoComplete="off"
                  type="password"
                  placeholder="password"
                  ref={password}
                />
              </div>
              <div>
                <div className="text-center">
                  <p className="text-danger" ref={errorRef}></p>
                </div>
              </div>
              <div className="mb-3 text-center">
                <button className="login-btn btn btn-dark" onClick={loginFn}>
                  Login
                </button>
              </div>
              <div className="mb-3 text-center">
                <p>Forgot password?</p>
              </div>
              <div className="mb-3 text-center">
                <p>
                  Not user?{" "}
                  <Link
                    to="/signup"
                    style={{ color: "green", cursor: "pointer" }}
                  >
                    Sign Up.
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
