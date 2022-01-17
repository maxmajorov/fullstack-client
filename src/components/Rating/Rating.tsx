import React from "react";

function Rating() {
  return (
    <div>
      <RatingTitle />
      <RatingBody />
    </div>
  );
}

function RatingTitle() {
  return <h3>MENU</h3>;
}

function RatingBody() {
  return (
    <ul>
      <RatingStar />
      <RatingStar />
      <RatingStar />
      <RatingStar />
      <RatingStar />
    </ul>
  );
}

function RatingStar() {
  return <span>Star - </span>;
}

export default Rating;
