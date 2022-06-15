import React from "react";
import ReactDOM from "react-dom/client";

const thunkCreator = () => (XXX: any, YYY: any) => {
  // 1. Server requests
  // 2. Dispatch actions
};

// App
const App = () => {
  return (
    <>
      <h1>В этом задании смотреть на экран не нужно. Ничего не изменится 😈</h1>
      <p>Читайте описание к заданию</p>
    </>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
