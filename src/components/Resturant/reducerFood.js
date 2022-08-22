import { Constants } from "../../redux/constants";

const initialObject = {
  foodCart: [],
  restData: {},
};
export const reducerFood = (state = initialObject, action) => {
  const { type, payload } = action;
  switch (type) {
    case Constants.ADD_ITEM_TO_CART:
      let temp = [...state.foodCart, payload];
      if (state.foodCart.some(item => item.food_id === payload.food_id)) {
        return state;
      }
      return { ...state, foodCart: temp };

    case Constants.INCREMENT_QUANTITY:
      console.log("increment hit");
      let tempCart1 = state.foodCart.map(currItem => {
        if (currItem.food_id === payload) {
          return { ...currItem, quantity: currItem.quantity + 1 };
        }
        return currItem;
      });
      return { ...state, foodCart: tempCart1 };

    case Constants.DECREMENT_QUANTITY:
      console.log("decrement hit");
      let tempCart2 = state.foodCart
        .map(currItem => {
          if (currItem.food_id === payload) {
            return {
              ...currItem,
              quantity: currItem.quantity - 1,
            };
          }
          return currItem;
        })
        .filter(currItem => currItem.quantity !== 0);
      return { ...state, foodCart: tempCart2 };

    case Constants.EMPTY_CART:
      return { ...state, foodCart: [] };

    case Constants.ADD_REST_DETAILS:
      return { ...state, restData: payload };

    default:
      return state;
  }
};
