import React, {useState} from "react";

// home-work-1
const App = () => {
  const [messages, setMessages] = useState([]);

  const handleAddMessage = () => {
    const newState = [...messages, 'Hello!'];
    setMessages(newState);
  }

  return (
    <div>
      <div>
        <h3>home-work-1</h3>
        <button onClick={handleAddMessage}>push</button>
        {messages.map((item, index) => <p key={index}>{item}</p>)}
      </div>
    </div>
  )
}

export default App;
