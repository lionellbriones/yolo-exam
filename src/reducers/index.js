import { combineReducers } from "redux";

import loadingReducer from "./loadingReducer";
import jobsReducer from "./jobsReducer";
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
  isLoading: loadingReducer,
  jobs: jobsReducer,
  error: errorReducer
});

export default rootReducer;
