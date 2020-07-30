import * as userApi from "api/usersApi";
import * as types from "actions/actionTypes";

export function createUserSuccess(user) {
  return { type: types.CREATE_USER_SUCCESS, user };
}
export function createUser(user) {
  return function (dispatch, getState) {
    return userApi
      .createUser(user)
      .then((savedUser) => {
        dispatch(createCourseSuccess(savedUser));
      })
      .catch((error) => {
        throw error;
      });
  };
}
