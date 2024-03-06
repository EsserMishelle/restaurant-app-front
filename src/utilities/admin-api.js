//utilities/admin-api.js

import sendRequest from "./send-request";

const BASE_URL = "https://restaurant-app-back.onrender.com/api/admin";

export function getAll() {
  return sendRequest(`${BASE_URL}/getusers`);
}

// export function getById(id) {
//   return sendRequest(`${BASE_URL}/${id}`);
// }
