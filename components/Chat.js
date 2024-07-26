import { useState, useEffect } from "react";
import { io } from "socket.io-client";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const socket = io('http://localhost:3001');
 

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await fetch("/api/messages");
        const messages = await res.json();
        setMessages(messages);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMessages();
  }, []);

  useEffect(() => {
    socket.on("newMessage", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off("newMessage");
    };
  }, [socket]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: inputValue }),
      });
      const result = await res.json();
      socket.emit("newMessage", result); // emit the new message to the server
      setMessages((prevMessages) => [...prevMessages, result])
      setInputValue("");
   
  }

  return (
    <>
    <h2 style={{textAlign: "center", marginTop:"1rem"}}>Chat</h2>
    <div style={{display: "flex", justifyContent:"center", marginTop:"1rem"}}>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Send</button>
      </form>
      </div>
      <div style={{display: "flex", flexDirection:"column-reverse",
       justifyContent:"center",
        textAlign:"center",
        }}>
      {messages.map((message) => (
        <p key={message._id}>{message.message}</p>
      ))}
    </div>
    </>
  );
}