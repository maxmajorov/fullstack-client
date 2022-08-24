import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Chat } from "./components/chat/Chat";
import { InsertUsers } from "./components/insertUsers/InsertUsers";
import { Header } from "./components/common/header/Header";
import { Sidebar } from "./components/common/sidebar/Sidebar";

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
