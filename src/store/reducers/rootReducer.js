import { combineReducers } from "redux";
import globalReducer from "./globalReducer";

const reducers = {
  global: globalReducer
};

export default combineReducers({
  ...reducers
});
