import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUrl } from "./actionLogin";
import {
  incrementQuantity,
  decrementQuantity,
  emptyCart,
} from "../Resturant/actionFood";

const Cart = () => {
  const loginUserData = useSelector(state => state.login);
  const cartData = useSelector(state => state.cart);
  console.log(cartData);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const increment = id => {
    dispatch(incrementQuantity(id));
  };
  const decrement = id => {
    dispatch(decrementQuantity(id));
  };

  const clearCart = () => {
    dispatch(emptyCart());
  };

  const orderPlaceFn = async () => {
    const url = "http://localhost:4000/orders/placeorder";
    const newDate = new Date();
    const currDate = `${newDate.getDate()}/${
      newDate.getMonth() + 1
    }/${newDate.getFullYear()}`;
    const tempObj = {
      date: currDate,
      username: loginUserData.loginDataRedux.username,
      rest_id: cartData.restData.rest_id,
      rest_name: cartData.restData.rest_name,
      city: cartData.restData.location,
      amount: "350",
    };
    try {
      const response = await axios.post(url, tempObj);
      if (response.status === 201) {
        console.log("order placed successfully");
        dispatch(emptyCart());
        navigate("/order", { state: response.data });
      }
    } catch (err) {}
  };

  useEffect(() => {
    if (!loginUserData.loginDataRedux) {
      dispatch(setUrl(window.location.pathname));
      navigate("/login");
    }
  }, [loginUserData.loginDataRedux, dispatch, navigate]);

  return (
    <div className="container">
      {/* <h4>Items added to Cart</h4>
      <p>You have {cartData.foodCart.length} items in your cart</p>
      <hr /> */}
      {cartData.foodCart.length > 0 ? (
        <div className="row">
          <h4>Items added to Cart</h4>
          <p>You have {cartData.foodCart.length} items in your cart</p>
          <hr />
          <table className="table table-success table-striped justify-content-around text-center">
            <thead>
              <tr>
                <th>Sr. No</th>
                <th>Item</th>
                <th>Qty.</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {cartData.foodCart.map((item, index) => (
                <tr key={item.food_id}>
                  <td>{index + 1}</td>
                  <td className="d-flex justify-content-center">
                    <img
                      src={
                        item.food_category === "non-veg"
                          ? "https://www.kindpng.com/picc/m/151-1515155_veg-icon-png-non-veg-symbol-png-transparent.png"
                          : "https://i.pinimg.com/736x/e4/1f/f3/e41ff3b10a26b097602560180fb91a62.jpg"
                      }
                      style={{
                        height: "20px",
                        width: "20px",
                        marginRight: "10px",
                      }}
                      alt={item.food_name}
                    />
                    <p>{item.food_name}</p>
                  </td>
                  <td>
                    <button
                      className="btn btn-sm shadow-none font-weight-bold"
                      onClick={() => {
                        decrement(item.food_id);
                      }}
                    >
                      <i className="fa-solid fa-minus"></i>
                    </button>{" "}
                    <span className="border border-success rounded px-2">
                      {item.quantity}
                    </span>
                    <button
                      className="btn btn-sm shadow-none font-weight-bold"
                      onClick={() => {
                        increment(item.food_id);
                      }}
                    >
                      <i className="fa-solid fa-plus"></i>
                    </button>
                  </td>
                  <td>₹{item.price * item.quantity}.00</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="d-flex justify-content-end">
            <button className="btn btn-success mx-1" onClick={orderPlaceFn}>
              PLACE ORDER
            </button>
            <button className="btn btn-danger" onClick={clearCart}>
              CLEAR
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h3>Your cart is empty</h3>
          add food to cart.
        </div>
      )}
      {/* <br></br>
        {cartData.foodCart.length > 0 && (
          <button className="btn btn-warning" onClick={placeOrderFn}>
            Place Order
          </button>
        )} */}
    </div>
  );
};

export default Cart;
