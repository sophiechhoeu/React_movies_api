import React from 'react';
import Comment from './Comments'
import Director from './Director'


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

      Director : {
        director ? (
          <Director> {director.firstName} {director.lastName}</Director>
        ) : ('N/A')
      }

      {
       comments ? (comments.map(comment => ( <Comment key={comment._id} > {comment.body} </Comment> )))
        : ('No Comments')
      }
    </div>
  );
};
