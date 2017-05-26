import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../redux/posts';
import { PostItem } from './index';

const Posts = (props) => {
  const getFavoritePost = () => {
    return JSON.parse(localStorage.getItem('favoritePosts'));
  };

  const updateFavoritePost = (postId) => {
    // check to see if post matches any of the users favorite post that is stored in localStorage
    if (Array.isArray(getFavoritePost())) {
      return getFavoritePost().filter(({ data }) => data.id === postId)[0]
    }
  }
  return (
    <main>
      <section className="posts">
        {props.type && props.posts
          && props.posts.map(({ data }, index) => (
            <PostItem key={data.id} fav={updateFavoritePost(data.id)} type={props.type} index={index + 1} {...data}/>
          ))
        }
        {!props.type && getFavoritePost().map(({data}, index) => {
          console.log(data);
          return <PostItem key={data.id} fav={updateFavoritePost(data.id)} index={index + 1} {...data}/>
        })}
      </section>
      <aside>
        Aside
      </aside>
    </main>
  )
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators(actions, dispatch)
);

const mapStateToProps = state => ({
  posts: state.posts.posts,
  favoritePosts: state.posts.favoritePosts,
});


export default connect(mapStateToProps, mapDispatchToProps)(Posts);
