import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import settings from "./settings/reducer";

const reducers = {
  settings
  // ..other reducers here
};

export default initialState =>
  createStore(
    combineReducers(reducers),
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
