import React from 'react';
import Comment from './Comment';
import Director from './Director';


export default function Movie({
  title,
  yearReleased,
  director,
  comments
}) {

  /*
   * Validate the comments props passed down from parent container component.
   * First check that comments is not of type `undefined` (i.e. `typeof comments != undefined`)
   * Secondly if it is defined (i.e. truthy), then we'll make sure it's not an empty array
   * (i.e. NOT [], as we want [{title: "", _id: ""}])
   */
  function isValidComments(comments) {
    return comments && comments.length > 0
  }

  /*
   * Assuming the comments props are valid, we'll only display the comments component if
   * the comments prop that is passed down if it has an `_id` property
   */
  function showValidComments(comments) {
    return comments
    .filter(comment => {
      return comment.hasOwnProperty('_id');
    })
    .map(comment => {
      return (
        <Comment key={comment._id}>
          {comment.body}
        </Comment>
      )
      //return comment
    })
  }

  // the container MovieList component is rendering multiple Movies (i.e. an outer array
  // of Movies with comments).
  // each time it renders a Movie, it sends down the `props`.
  // the `props` contain `comments` (i.e. this.props.comments),
  // we've used destructuring to extract the `comments`
  // but the prop `comments` is actually an array itself (i.e. [] or [{title: "", _id: ""}])
  // so we only want to show those that aren't empty [], so we use a conditional check
  // i.e. `comments.length > 0`, then we also want to make sure it contains a hash with
  // the properties we're after (i.e. _id)

  // debugging only...
  // if (comments.length > 0) {
  //   console.log(showComments(comments))
  // }

  console.log(comments)

  return (
    <div>
      <span>Title: {title}</span>
      <p>Year: {yearReleased}</p>
      <p>
      Director: {
        director ? (
          <Director>
            {director.firstName}
            {director.lastName}
          </Director>
        ) : ('N/A')
      }
    </p>
      <span>
        <p>
        comments: {
          isValidComments(comments) ? showValidComments(comments) : 'no comments'
        }
      </p>
      &nbsp;
        </span>
    </div>
  )
}



// terry is such a cool dude.
  // director && <span> Director : {director.firstName} {director.lastName}</span>
