import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../redux/posts';
import { Nav, Posts } from './index';

class Home extends React.Component {
  render() {
    return (
      <main>
        <div>Home</div>
        <Posts />
      </main>
    )
  }
}

Home.propTypes = {

};


const mapDispatchToProps = (dispatch) => (
  bindActionCreators(actions, dispatch)
)

const mapStateToProps = state => {
return {
  posts: state.posts.posts
}}


export default connect(mapStateToProps, mapDispatchToProps)(Home)
