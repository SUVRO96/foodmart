import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function ResturantList() {
  const [restList, setRestList] = useState([]);
  const { city } = useParams();
  // console.log(city);

  console.log();
  // const tempData = useLocation();
  const callApi = async () => {
    // console.log(city);

    const url = "http://localhost:4000/restaurants/" + city;
    const response = await axios.get(url);
    // console.log(response.data);
    setRestList(response.data);
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <div className="container">
      <h3>Restaurants in {city}:</h3>
      <div className="row flex-wrap">
        {restList.length > 0 ? (
          restList.map(rest => (
            <div
              className="card mx-3"
              style={{ width: "18rem", height: "20rem" }}
              key={rest.rest_id}
            >
              <img className="card-img-top" src={rest.image} alt="rest" />
              <div className="card-body">
                <Link
                  to={`/restaurant/${rest.rest_id}`}
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <h4>{rest.rest_name}</h4>
                </Link>
                <p className="card-text">Category: {rest.category}</p>
              </div>
            </div>
          ))
        ) : (
          <>
            <p style={{ color: "red" }}>
              No Restaurants found in this location
            </p>
            <Link to="/">
              <div style={{ cursor: "pointer" }}>
                <i className="fa-solid fa-circle-arrow-left"></i>
                <span>Back</span>
              </div>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default ResturantList;
