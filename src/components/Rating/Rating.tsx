import React from "react";

export type RatingValuesType = {
  value: 0 | 1 | 2 | 3 | 4 | 5; // можно написать number
};

type RatingPropsType = {
  onClick: (value: number) => void;
  value: number;
};

const Rating: React.FC<RatingPropsType> = (props) => {
  return (
    <div>
      <h1>Controlled Rating</h1>
      <Star selected={props.value > 0} onClick={props.onClick} value={1} />
      <Star selected={props.value > 1} onClick={props.onClick} value={2} />
      <Star selected={props.value > 2} onClick={props.onClick} value={3} />
      <Star selected={props.value > 3} onClick={props.onClick} value={4} />
      <Star selected={props.value > 4} onClick={props.onClick} value={5} />
    </div>
  );
};

type StarPropsType = {
  selected: boolean;
  value: number;
  onClick: (value: number) => void;
};

function Star(props: StarPropsType) {
  return (
    <span onClick={() => props.onClick(props.value)}>
      {props.selected ? <b>Star </b> : "Star "}
    </span>
  );
}

export default Rating;
