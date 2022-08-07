import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Menu from "./Menu";

const Resturant = () => {
  const { id } = useParams();
  // console.log(id);
  const [restdata, setRestData] = useState({});

  const callRestdata = async () => {
    const url = `http://localhost:4000/restaurants/search/${id}`;
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
      <div className="row">
        <div className="d-flex justify-content-between">
          <h1>Restaurent Name : {restdata.rest_name}</h1>
        </div>
        <div>
          <Menu id={id} />
        </div>
      </div>
    </div>
  );
};

export default Resturant;
