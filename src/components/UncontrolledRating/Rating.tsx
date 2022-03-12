import React, { useState } from "react";

const UncontrolledRating = () => {
  const [value, setValue] = useState<number>(0);

  return (
    <div>
      <h1>Uncontrolled Rating</h1>
      <Star selected={value > 0} setValue={() => setValue(1)} />
      <Star selected={value > 1} setValue={() => setValue(2)} />
      <Star selected={value > 2} setValue={() => setValue(3)} />
      <Star selected={value > 3} setValue={() => setValue(4)} />
      <Star selected={value > 4} setValue={() => setValue(5)} />
    </div>
  );
};

type StarPropsType = {
  selected: boolean;
  setValue: () => void;
};

const Star = (props: StarPropsType) => {
  // return props.selected ? (
  //   <>
  //     <b>
  //       <span onClick={() => props.onClickStar()}>Star</span>
  //     </b>
  //   </>
  // ) : (
  //   <>
  //     <span onClick={() => props.onClickStar()}>Star</span>
  //   </>
  // );

  // Все можно заменить одной строкой дабы избежать дважы весить один и тот же onClick на span

  return (
    <span onClick={() => props.setValue()}>
      {props.selected ? <b>Star </b> : "Star "}
    </span>
  );
};

export default UncontrolledRating;
