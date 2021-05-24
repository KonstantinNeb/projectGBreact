import {combineReducers} from "redux";
import chatsReducer from "./chats";
import messagesReducer from "./messages";

const rootReducer = combineReducers({
  chatsState: chatsReducer,
  messagesState: messagesReducer,
});

export default rootReducer;
