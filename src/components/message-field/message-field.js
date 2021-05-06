import React, {useEffect, useState} from "react";
import Message from "../message";

const MessageField = () => {
  const [form, setForm] = useState({
    text: '',
    author: ''
  });

  const [messages, setMessages] = useState([]);

  const handleChangeText = (e) => {
    setForm({...form, text: e.target.value});
  }

  const handleChangeAuthor = (e) => {
    setForm({...form, author: e.target.value});
  }


  const handleAddMessage = () => {
    const newMessages = [...messages, form];
    setMessages(newMessages);
  }

  return (
    <div>
      <form>
        <input name="text" onChange={handleChangeText} value={form.text}/>
        <input name="author" onChange={handleChangeAuthor} value={form.author}/>
      </form>
      <button onClick={handleAddMessage}>отправить</button>
      {messages.map((item, index) => <p key={index}>{`Сообщение: ${item.text} Автор: ${item.author}`}</p>)}
      <Message messages={messages}/>
    </div>
  )
}

export default MessageField;
