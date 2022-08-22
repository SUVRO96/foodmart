import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./rest.css";
import axios from "axios";

function ResturantList() {
  const [restList, setRestList] = useState([]);
  const { city } = useParams();
  // const navigate = useNavigate();
  // console.log(city);

  // const toMenu = id => {
  //   navigate(`/restaurant/${id}`);
  // };

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
      <hr />
      <div className="row flex-wrap">
        {restList.length > 0 ? (
          restList.map(rest => (
            <div
              id="card"
              className="card mx-3"
              style={{ width: "18rem", height: "20rem" }}
              key={rest.rest_id}
            >
              <Link
                to={`/restaurant/${rest.rest_id}`}
                style={{
                  color: "black",
                  textDecoration: "none",
                }}
              >
                <img
                  className="card-img-top mt-2"
                  src={rest.image}
                  alt="rest"
                />
                <div className="card-body">
                  <h4>{rest.rest_name}</h4>
                  <p className="card-text">Category: {rest.category}</p>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <>
            <p style={{ fontSize: "2rem" }}>
              No restaurants avilable in this area
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
