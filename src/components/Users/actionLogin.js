import { Constants } from "../../redux/constants";

export const setLoginData = (loginData) => {
  console.log("---------login action hit--------------");
  console.log(loginData);
  return {
    type: Constants.SET_LOGIN_INFO,
    payLoad: loginData,
  };
};
