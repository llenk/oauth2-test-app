import { put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';

const config = {
  headers: { 
    "Content-Type": "application/json",
  },
  // withCredentials: true
};

function* getWall(action) {
  console.log('eyy')
  config.headers["Authorization"] = "Bearer " + action.payload;
  let result = yield call(axios.get, 'https://devapi.careerprepped.com/discussion/wall', config);
  console.log(result);
}

function* wallSaga() {
  yield takeLatest('GET_WALL', getWall);
}

export default wallSaga;