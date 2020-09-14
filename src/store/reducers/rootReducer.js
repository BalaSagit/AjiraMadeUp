import { combineReducers } from "redux";
import toggleReducer from "./toggleReducer";
import myProfileReducer from "./myProfileReducer";

const reducers = {
  toggle: toggleReducer,
  myProfile: myProfileReducer
};

export default combineReducers({
  ...reducers
});
