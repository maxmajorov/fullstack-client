import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import defaultAva from "../../assets/img/def-image.png";
import {
  destroyConnectionTC,
  createConnectionTC,
  messagesSelect,
  setClientNameTC,
  sendMessageTC,
  typingTextTC,
  typingUsersSelect,
} from "../../bll/reducers/chat-reducer";
import { useAppDispatch, useAppSelector } from "../../bll/store";
import classes from "./Chat.module.scss";

// const chatSocket = io("http://localhost:3009", {
//   path: "/chat/",
// });

export const Chat = () => {
  const [name, setName] = useState<string>("");
  const [newMessage, setNewMessage] = useState<string>("");

  const dispatch = useAppDispatch();
  const messages = useAppSelector(messagesSelect);
  const typingUsers = useAppSelector(typingUsersSelect);

  console.log(typingUsers);
  const myID = 1;

  // socket

  useEffect(() => {
    // craete connection then component mount
    dispatch(createConnectionTC());
    // close connection then component unmount
    return () => {
      dispatch(destroyConnectionTC());
    };
  }, []);

  useEffect(() => {
    messagesAncorRef.current?.scrollIntoView();
  }, [messages]);

  const messagesAncorRef = useRef<HTMLDivElement>(null);

  // add new user
  const changeNameHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };

  const setNewUser = () => {
    dispatch(setClientNameTC(name));
    setName("");
  };

  // send messages
  const changeMessageHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setNewMessage(event.currentTarget.value);
  };

  const sendMessageHandler = () => {
    dispatch(sendMessageTC(newMessage));
    setNewMessage("");
  };

  const typingTextViewHandler = () => {
    dispatch(typingTextTC());
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
                mes.user._id === myID.toString()
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
        <div>
          <div className={classes.messageInput}>
            <textarea
              value={newMessage}
              onChange={changeMessageHandler}
              onKeyPress={typingTextViewHandler}
            />
            <button onClick={sendMessageHandler}>Send</button>
          </div>
          {/* {typingUsers.map((user) => (
            <span key={user._id}>{user.name}</span>
          ))} */}
          {typingUsers.length !== 1 &&
            `${typingUsers.map((user) => user.name).join(" ")} typing...`}
        </div>
      </div>
    </>
  );
};
