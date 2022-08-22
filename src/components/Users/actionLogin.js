import { Constants } from "../../redux/constants";

export const setLoginData = loginData => {
  console.log("---------login action hit--------------");
  // console.log(loginData);
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
  console.log(url);
  return {
    type: Constants.SET_URL,
    payload: url,
  };
};
