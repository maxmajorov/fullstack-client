import React from "react";
import "./App.css";
import Rating from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";

function App() {
  return (
    <div>
      <PageTitle title={"My first React App with TypeScript"} />
      <PageTitle title={"Second page"} />
      <Accordion titleValue={"Accordion-1"} collapsed={true} />

      <Accordion titleValue={"Accordion-2"} collapsed={false} />
      <Rating value={0} title={"Article 1"} />
      <Rating value={1} title={"Article 2"} />
      <Rating value={2} title={"Article 3"} />
      <Rating value={3} title={"Article 4"} />
      <Rating value={4} title={"Article 5"} />
      <Rating value={5} title={"Article 6"} />
    </div>
  );
}

type PageTitlePropsType = {
  title: string;
};

function PageTitle(props: PageTitlePropsType) {
  return <h1>{props.title}</h1>;
}

export default App;
