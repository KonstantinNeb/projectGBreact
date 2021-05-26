import {AUTHORS} from "../../../utils/constants";
import {MESSAGES_ACTION_TYPES} from "../action-types/messages";

export const addMessage = (newMessage, chatId) => ({
  type: MESSAGES_ACTION_TYPES.ADD_MESSAGES,
  payload: {
    message: newMessage,
    chatId,
  },
});

let timeout;

export const addMessageWithThunk = (newMessage, chatId) => (
  dispatch,
  // getState
) => {
  dispatch(addMessage(newMessage, chatId));

  if (newMessage.author !== AUTHORS.BOT) {
    timeout = setTimeout(() => {
      dispatch(addMessage({ text: "I AM BOT", author: AUTHORS.BOT }, chatId));
    }, 1000);
  }
};
