import React from "react";
import { useLocation } from "react-router-dom";

const Order = () => {
  const { state: orderData } = useLocation();
  console.log(orderData);
  return (
    <div className="container p-2">
      <div className="">
        <h4 className="p-2 text-success">
          Your order has been placed sucessfully.
        </h4>
      </div>
      <br></br>

      <div>
        <hr />
        <h5>Order Id: {orderData.orderid}</h5>
        <h5>Resturant: {orderData.rest_name}</h5>
        <h5>Date: {orderData.date}</h5>
      </div>
    </div>
  );
};

export default Order;
