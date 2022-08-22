import { Constants } from "../../redux/constants";

const initialObject = {};

export const reducerLogin = (state = initialObject, action) => {
  const { type, payload } = action;
  switch (type) {
    case Constants.SET_LOGIN_INFO:
      console.log("login reducer hit");
      // console.log(payload);
      return { ...state, loginDataRedux: payload };
    case Constants.SET_LOGOUT:
      return initialObject;
    case Constants.SET_URL:
      return { ...state, loginUrl: payload };
    default:
      return state;
  }
};
