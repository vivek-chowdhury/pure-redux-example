import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import {
  todoReducer,
  reminderReducer,
  archiveReducer,
} from "./root-reducer.js";

//Creating Store
const store = createStore(
  //rootReducer, Commenting root reducer as we split it into 3 reducers.
  //
  //CombineReducer is used to combine multiple reducers if you have. If you
  // have single reducer we don't need it.
  combineReducers({
    todo: todoReducer,
    reminder: reminderReducer,
    notes: [],
    todoarchive: archiveReducer,
  }),
  //.default is added to logger and thunk because these libraries will be supported
  //by newer version of redux when we pass default
  applyMiddleware(logger.default, thunk.default)
);
export default store;
