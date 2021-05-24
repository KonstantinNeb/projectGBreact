import {MESSAGES_ACTION_TYPES} from "../actions/action-types/messages";
import {CHATS_ACTION_TYPES} from "../actions/action-types/chats";

const initialState = {
  messagesList: {},
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case MESSAGES_ACTION_TYPES.ADD_MESSAGES: {
      return {
        ...state,
        messagesList: {
          ...state.messagesList,
          [action.payload.chatId]: [
            ...state.messagesList[action.payload.chatId],
            action.payload.message,
          ],
        },
      };
    }
    case CHATS_ACTION_TYPES.ADD_CHAT: {
      return {
        ...state,
        messagesList: {
          ...state.messagesList,
          [action.payload.id]: [],
        }
      };
    }
    default:
      return state;
  }
};

export default messagesReducer;
