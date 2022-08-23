import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Banner from "../assets/images/foodBanner.jpg";
import { setlogout } from "../Users/actionLogin";

const Header = () => {
  const loginUserData = useSelector(state => state.login);
  // console.log(loginUserData.loginDataRedux);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showMenu, setShowmenu] = useState(false);
  const logoutFn = () => {
    console.log("-----logout hit------");
    setShowmenu(false);
    if (window.confirm("Sure to logout?")) {
      dispatch(setlogout());
    }
  };

  const toLocation = locate => {
    setShowmenu(false);
    navigate(locate);
  };

  return (
    <div
      className="header-container"
      style={{
        backgroundImage: `url(${Banner})`,
        backgroundSize: "cover",
        height: "30vh",
        color: "white",
      }}
    >
      {loginUserData.loginDataRedux && (
        <span className="mobile-username mt-1">
          <i className="fa-solid fa-user mx-1 p-1 border border-white rounded-circle"></i>
          {loginUserData.loginDataRedux.username}
        </span>
      )}
      <nav className={showMenu ? "show-main-menu" : "main-nav"}>
        <ul class="nav-menu nav justify-content-end">
          {loginUserData.loginDataRedux ? (
            <>
              <li className="nav-item my-1 mobile-showoff">
                <button
                  className="nav-link"
                  onClick={() => {
                    toLocation("/");
                  }}
                >
                  <i className="fa-solid fa-house menu-icon"></i>
                </button>
              </li>
              <li className="nav-item my-1 mobile-show">
                <button
                  to="/"
                  className="nav-link"
                  onClick={() => {
                    toLocation("/");
                  }}
                >
                  Home
                </button>
              </li>
              <li className="nav-item mobile-show">
                <button
                  className="nav-link"
                  onClick={() => {
                    toLocation("/");
                  }}
                >
                  About us
                </button>
              </li>
              <li className="nav-item  m-1 mobile-showoff">
                <span className="nav-link">
                  <i className="fa-solid fa-user mx-1 p-1 border border-white rounded-circle"></i>
                  {loginUserData.loginDataRedux.username}
                </span>
              </li>
              <li className="nav-item">
                <button onClick={logoutFn} className="logout-btn nav-link">
                  Log out
                </button>
              </li>
              <li className="nav-item">
                <button
                  to="/cart"
                  className="nav-link"
                  onClick={() => {
                    toLocation("/cart");
                  }}
                >
                  <i className="fa-solid fa-cart-shopping"></i>
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item mobile-showoff">
                <button
                  to="/"
                  className="nav-link"
                  onClick={() => {
                    toLocation("/");
                  }}
                >
                  <i className="fa-solid fa-house"></i>
                </button>
              </li>
              <li className="nav-item my-1 mobile-show">
                <button
                  to="/"
                  className="nav-link"
                  onClick={() => {
                    toLocation("/");
                  }}
                >
                  Home
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  onClick={() => {
                    toLocation("/");
                  }}
                >
                  About us
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  onClick={() => {
                    toLocation("/login");
                  }}
                >
                  Login
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  onClick={() => {
                    toLocation("/signup");
                  }}
                >
                  Sign Up
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  onClick={() => {
                    toLocation("/cart");
                  }}
                >
                  <i className="fa-solid fa-cart-shopping"></i>
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
      <div className="hamberger-menu">
        <i
          className="fa-solid fa-bars border border-1 rounded px-1 mt-1"
          onClick={() => {
            setShowmenu(!showMenu);
          }}
        ></i>
      </div>
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
