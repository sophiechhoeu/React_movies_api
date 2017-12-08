import React from 'react';


export default function MovieForm({ onSubmit }) {

// This function pushes it up the line you can embed a function within a function then it pushes it
// to the onSubmit function

function handleFormSubmission(event) {
  //this preventDefault tells the DOM
  // when you click on a button on a form or div that click propogates up each element has a default action
  // prevent default prevents the default action of the element
  // event.stopPropagation - prevents the event from going up the chain
  event.preventDefault();
  // console.log(event.target.elements);
  const {elements} = event.target;
  const title = elements["title"].value;
  const yearReleased = elements["yearReleased"].value;
  onSubmit({title, yearReleased});
}

  return (
    <form onSubmit={handleFormSubmission}>
      <label>
        Title
        &nbsp;
        <input type="text" name="title"/>
      </label>
      &nbsp;
      <label>
        Year
        &nbsp;
        <input type="number" name="yearReleased"/>
      </label>
      <button type="submit">Create Movie! &hearts;</button>
    </form>
  )
}
