import React from "react";

type AccordionPropsType = {
  titleValue: string;
  collapsed: boolean;
};

function Accordion(props: AccordionPropsType) {
  return props.collapsed === true ? (
    <div>
      <AccordionTitle title={props.titleValue} />
    </div>
  ) : (
    <div>
      <AccordionTitle title={props.titleValue} />
      <AccordionBody />
    </div>
  );
}

type AccordionTitlePropsType = {
  title: string;
};

function AccordionTitle(props: AccordionTitlePropsType) {
  return <h3>{props.title}</h3>;
}

// type AccordionBodyPropsType = {
//   collapsed: boolean;
// };

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
