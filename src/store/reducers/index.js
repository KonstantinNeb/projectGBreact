import {combineReducers} from "redux";
import chatsReducer from "./chats";
import messagesReducer from "./messages";
import profileReducer from "./profile";

const rootReducer = combineReducers({
  chatsState: chatsReducer,
  messagesState: messagesReducer,
  profileState: profileReducer,
});

export default rootReducer;
