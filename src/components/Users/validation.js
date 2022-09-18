const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const mobilePattern = /^[6-9]\d{9}$/gi;
function isEmailAddress(str) {
  return str.match(emailPattern);
}

function isMobileNumber(str) {
  return str.match(mobilePattern);
}

const signUpFormValidation = formData => {
  const error = {};
  const fields = ["email", "password", "name", "mobile"];
  fields.forEach(field => {
    if (!formData[`${field}`]) {
      error[[field]] = `${field} not present`;
    }
  });
  if (
    formData.name &&
    (formData.name.length < 3 || formData.name.length > 20)
  ) {
    error["name"] = "Name should be atleast 4 chars and less than 20 chars";
  }
  if (
    formData.password &&
    (formData.password.length < 6 || formData.password.length > 30)
  ) {
    error["password"] =
      "Password should be atleast 6 chars and less than 30 chars";
  }

  if (formData.email && isEmailAddress(formData.email) === null) {
    error["email"] = "Not a valid email";
  }
  if (formData.mobile && isMobileNumber(formData.mobile) === null) {
    error["mobile"] = "Not a valid Mobile number";
  }
  if (Object.keys(error).length === 0) return null;
  return error;
};

export { signUpFormValidation };
