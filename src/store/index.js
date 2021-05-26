import {applyMiddleware, createStore} from "redux";
import {logger} from "redux-logger/src";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const middlewares = [thunk];
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}
const enhancer = applyMiddleware(...middlewares);

const store = createStore(rootReducer, enhancer);
export default store;
