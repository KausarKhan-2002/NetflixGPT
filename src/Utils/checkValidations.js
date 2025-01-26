const checkValidations = (email, password, phoneNumber) => {
  const checkEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email.value
  );
  const checkPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(
    password.value
  );

  if (!checkEmail) {
    email.classList.add("border-red-500");
    return "Email is invalid"
  }
  else email.classList.remove("border-red-500");

  if (!checkPass) {
    password.classList.add("border-red-500");
    return "Password is invalid"
  }
  else password.classList.remove("border-red-500");

  if (phoneNumber) {
    const checkPhoneNumber = /^[6-9]\d{9}$/.test(Number(phoneNumber.value))
    if (!checkPhoneNumber) {
      phoneNumber.classList.add("border-red-500");
      return "Mobile number is invalid"
    }
    else phoneNumber.classList.remove("border-red-500");
  }

  return null
};


export default checkValidations;
