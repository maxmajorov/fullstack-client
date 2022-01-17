import React from "react";

type RatingPropsType = {
  value: 0 | 1 | 2 | 3 | 4 | 5; // можно написать number
  title: string;
};

function Rating(props: RatingPropsType) {
  return (
    <div>
      <RatingTitle titleArticle={props.title} />
      <RatingBody value={props.value} />
    </div>
  );
}

type RatingTitlePropsType = {
  titleArticle: string;
};

function RatingTitle(props: RatingTitlePropsType) {
  return <h3>{props.titleArticle}</h3>;
}

function RatingBody(props: any) {
  if (props.value === 1) {
    return (
      <ul>
        <RatingStar selected={true} />
        <RatingStar selected={false} />
        <RatingStar selected={false} />
        <RatingStar selected={false} />
        <RatingStar selected={false} />
      </ul>
    );
  }
  if (props.value === 2) {
    return (
      <ul>
        <RatingStar selected={true} />
        <RatingStar selected={true} />
        <RatingStar selected={false} />
        <RatingStar selected={false} />
        <RatingStar selected={false} />
      </ul>
    );
  }
  if (props.value === 3) {
    return (
      <ul>
        <RatingStar selected={true} />
        <RatingStar selected={true} />
        <RatingStar selected={true} />
        <RatingStar selected={false} />
        <RatingStar selected={false} />
      </ul>
    );
  }
  if (props.value === 4) {
    return (
      <ul>
        <RatingStar selected={true} />
        <RatingStar selected={true} />
        <RatingStar selected={true} />
        <RatingStar selected={true} />
        <RatingStar selected={false} />
      </ul>
    );
  }
  if (props.value === 5) {
    return (
      <ul>
        <RatingStar selected={true} />
        <RatingStar selected={true} />
        <RatingStar selected={true} />
        <RatingStar selected={true} />
        <RatingStar selected={true} />
      </ul>
    );
  }
  return (
    <ul>
      <RatingStar selected={false} />
      <RatingStar selected={false} />
      <RatingStar selected={false} />
      <RatingStar selected={false} />
      <RatingStar selected={false} />
    </ul>
  );
}

type StarPropsType = {
  selected: boolean; //true | false
};

function RatingStar(props: StarPropsType) {
  if (props.selected === true) {
    return (
      <span>
        <b>Star </b>
      </span>
    );
  } else {
    return <span>Star </span>;
  }
}

export default Rating;
