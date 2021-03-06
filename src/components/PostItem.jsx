import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../redux/posts';
import { Heart } from './index';

class PostItem extends React.Component {
  constructor() {
    super();
    this.state = {
      animation: false,
    };
    this.addFavoritePost = this.addFavoritePost.bind(this);
    this.removeFavoritePost = this.removeFavoritePost.bind(this);
  }
  addFavoritePost() {
    this.props.addFavorite({ data: this.props.data });
    this.setState({ animation: true });
    setTimeout(() => this.setState({ animation: false }), 500);
  }
  removeFavoritePost() {
    this.props.removeFavorite(this.props.data.id);
  }
  render() {
    return (
      <article className="postItem">
        <h3 className="postItem__index">{this.props.index}</h3>
        {/* Determine if item is favored. and pass the appropriate action and classes */}
        <Heart
          animation={this.state.animation}
          fav={this.props.fav}
          action={this.props.fav ? this.removeFavoritePost : this.addFavoritePost}
        />
        <div className="postItem__thumbnail">
          {this.props.data.thumbnail
            ? <img src={this.props.data.thumbnail} alt={this.props.data.author} />
            : <div className="postItem__thumbnail-empty" />
          }
        </div>
        <div className="postItem__info">
          <h4 to={`/post/${this.props.data.id}`} className="postItem__title">{this.props.data.title}</h4>
          <p className="postItem__author">author {this.props.data.author}</p>
          <div className="postItem__fakeLinks">
            <p>{this.props.data.num_comments} comments</p>
            <p>share</p>
            <p>save</p>
            <p>hide</p>
            <p>report</p>
          </div>
        </div>
      </article>
    );
  }
}

PostItem.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  fav: PropTypes.bool.isRequired,
  removeFavorite: PropTypes.func.isRequired,
  addFavorite: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

const mapDispatchToProps = dispatch => (
  bindActionCreators(actions, dispatch)
);

export default connect(null, mapDispatchToProps)(PostItem);
