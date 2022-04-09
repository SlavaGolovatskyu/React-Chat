import React, { useState } from "react";
import { io } from "socket.io-client";
import Username from "./Username";
import Message from "./Message";

import { chatStages } from "../../models";
import "./index.scss";

const socket = io("http://localhost:4500");

export const Chat = () => {
  const [currentStep, setCurrentStep] = useState(chatStages.username);
  const [username, setUsername] = useState("");
  const [roomId, setRoomId] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    if (message) {
      const newMessage = {
        id: messages.length ? messages[messages.length - 1].id + 1 : 1,
        username: username,
        text: message,
        isOwner: true,
      };

      setMessage("");
      // todo remake on linked list
      setMessages((prev) => [...prev, newMessage]);
    }
  };

  const onSubmitMessage = (e) => {
    e.preventDefault();
    sendMessage();
  };

  const nextStep = () => {
    setCurrentStep(chatStages.chat);
  };

  if (currentStep === chatStages.username) {
    return <Username saveUsername={setUsername} nextStep={nextStep} />;
  }

  return (
    <section className="chat">
      <div className="messages">
        <div className="wrapper__message">
          {messages.map((message) => (
            <Message
              key={message.id}
              message={message}
              isOwner={message.isOwner}
            />
          ))}
        </div>
        <div className="chat__form">
          <div className="send">
            <form onSubmit={onSubmitMessage}>
              <input
                value={message}
                placeholder="Write the message"
                onChange={(e) => setMessage(e.target.value)}
              />
            </form>
            <button onClick={sendMessage}>Send</button>
          </div>
          <div className="send">
            <input
              placeholder="room id"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
            />
            <button>Send</button>
          </div>
        </div>
      </div>
    </section>
  );
};
