import React, {useEffect, useState} from "react";
import MessageField from "../message-field";
import {AUTHORS} from "../../utils/constants";

const responseMessages = [{author: AUTHORS.HUMAN, text: 'Hello'}, {author: AUTHORS.BOT, text: 'Im Bot'},];

const Message = () => {
  const [messages, setMessages] = useState(responseMessages);

  const handleAddMessage = (newMessage) => {
    setMessages((prevMessages) => [...prevMessages, newMessage])
  }

  useEffect(() => {
    if (!messages.length) {
      return;
    }

    const lastMessage = messages[messages.length - 1];
    if (lastMessage.author === AUTHORS.HUMAN) {
      handleAddMessage({author: AUTHORS.BOT, text: 'I am Bot!'});
    }
  }, [messages])

  return (
    <div>
      {messages.map((item, index) =>
        <p key={index}>{item.text} : {item.author}</p>)}
      <MessageField onAddMessage={handleAddMessage} />
    </div>
  )
};

export default Message;
