export const checkValidData = (email, password, text) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(
    password
  );
  // const isFullName = /^\w+\s\w+$/gm.test(text);

  // if (!isFullName) return "Name is not valid";
  if (!isEmailValid) return "Email ID is not not valid";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};
