import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Menu from "./Menu";

const Resturant = () => {
  const { id } = useParams();
  // console.log(id);
  const [restdata, setRestData] = useState({});

  const callRestdata = async () => {
    const url = `${process.env.REACT_APP_API_URL}/restaurants/search/${id}`;
    console.log(url);
    const response = await axios.get(url);
    // console.log(response);
    setRestData(response.data);
  };

  useEffect(() => {
    callRestdata();
    console.log(restdata);
  }, []);

  return (
    <div className="container">
      <hr />
      <div className="row bg-dark border border-light rounded">
        <div className="d-flex justify-content-start">
          <img
            src={restdata.image}
            className="rest-img"
            style={{}}
            alt={restdata.rest_name}
          ></img>
          <div
            style={{
              color: "white",
              marginLeft: "10px",
              fontFamily: "'Quicksand', sans-serif",
            }}
          >
            <h1 style={{ fontWeight: "600" }}>{restdata.rest_name}</h1>
            <p>
              {restdata.location},{restdata.category}
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div>
          <Menu restdata={restdata} />
        </div>
      </div>
    </div>
  );
};

export default Resturant;
