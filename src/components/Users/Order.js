import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Order = () => {
  const { state: orderData } = useLocation();
  const [showDetails, setShowDetails] = useState(false);
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
        <button
          className="btn btn-primary shadow-none"
          onClick={() => {
            setShowDetails(!showDetails);
          }}
        >
          Order details{" "}
          {showDetails ? (
            <i class="fa-solid fa-caret-up"></i>
          ) : (
            <i class="fa-solid fa-caret-down"></i>
          )}
        </button>
        <br />
        {showDetails && (
          <>
            <h6>Order Id: {orderData.orderid}</h6>
            <h6>Resturant: {orderData.rest_name}</h6>
            <table className="table table-success table-striped">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Qty.</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {orderData.fooditems.map(item => (
                  <tr key={item.food_id}>
                    <td>{item.food_name}</td>
                    <td>{item.quantity}</td>
                    <td>₹{item.amount}.00</td>
                  </tr>
                ))}
                <tr style={{ fontWeight: "bold" }}>
                  <td>Total:</td>
                  <td></td>
                  <td>₹{orderData.amount}.00</td>
                </tr>
              </tbody>
            </table>

            <h6>Date: {orderData.date}</h6>
          </>
        )}
      </div>
    </div>
  );
};

export default Order;
