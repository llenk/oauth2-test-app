import { combineReducers } from 'redux';

const wallPosts = (state = [], action) => {
  switch (action.type) {
    case 'SET_WALL':
      return [...state, action.payload];
    default: 
      return state;
  }
}

const postIds = (state = [], action) => {
  switch (action.type) {
    case 'NEW_POST_ID':
      return [...state, action.payload];
    default:
      return state;
  }
}

export default combineReducers({
  wallPosts,
  postIds,
});
