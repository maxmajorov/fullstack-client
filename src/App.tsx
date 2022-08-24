import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Chat } from "./components/chat/Chat";
import { InsertUsers } from "./components/insertUsers/InsertUsers";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Header } from "./components/header/Header";

export const App = () => {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <div className="container-content">
        <Routes>
          <Route path="/chat" element={<Chat />} />
          <Route path="/users" element={<InsertUsers />} />
        </Routes>
      </div>
    </div>
  );
};
