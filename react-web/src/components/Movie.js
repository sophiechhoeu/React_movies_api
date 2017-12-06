import React from 'react';
import Comment from './Comments'


export default function Movie({
  title,
  yearReleased,
  director,
  comments
}) {
  return (
    <div>
      <span>Title: {title}</span>
      <span>Year: {yearReleased}</span>
      {/* <span>Director: {director.firstName} {director.lastName}</span> */}
      {
       comments ? (comments.map(comment => ( <Comment key={comment._id} > {comment.body} </Comment> )))
        : ('No Comments')
      }
    </div>
  );
};
