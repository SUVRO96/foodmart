import axios from "axios";
import React, { useEffect, useState } from "react";

const Menu = props => {
  const restId = props.id;
  const [menu, setmenu] = useState([]);
  // console.log(restId);

  const callMenu = async () => {
    const url = "http://localhost:4000/menu/search/" + restId;
    const response = await axios.get(url);
    setmenu(response.data);
    console.log(menu);
  };

  useEffect(() => {
    callMenu();
  }, [restId]);

  return (
    <>
      <div className="container">
        <div className="text-center my-5">
          <input
            className="search_input text-center"
            placeholder="Search for a dish"
          ></input>
          <button className="foodsearch_btn">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div className="row">
          {menu &&
            menu.map((item, index) => (
              <>
                <div className="row m-1">
                  <div className="col-1">{index + 1}</div>
                  <div className="col-2 mx-1">
                    <img
                      src={item.image}
                      alt="fooditem"
                      style={{ height: "100px", width: "150px" }}
                    />
                  </div>
                  <div className="col-3">
                    <h5>{item.food_name}</h5>
                  </div>
                </div>
                <hr />
              </>
            ))}
        </div>
      </div>
    </>
  );
};

export default Menu;
