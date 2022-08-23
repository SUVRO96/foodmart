import { Constants } from "../../redux/constants";

export const setLoginData = loginData => {
  return {
    type: Constants.SET_LOGIN_INFO,
    payload: loginData,
  };
};

export const setlogout = () => {
  return {
    type: Constants.SET_LOGOUT,
  };
};

export const setUrl = url => {
  return {
    type: Constants.SET_URL,
    payload: url,
  };
};
