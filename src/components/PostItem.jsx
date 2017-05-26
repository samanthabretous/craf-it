import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../redux/posts';

const PostItem = props => {
  // if(props.type) delete props.type
  // console.log(props.type !== "favoritePosts");
  return (
    <article className="postItem">
      <h3 className="postItem__index">{props.index}</h3>
      {props.type !== "favoritePosts" && <button disabled={props.fav} className="postItem__like">
        <span className={`heart ${props.fav && 'postItem__like-active'}`} onClick={() => props.addFavorite({ data: props })}></span>
      </button>}
      <div className="postItem__thumbnail">{props.thumbnail ? <img src={props.thumbnail}/> : <div className="postItem__thumbnail-empty"></div>}</div>
      <div className="postItem__info">
        <h4 to={'/post/' + props.id} className="postItem__title">{props.title}</h4>
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
const mapDispatchToProps = (dispatch) => (
  bindActionCreators(actions, dispatch)
);

export default connect(null, mapDispatchToProps)(PostItem);
