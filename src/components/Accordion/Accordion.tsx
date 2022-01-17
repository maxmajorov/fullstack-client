import React from "react";

function Accordion(props: any) {
  return (
    <div>
      <AccordionTitle title={props.title} />
      <AccordionBody />
    </div>
  );
}

function AccordionTitle(props: any) {
  return <h3>{props.title}</h3>;
}

function AccordionBody() {
  return (
    <ul>
      <li>item-1</li>
      <li>item-2</li>
      <li>item-3</li>
      <li>item-4</li>
      <li>item-5</li>
    </ul>
  );
}

export default Accordion;
