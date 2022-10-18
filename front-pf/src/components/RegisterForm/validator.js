export function isValidDate(str) {
  let year = str.slice(0, 4);
  if (Number(year) < 1950 || Number(year) > 2023 || str.length > 10) {
    return true;
  } else {
    return false;
  }
}

// Corrobora que el email sea valido
export function isValidEmail(str) {
  let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

  return regex.test(str);
}

// Corrobora si hay caracteres especiales entro del str.
export function hasSpecialChars(str) {
  const regexSpecialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  return regexSpecialChars.test(str);
}

export default function validate(input) {
  const error = {};

  if (!input.userName) {
    error.userName = "userName is required";
  } else if (hasSpecialChars(input.userName)) {
    error.userName = "userName may not contain special characters";
  } else if (input.userName.trim() === "") {
    error.userName = "userName may not be empty";
  } else if (input.userName.length > 15 || input.userName.length < 0) {
    error.userName = `Characters in the userName must be between 15 and 0`;
  }

  if (!input.email) {
    error.email = "Email is required";
  } else if (!isValidEmail(input.email)) {
    error.email = "Email is not Valid";
  }

  if (isValidDate(input.birthday)) {
    error.birthday = "Invalid year";
  } else if (!input.birthday) {
    error.birthday = "Invalid date";
  }

  if (!input.pass) {
    error.pass = "pass is required";
  } else if (hasSpecialChars(input.pass)) {
    error.pass = "pass may not contain special characters";
  } else if (input.pass.length < 8) {
    error.pass = "The pass must have at least 8 characters";
  }

  if(!input.phoneNumber) {
    error.phoneNumber = "Phone number is required"
  } else if (input.phoneNumber.length > 10) {
    error.phoneNumber = "Invalid phone number"
  }




  if (!input.firstName) {
    error.firstName = "Name is required";
  } else if (hasSpecialChars(input.firstName)) {
    error.firstName = "Name may not contain special characters";
  }

  if (!input.lastName) {
    error.lastName = "Last name is required";
  } else if (hasSpecialChars(input.firstName)) {
    error.lastName = "Last name may not contain special characters";
  }

  if(!input.city) {
    error.city = "City is required"
  } else if(hasSpecialChars(input.city)) {
    error.city = "City may not contain special characters"
  }

  if (hasSpecialChars(input.address)) {
    error.address = "Address may not contain special characters";
  }
  return error;
}
