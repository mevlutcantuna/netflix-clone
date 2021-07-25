import { combineReducers } from "redux";
import userReducer from "./user";

export const RootReducer = combineReducers({
  userReducer,
});
