import React, { useState } from "react";

//true ===>>> свернутое

const UncontrolledAccordion = () => {
  const [collaps, setCollapse] = useState(true);

  const onClickCollapsedHandler = () => {
    collaps ? setCollapse(false) : setCollapse(true);

    console.log(collaps);
  };

  return (
    <div onClick={onClickCollapsedHandler}>
      <h3>===Uncontrolled Accardion===</h3>
      {!collaps ? (
        <ul>
          <li>React</li>
          <li>TypeScript</li>
          <li>Redux</li>
        </ul>
      ) : null}
    </div>
  );
};

export default UncontrolledAccordion;
