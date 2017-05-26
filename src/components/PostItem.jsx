import React from 'react';
import { Link } from 'react-router-dom'

const PostItem = props => {
  return (
    <article className="postItem">
      <h3 className="postItem__index">{props.index}</h3>
      <div className="postItem__like"><span className="heart"></span></div>
      <div className="postItem__thumbnail">{props.thumbnail ? <img src={props.thumbnail}/> : <div className="postItem__thumbnail-empty"></div>}</div>
      <div className="postItem__info">
        <Link to={'/post/' + props.created} className="postItem__title">{props.title}</Link>
        <p className="postItem__author">author {props.author}</p>
        <div className="postItem__fakeLinks">
          <p>{props.num_comments} comments</p>
          <p>share</p>
          <p>save</p>
          <p>hide</p>
          <p>report</p>
        </div>
      </div>
    </article>
  )
}

export default PostItem
