import { Constants } from "../../redux/constants";

export const addItemToCart = item => {
  return {
    type: Constants.ADD_ITEM_TO_CART,
    payload: item,
  };
};

export const incrementQuantity = id => {
  return {
    type: Constants.INCREMENT_QUANTITY,
    payload: id,
  };
};

export const decrementQuantity = id => {
  return {
    type: Constants.DECREMENT_QUANTITY,
    payload: id,
  };
};

export const emptyCart = () => {
  return {
    type: Constants.EMPTY_CART,
  };
};

export const addRestDetails = restDetails => {
  return {
    type: Constants.ADD_REST_DETAILS,
    payload: restDetails,
  };
};
