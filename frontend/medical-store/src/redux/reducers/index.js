import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import storeReducer from "./store.reducer";
import medReducer from "./medicine.reducer";
import alertReducer from "./alert.reducer";
import companyReducer from "./company.reducer";
import { LOGOUT } from "../actions/action.types";

const appReducer = combineReducers({
  authReducer,
  storeReducer,
  medReducer,
  alertReducer,
  companyReducer,
});

const rootReducer = (state, action) => {
  if (action.type === LOGOUT) state = undefined;

  return appReducer(state, action);
};

export default rootReducer;
