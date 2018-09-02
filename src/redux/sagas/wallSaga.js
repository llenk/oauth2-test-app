import { put, takeLatest, call, select } from 'redux-saga/effects';
import axios from 'axios';

const config = {
  headers: { 
    "Content-Type": "application/json",
  },
  // withCredentials: true
};

const getToken = (state) => state.login.userToken.access_token;
const getPostIds = (state) => state.wall.postIds;

function* getWall(action) {
  const token = yield select(getToken);
  config.headers["Authorization"] = "Bearer " + token;
  const postIds = yield select(getPostIds);
  let posts = [];
  for (let id of postIds) {
    let post = yield call(axios.get, 'https://devapi.careerprepped.com/discussion/wall/' + id, config);
    post = post.data;
    if (post.comment_count > 0) {
      console.log('eyy')
      let comments = yield call(axios.get, 'https://devapi.careerprepped.com/discussion/wall_comment?wallpost=' + id, config);
      post.comments = comments.data._embedded.wall_comment;
    }
    posts = [...posts, post];
  }

  yield put({type: 'SET_WALL', payload: posts});
  console.log(posts);
}

function* newPost(action) {
  const token = yield select(getToken);
  config.headers["Authorization"] = "Bearer " + token;
  let post = {"post": action.payload, "permissions": "1"}
  let response = yield call(axios.post, 'https://devapi.careerprepped.com/discussion/wall', post, config);
  console.log(response);
  yield put({type: 'NEW_POST_ID', payload: response.data.id});
  yield put({type: 'GET_WALL'});
}

function* wallSaga() {
  yield takeLatest('GET_WALL', getWall);
  yield takeLatest('NEW_POST', newPost);
}

export default wallSaga;