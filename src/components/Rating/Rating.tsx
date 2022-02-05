import React from "react";

type RatingPropsType = {
  value: 0 | 1 | 2 | 3 | 4 | 5; // можно написать number
};

function Rating(props: RatingPropsType) {
  return (
    <div>
      <RatingBody value={props.value} />
    </div>
  );
}

function RatingBody(props: any) {
  return (
    <div>
      <RatingStar selected={props.value > 0} />
      <RatingStar selected={props.value > 1} />
      <RatingStar selected={props.value > 2} />
      <RatingStar selected={props.value > 3} />
      <RatingStar selected={props.value > 4} />
    </div>
  );
}

type StarPropsType = {
  selected: boolean; //true | false
};

function RatingStar(props: StarPropsType) {
  return props.selected ? (
    <span>
      <b>Star </b>
    </span>
  ) : (
    <span>Star</span>
  );
}

export default Rating;
