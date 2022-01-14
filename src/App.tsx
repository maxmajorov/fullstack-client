import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      It's my first react app with typescript
      <Rating />
    </div>
  );
}

function Rating() {

  return (
    <div>
      <RatingTitle/>
      <RatingBody/>
    </div>
  )
}

function Star() {
  return (
    <div>
      <span>Star</span>
    </div>
  )
}

function RatingTitle() {
  return (
    <h3>MENU</h3>
  )
}

function RatingBody() {
  return (
      <ul>
        <Star/>
        <Star/>
        <Star/>
        <Star/>
        <Star/>
      </ul>
  )
}


export default App;
