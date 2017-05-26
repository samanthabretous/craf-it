import axios from 'axios';
import _ from 'lodash';

export const GET_ALL_POSTS ='get_all_posts';

export const getAllPosts = (posts) => (
  {
    type: GET_ALL_POSTS,
    posts
  }
)

export const getPostsAysnc = (category) => (dispatch) => (
  axios.get(`https://www.reddit.com/r/${category}/top/.json`)
  .then(({ data }) => {
    dispatch(getAllPosts(data.data.children));
  })
);

const INITIAL_STATE = {
  posts: null,
  post: null,
  categories: null,
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type){
    case GET_ALL_POSTS:
      let key = Object.keys(action)[1]
      return Object.assign({}, state, {[key]: action[key]})

    default:
      return state
  }
}
