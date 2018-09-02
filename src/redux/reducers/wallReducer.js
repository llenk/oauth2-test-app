import { combineReducers } from 'redux';

const wallPosts = (state = [], action) => {
  switch (action.type) {
    case 'SET_WALL':
      return action.payload;
    default: 
      return state;
  }
}

const postIds = (state = ['c343c9c0-ae41-11e8-bbe4-06586b502edc', '5cb9f9f8-ae5d-11e8-bbe4-06586b502edc'], action) => {
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
