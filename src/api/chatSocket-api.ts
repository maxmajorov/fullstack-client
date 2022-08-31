import { io, Socket } from "socket.io-client";

export const chatSocketAPI = {
  // const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io();
  chatSocket: null as null | Socket<any, any>,
  
  createConnectionTC() {
      this.chatSocket = io("http://localhost:3009", {
      path: "/chat/", 
    })
  },

  subscribe(initMessageHandler: (messages: any) => void,
            newMessageHandler: (newMessage: any) => void
  ) {

    this.chatSocket?.on("init-message-published", initMessageHandler);
    
    this.chatSocket?.on("new-message-send", newMessageHandler);

  },

  destroyConnectionTC() {
    this.chatSocket?.disconnect()
  }
  
}


// ==== TYPES ====

export type eventTypes = 'greeting' | "init-message-published" | "new-message-send"
export type ChatResponseType = {

}