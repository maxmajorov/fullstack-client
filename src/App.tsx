import React from "react";
import "./App.css";
import Rating from "./components/Rating/Rating";
import AppTitle from "./components/AppTitle/AppTitle";
import Accordion from "./components/Accordion/Accordion";

function App() {
  return (
    <div>
      <AppTitle />
      <Accordion />
      <Rating />
    </div>
  );
}

export default App;
