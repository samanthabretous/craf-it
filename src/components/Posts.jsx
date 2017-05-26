import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../redux/posts';
import { PostItem } from './index';

const Posts = (props) => {
  return (
    <main>
      <section className="posts">
        {props.posts &&
          props.posts.map(({ data }, index) => (
            <PostItem key={data.created} index={index + 1} {...data}/>
          ))
        }
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
  posts: state.posts.posts
});


export default connect(mapStateToProps, mapDispatchToProps)(Posts);
