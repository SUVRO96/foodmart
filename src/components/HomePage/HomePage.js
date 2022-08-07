import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const updateCity = e => {
    const city = e;
    console.log(city);
    navigate(`/restaurantlist/${city}`);
  };

  return (
    <div className="container mt-3">
      <div className="text-center my-5">
        <input
          className="search_input text-center"
          placeholder="Search for a dish"
        ></input>
        <button className="foodsearch_btn">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div className="d-flex justify-content-around">
        <div>
          <h1>Welcome to Foodmart,</h1>
          <p> Now get delcious dishes at your doorstep</p>
          <div className="text-center">
            <select
              className="mt-2 py-1 px-2 text-center"
              onChange={e => updateCity(e.target.value)}
            >
              <option value="">-Select City-</option>
              <option value="kolkata">Kolkata</option>
              <option value="delhi">Delhi</option>
              <option value="mumbai">Mumbai</option>
              <option value="pune">Pune</option>
              <option value="hydrabad">Hydrabad</option>
            </select>
          </div>
        </div>
        <div className="card" style={{ width: "18rem", height: "20rem" }}>
          <img
            className="card-img-top"
            src="https://media.easemytrip.com/media/Blog/India/636977607425696252/636977607425696252QYiiUU.jpg"
            alt="non-veg-food"
          />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src="https://feeds.abplive.com/onecms/images/uploaded-images/2022/05/17/cb7b802101359ea306841a321658bfde_original.jpg"
            alt="veg-food"
          />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
