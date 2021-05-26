import {CHATS_ACTION_TYPES} from "../actions/action-types/chats"

const initialState = {
  chatList: [],
};

const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHATS_ACTION_TYPES.ADD_CHAT: {
      return {
        ...state,
        chatList: [...state.chatList, action.payload],
      };
    }
    case CHATS_ACTION_TYPES.DELETE_CHAT: {
      return {
        ...state,
        chatList: [...state.chatList, action.payload],
      }
    }
    default:
      return state;
  }
};

export default chatsReducer;
