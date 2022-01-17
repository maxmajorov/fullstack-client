import React from "react";

function Rating(props: any) {
  return (
    <div>
      <RatingTitle />
      <RatingBody value={props.value} />
    </div>
  );
}

function RatingTitle() {
  return <h3>MENU</h3>;
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

function RatingStar(props: any) {
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
