import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Banner from "../assets/images/foodBanner.jpg";

const Header = () => {
  const loginUserData = useSelector(state => state.login);
  console.log(loginUserData.loginDataRedux);
  return (
    <div
      style={{
        backgroundImage: `url(${Banner})`,
        backgroundSize: "cover",
        height: "30vh",
        color: "white",
      }}
    >
      <nav>
        <ul className="nav justify-content-end">
          <li className="nav-item align-self-start">
            <Link to="/" className="nav-link">
              <i className="fa-solid fa-house"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              About us
            </Link>
          </li>
          {loginUserData.loginData ? (
            <>
              <li className="nav-item">
                <span className="nav-link">
                  {loginUserData.loginData.username}
                </span>
              </li>
              <li className="nav-item">
                <button to="/signup" className="nav-link">
                  Log out
                </button>
              </li>
              <li className="nav-item">
                <Link to="/cart" className="nav-link">
                  <i className="fa-solid fa-cart-shopping"></i>
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/signup" className="nav-link">
                  Sign Up
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cart" className="nav-link">
                  <i className="fa-solid fa-cart-shopping"></i>
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
      <div
        className="d-flex flex-column justify-content-center m-3 text-center"
        style={{ color: "white" }}
      >
        <h1 className="app-name">FoodKart</h1>
        <p>Order your dishes</p>
      </div>
    </div>
  );
};

export default Header;
