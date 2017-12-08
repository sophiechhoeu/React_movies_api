import React from 'react';
import Comment from './Comment';
import Director from './Director';


export default function Movie({
  title,
  yearReleased,
  director,
  comments
}) {
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
        Comments: {
          comments.length ? (
            comments.map(comment => (
              <Comment key={comment._id}>
              {comment.body}
              </Comment>
            ))

          ) :   ('no comments')
        }
      </p>
      &nbsp;
        </span>
    </div>
  )
}



// terry is such a cool dude.
  // director && <span> Director : {director.firstName} {director.lastName}</span>
