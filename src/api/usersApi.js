import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/users/";

export function createUser(user) {
  return fetch(baseUrl, {
    method: "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user),
  })
    .then(handleResponse)
    .catch(handleError);
}
