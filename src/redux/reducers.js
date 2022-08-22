import { combineReducers } from "redux";
import { reducerFood } from "../components/Resturant/reducerFood";
import { reducerLogin } from "../components/Users/reducerLogin";

const reducers = combineReducers({
  login: reducerLogin,
  cart: reducerFood,
});

export default reducers;
