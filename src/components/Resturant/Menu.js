import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import nonVegLogo from "../assets/images/non-veg-logo.png";
import vegLogo from "../assets/images/veg-logo.jpg";
import { setUrl } from "../Users/actionLogin";
import { addItemToCart, addRestDetails } from "./actionFood";

const Menu = props => {
  const restData = props.restdata;
  const loginUserData = useSelector(state => state.login);
  const cartData = useSelector(state => state.cart);
  const [menu, setmenu] = useState([]);
  const [search, setsearch] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(cartData);
  const url =
    `${process.env.REACT_APP_API_URL}/menu/search/` + restData.rest_id;

  const callMenu = async () => {
    const response = await axios.get(url);
    setmenu(response.data);
  };

  const handleChange = e => {
    setsearch(e.target.value);
  };
  const handleSearch = () => {
    if (search !== "") {
      let newMenu = menu.filter(item =>
        item.food_name.toLowerCase().includes(search.trim().toLowerCase())
      );
      setmenu(newMenu);
    } else {
      callMenu();
    }
  };

  const toNavigate = url => {
    dispatch(setUrl(window.location.pathname));
    navigate(url);
  };

  const addCartFn = item => {
    if (
      cartData.foodCart.length !== 0 &&
      restData.rest_id !== cartData.foodCart[0].rest_id
    ) {
      alert("please clear your cart to add food from another restaurant");
      navigate("/cart");
    } else {
      const restDetails = {
        rest_id: restData.rest_id,
        rest_name: restData.rest_name,
        city: restData.location,
      };
      item.quantity = 1;
      dispatch(addRestDetails(restDetails));
      dispatch(addItemToCart({ ...item, amount: item.price }));
    }
  };

  useEffect(() => {
    if (search === "") {
      callMenu();
    }
  }, [restData, search]);

  return (
    <>
      <div className="container">
        <div className="text-center my-5">
          <input
            className="search_input text-center"
            placeholder="Search for a dish"
            onChange={handleChange}
            value={search}
          ></input>
          <button className="foodsearch_btn" onClick={handleSearch}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <hr />
        <div className="menu-cart">
          <div className="cart-length">{cartData.foodCart.length}</div>
          <Link to="/cart" style={{ color: "black", fontSize: "x-large" }}>
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
        </div>
        <div className="row">
          {menu && (
            <div className="row m-3 ms-0">
              <h3>
                {menu.length}
                {menu.length > 1 ? " items:" : " item:"}
              </h3>
            </div>
          )}
          {menu &&
            menu.map((item, index) => (
              <div key={index}>
                <div className="row m-1 justify-content-between menu-container">
                  <div className="col-1">{index + 1}.</div>
                  <div className="col-2 mx-2">
                    <img src={item.image} alt="fooditem" className="menu-img" />
                  </div>
                  <div className="col-3">
                    <p className="menu-title">{item.food_name}</p>
                    <img
                      src={
                        item.food_category === "non-veg" ? nonVegLogo : vegLogo
                      }
                      style={{ height: "20px", width: "20px" }}
                      alt={item.food_name}
                    />
                    <p>₹ {item.price}</p>
                    <p
                      className="menu-description"
                      style={{ fontSize: "x-small" }}
                    >
                      {item.description}
                    </p>
                  </div>
                  {loginUserData.loginDataRedux ? (
                    <div className="col-1">
                      <button
                        className="add-btn"
                        onClick={() => {
                          addCartFn(item);
                        }}
                      >
                        Add
                      </button>
                    </div>
                  ) : (
                    <div className="col-1 pe-2">
                      <button
                        onClick={() => {
                          toNavigate("/login");
                        }}
                        style={{
                          color: "black",
                          border: "none",
                          backgroundColor: "whitesmoke",
                        }}
                      >
                        Login
                      </button>
                    </div>
                  )}
                </div>
                <hr />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Menu;
