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
}

export default combineReducers({
  isLoading,
});
