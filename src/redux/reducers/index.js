import { combineReducers } from "redux";
import users from "reducers/userReducer";

const rootReducer = combineReducers({
  users,
});

export default rootReducer;
