import React from "react";
import "./App.css";
import Rating from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";

function App() {
  return (
    <div>
      <PageTitle title={"My first React App with TypeScript"} />
      <PageTitle title={"Second page"} />
      Article 1
      <Accordion title={"Accordion-1"} />
      <Rating value={2} />
      Article 2
      <Accordion title={"Accordion-2"} />
      <Rating value={0} />
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} />
    </div>
  );
}

function PageTitle(props: any) {
  return <h1>{props.title}</h1>;
}

export default App;
