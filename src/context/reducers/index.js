import userReducer from "./userReducer";
import { combineReducers } from "redux";

const myReducers = combineReducers({
  user: userReducer,
});

export default myReducers;
