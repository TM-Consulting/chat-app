import { combineReducers } from "redux";
import authReducer from "../containers/Account/reducer";

const rootReducer = combineReducers({
  authState: authReducer,
});

export default rootReducer;
