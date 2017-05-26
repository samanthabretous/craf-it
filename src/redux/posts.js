import axios from 'axios';
import _ from 'lodash';

export const GET_ALL_POSTS ='get_all_posts';
export const ADD_FAV ='add_fav';

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

export const addFavorite = (post) => (
  {
    type: ADD_FAV,
    post
  }
)

const INITIAL_STATE = {
  posts: null,
  post: null,
  favoritePosts: [],
}
const getPostFromStorage = () => {
  return JSON.parse(localStorage.getItem('favoritePosts'));
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type){
    case GET_ALL_POSTS:
      let key = Object.keys(action)[1]
      return Object.assign({}, state, { [key]: action[key] })
    case ADD_FAV:
      // store user favorites into localStorage
      console.log(getPostFromStorage());
      console.log(action.post);
      const favoritePosts = getPostFromStorage()
        ? [...getPostFromStorage(), action.post]
        : [action.post];
      localStorage.setItem('favoritePosts', JSON.stringify(favoritePosts));
      return Object.assign({}, state, { favoritePosts })
    default:
      return state
  }
}
