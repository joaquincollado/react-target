import * as userApi from "api/usersApi";

export function signUp(user) {
  return async (dispatch, getState) => {
    try {
      await userApi.signUp(user);
    } catch (error) {
      throw error;
    }
  };
}
