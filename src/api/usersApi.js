import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/users/";

export async function signUp(user) {
  try {
    const signUpResponse = await fetch(baseUrl, {
      method: "POST", // POST for create, PUT to update when id already exists.
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    return await handleResponse(signUpResponse);
  } catch (error) {
    handleError(error);
  }
}
