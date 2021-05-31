import {CHATS_ACTION_TYPES} from "../action-types/chats";

export const addChat = (newChat) => {
  return {
    type: CHATS_ACTION_TYPES.ADD_CHAT,
    newChat,
  }
}

export const deleteChat = (chat) => {
  return {
    type: CHATS_ACTION_TYPES.DELETE_CHAT,
    chat,
  }
}
