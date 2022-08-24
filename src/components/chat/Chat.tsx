import React, { ChangeEvent, useState } from "react";
import defaultAva from "../../assets/img/def-image.png";
import classes from "./Chat.module.scss";

export const Chat = () => {
  const [messages, setMessages] = useState([
    { _id: 1, message: "Hello", user: { id: 1, name: "Max" } },
    { _id: 2, message: "Hi, Max!", user: { id: 2, name: "Olga" } },
  ]);
  const [newMessage, setNewMessage] = useState<string>("");

  const myID = 1;

  const changeMessageHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setNewMessage(event.currentTarget.value);
  };

  const sendMessageHandler = () => {};

  return (
    <div className={classes.chatContainer}>
      <div>
        {messages.map((mes) => (
          <div
            key={mes._id}
            className={
              mes.user.id === myID
                ? `${classes.message} ${classes.message_left}`
                : `${classes.message} ${classes.message_right}`
            }
          >
            <img src={defaultAva} className={classes.avatar} alt="avatar" />
            <div className={classes.messageItem}>
              <div className={classes.nameMessage}>
                <span className={classes.name}>{mes.user.name}</span>
                <span className={classes.item}>{mes.message}</span>
              </div>
              <div className={classes.time}>
                {new Date().toLocaleTimeString()}
              </div>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={sendMessageHandler} className={classes.messageInput}>
        <textarea value={newMessage} onChange={changeMessageHandler} />
        <button>Send</button>
      </form>
    </div>
  );
};
