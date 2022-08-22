import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, addRestDetails } from "./actionFood";

const Menu = props => {
  const restData = props.restdata;
  const loginUserData = useSelector(state => state.login);
  const [menu, setmenu] = useState([]);
  const [search, setsearch] = useState("");
  const dispatch = useDispatch();
  const url =
    `${process.env.REACT_APP_API_URL}/menu/search/` + restData.rest_id;
  // console.log(restId);

  const callMenu = async () => {
    // const url = "http://localhost:4000/menu/search/" + restId;
    const response = await axios.get(url);
    setmenu(response.data);
    console.log(menu);
  };

  const handleChange = e => {
    setsearch(e.target.value);
  };
  const handleSearch = () => {
    console.log(search);
    if (search !== "") {
      let newMenu = menu.filter(item => {
        return item.food_name
          .toLowerCase()
          .includes(search.trim().toLowerCase());
      });
      setmenu(newMenu);
    } else {
      callMenu();
    }
  };

  const addCartFn = item => {
    const restDetails = {
      rest_id: restData.rest_id,
      rest_name: restData.rest_name,
      city: restData.location,
    };
    item.quantity = 1;
    console.log(item);
    dispatch(addRestDetails(restDetails));
    dispatch(addItemToCart(item));
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
        <div className="row">
          {menu && (
            <div className="row m-2">
              <h3>
                {menu.length}
                {menu.length > 1 ? " items" : " item"}
              </h3>
            </div>
          )}
          {menu &&
            menu.map((item, index) => (
              <Fragment key={index}>
                <div className="row m-1 justify-content-between menu-container">
                  <div className="col-1">{index + 1}.</div>
                  <div className="col-2 mx-2">
                    <img src={item.image} alt="fooditem" className="menu-img" />
                  </div>
                  <div className="col-3">
                    <p className="menu-title">{item.food_name}</p>
                    <img
                      src={
                        item.food_category === "non-veg"
                          ? "https://www.kindpng.com/picc/m/151-1515155_veg-icon-png-non-veg-symbol-png-transparent.png"
                          : "https://i.pinimg.com/736x/e4/1f/f3/e41ff3b10a26b097602560180fb91a62.jpg"
                      }
                      style={{ height: "20px", width: "20px" }}
                      alt={item.food_name}
                    />
                    <p>₹ {item.price}</p>
                    <p style={{ fontSize: "x-small" }}>{item.description}</p>
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
                    <div className="col-1 my-auto">
                      <p>Login to order food</p>
                    </div>
                  )}
                </div>
                <hr />
              </Fragment>
            ))}
        </div>
      </div>
    </>
  );
};

export default Menu;
