import React, {useEffect, useState} from "react";

const Message = ({messages}) => {
  const [messagesResponse, setMessagesResponse] = useState([
    {text: '', author: ''}
  ]);

  useEffect(() => {
    const newState = [...messagesResponse, {text: 'Привет!', author: 'Петя'}];
    setMessagesResponse(newState);
  }, [messages])

  return (
    <div>
      <div>
        {messagesResponse.map((item, index) => <p key={index}>{`Сообщение: ${item.text} Автор: ${item.author}`}</p>)}
      </div>
    </div>
  )
};

export default Message;
