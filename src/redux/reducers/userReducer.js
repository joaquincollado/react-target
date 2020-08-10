import initialState from "./initialState";

export default function userReducer(state = initialState.users, action) {
  switch (action.type) {
    //nothing for the moment
    default:
      return state;
  }
}
