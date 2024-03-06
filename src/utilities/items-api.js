import sendRequest from "./send-request";

const BASE_URL = "https://restaurant-app-back.onrender.com/api/items";

export function getAll() {
  return sendRequest(BASE_URL);
}

export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}
