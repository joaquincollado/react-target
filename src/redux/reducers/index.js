import { combineReducers } from "redux";
import users from "store/reducers/userReducer";

const rootReducer = combineReducers({
  users,
});

export default rootReducer;
