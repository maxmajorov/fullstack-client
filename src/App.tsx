import React from "react";
import "./App.css";
import Rating from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";

const App = () => {
  return (
    <div>
      <PageTitle title={"My first React App with TypeScript"} />
      <Accordion title={"Accordion-1"} collapsed={true} />
      <Accordion title={"Accordion-2"} />
      <Rating value={0} />
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} />
    </div>
  );
};

type PageTitlePropsType = {
  title: string;
};

function PageTitle(props: PageTitlePropsType) {
  return <h1>{props.title}</h1>;
}

export default App;
