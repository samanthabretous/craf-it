import React from 'react';
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
      return getFavoritePost().filter(({ data }) => data.id === postId)[0];
    }
  };

  return (
    <main>
      <section className="posts">
        {props.type && props.posts
          && props.posts.map((post, index) => (
            <PostItem key={post.data.id} fav={updateFavoritePost(post.data.id)} type={props.type} index={index + 1} data={post.data}/>
          ))
        }
        {!props.type && getFavoritePost() &&
          getFavoritePost().map((post, index) => <PostItem key={post.data.id} index={index + 1} fav data={post.data}/>)
        }
      </section>
      <aside />
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
