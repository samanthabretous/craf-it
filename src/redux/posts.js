import axios from 'axios';

export const GET_ALL_POSTS = 'get_all_posts';
export const ADD_FAV = 'add_fav';
export const REMOVE_FAV = 'remove_fav';

export const getAllPosts = posts => (
  {
    type: GET_ALL_POSTS,
    posts,
  }
);

export const getPostsAysnc = category => dispatch => (
  axios.get(`https://www.reddit.com/r/${category}/top/.json`)
  .then(({ data }) => {
    dispatch(getAllPosts(data.data.children));
  })
);

export const removeFavorite = postId => (
  {
    type: REMOVE_FAV,
    postId,
  }
);

export const addFavorite = post => (
  {
    type: ADD_FAV,
    post,
  }
);

const INITIAL_STATE = {
  posts: null,
  post: null,
  favoritePosts: [],
};
const getPostsFromStorage = () => JSON.parse(localStorage.getItem('favoritePosts'));

const setPostsToStorage = posts => localStorage.setItem('favoritePosts', JSON.stringify(posts));

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_POSTS:
      const key = Object.keys(action)[1];
      return Object.assign({}, state, { [key]: action[key] });
    case REMOVE_FAV:
      let removedPost = null;
      if (getPostsFromStorage()) {
        removedPost = getPostsFromStorage().filter(({ data }) => action.postId !== data.id);
        setPostsToStorage(removedPost);
      }
      return Object.assign({}, state, { favoritePosts: removedPost });
    case ADD_FAV:
      // store user favorites into localStorage
      const favoritePosts = getPostsFromStorage()
        ? [...getPostsFromStorage(), action.post]
        : [action.post];
      setPostsToStorage(favoritePosts);
      return Object.assign({}, state, { favoritePosts });
    default:
      return state;
  }
};
