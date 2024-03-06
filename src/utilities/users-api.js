import sendRequest from "./send-request";

const BASE_URL = "https://restaurant-app-back.onrender.com/api/users";

export function signUp(userData) {
  return sendRequest(BASE_URL, "POST", userData);
}

export function logIn(credentials) {
  return sendRequest(`${BASE_URL}/login`, "POST", credentials);
}
