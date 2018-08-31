import { combineReducers } from 'redux';

const isLoading = (state = false, action) => {
  switch (action.type) {
    case 'LOGIN_START': 
      return true;
    case 'LOGIN_END': 
      return false;
    default:
      return state;
  }
};

const userToken = (state = {}, action) => {
  switch (action.type) {
    case 'USER_TOKEN':
      return action.payload;
    default: 
      return state;
  }
};

export default combineReducers({
  isLoading,
  userToken,
});
