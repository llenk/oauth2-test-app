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
  try {
    const token = yield select(getToken);
    config.headers["Authorization"] = "Bearer " + token;
    const postIds = yield select(getPostIds);
    let posts = [];
    for (let id of postIds) {
      let post = yield call(axios.get, 'https://devapi.careerprepped.com/discussion/wall/' + id, config);
      post = post.data;
      if (post.comment_count > 0) {
        let comments = yield call(axios.get, 'https://devapi.careerprepped.com/discussion/wall_comment?wallpost=' + id, config);
        post.comments = comments.data._embedded.wall_comment;
      }
      posts = [...posts, post];  
      // asdf

    }
    yield put({ type: 'SET_WALL', payload: posts });
  }
  catch (error) {
    console.log(error);
  }
}

function* newPost(action) {
  try {
    const token = yield select(getToken);
    config.headers["Authorization"] = "Bearer " + token;
    let post = { "post": action.payload, "permissions": "1" }
    let response = yield call(axios.post, 'https://devapi.careerprepped.com/discussion/wall', post, config);
    console.log(response);
    yield put({ type: 'NEW_POST_ID', payload: response.data.id });
    yield put({ type: 'GET_WALL' });
  }
  catch (error) {
    console.log(error);
  }
}

function* newComment(action) {
  try {
    const token = yield select(getToken);
    config.headers["Authorization"] = "Bearer " + token;
    let comment = {"comment": action.payload.newComment, "wall": action.payload.id};
    yield call(axios.post, 'https://devapi.careerprepped.com/discussion/wall_comment', comment, config);
    yield put({type: 'GET_WALL'});
  }
  catch (error) {
    console.log(error);
  }
}

function* wallSaga() {
  yield takeLatest('GET_WALL', getWall);
  yield takeLatest('NEW_POST', newPost);
  yield takeLatest('NEW_COMMENT', newComment);
}

export default wallSaga;