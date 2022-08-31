import { io, Socket } from "socket.io-client";

export const chatSocketAPI = {
  // const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io();
  chatSocket: null as null | Socket<any, any>,

  createConnectionTC() {
    this.chatSocket = io("http://localhost:3009", {
      path: "/chat/",
    });
  },

  subscribe(
    initMessageHandler: (messages: any) => void,
    newMessageHandler: (newMessage: any) => void,
    setUserInfoHandler: (user: UserType) => void,
    clientTypingTextHandler: (user: UserType) => void
  ) {
    this.chatSocket?.on("init-message-published", initMessageHandler);
    this.chatSocket?.on("new-message-send", newMessageHandler);
    this.chatSocket?.on("send-userInfo-to-client", setUserInfoHandler);
    this.chatSocket?.on("user-typing-text", clientTypingTextHandler);
  },

  destroyConnectionTC() {
    this.chatSocket?.disconnect();
    this.chatSocket = null;
  },

  sendName(name: string) {
    this.chatSocket?.emit("client-set-name", name);
  },

  sendMessage(newMessage: string) {
    this.chatSocket?.emit("client-message-send", newMessage);
  },

  typingText() {
    this.chatSocket?.emit("client-typing-text");
  },
};

// ==== TYPES ====

export type eventTypes =
  | "greeting"
  | "init-message-published"
  | "new-message-send";

export type UserType = {
  _id: string;
  name: string;
};

export type ChatResponseType = {
  _id: string;
  message: string;
  user: UserType;
};
