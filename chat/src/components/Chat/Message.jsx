import React from "react";

const Message = ({ message, isOwner = false }) => {
  return (
    <div className={"message " + (isOwner ? "left" : "")}>
      <div className="username">{message?.username}</div>
      <div className="message__text">{message?.text}</div>
    </div>
  );
};

export default Message;
