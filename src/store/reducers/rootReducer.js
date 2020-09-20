import { combineReducers } from "redux";
import toggleReducer from "./toggleReducer";
import myProfileReducer from "./myProfileReducer";
import pageToggleReducer from './pageToggleReducer';

const reducers = {
  toggle: toggleReducer,
  myProfile: myProfileReducer,
  pageToggle: pageToggleReducer
};

export default combineReducers({
  ...reducers
});
