import axios from "axios";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import defaultAva from "../../assets/img/def-image.png";
import classes from "./Chat.module.scss";

const chatSocket = io("http://localhost:3009", {
  path: "/chat/",
});
console.log(chatSocket);

export const Chat = () => {
  const [name, setName] = useState<string>("");
  const [messages, setMessages] = useState<Array<any>>([]);
  const [newMessage, setNewMessage] = useState<string>("");

  const myID = 1;

  // socket

  useEffect(() => {
    chatSocket.on("greeting", (mes) => {
      console.log(mes);
    });
    chatSocket.on("init-message-published", (mes) => {
      setMessages(mes);
    });

    chatSocket.on("new-message-send", (newMes) => {
      setMessages([...messages, newMes]);
    });
  }, [messages]);

  useEffect(() => {
    messagesAncorRef.current?.scrollIntoView();
  }, [messages]);

  const messagesAncorRef = useRef<HTMLDivElement>(null);

  // add new user
  const changeNameHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };

  const setNewUser = () => {
    chatSocket.emit("set-new-user", name);
    setName("");
  };

  // send messages
  const changeMessageHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setNewMessage(event.currentTarget.value);
  };

  const sendMessageHandler = () => {
    chatSocket.emit("client-message-send", newMessage);
    setNewMessage("");
  };

  return (
    <>
      <div style={{ paddingTop: "20px", textAlign: "center" }}>
        <input value={name} onChange={changeNameHandler} />
        <button onClick={setNewUser}>add user</button>
      </div>

      <div className={classes.chatContainer}>
        <div className={classes.messagesBlock}>
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
          <div ref={messagesAncorRef}></div>
        </div>

        <div className={classes.messageInput}>
          <textarea value={newMessage} onChange={changeMessageHandler} />
          <button onClick={sendMessageHandler}>Send</button>
        </div>
      </div>
    </>
  );
};
