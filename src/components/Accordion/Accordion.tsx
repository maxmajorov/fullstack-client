import React from "react";

type AccordionPropsType = {
  title: string;
  collapsed?: boolean;
};

//true ===>>> свернутое

function Accordion(props: AccordionPropsType) {
  return (
    <div>
      <h3>{props.title}</h3>
      {!props.collapsed && <AccordionBody />}
    </div>
  );
}

function AccordionBody() {
  return (
    <ul>
      <li>item-1</li>
      <li>item-2</li>
      <li>item-3</li>
    </ul>
  );
}

export default Accordion;
