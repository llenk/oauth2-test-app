import { put, takeLatest, call } from 'redux-saga/effects';
import { loginInfo } from '../constants';
import axios from 'axios';

function* loginUser(action) {
  // action.payload should have email and password
  yield put({type: 'LOGIN_START'});
  let payload = {
    ...action.payload,
    client_id: loginInfo.client_id,
    grant_type: loginInfo.grant_type,
  };
  let result = yield call(axios.post, loginInfo.endpoint, payload);
  yield put({type: 'USER_TOKEN', payload: result.data});
  yield put({type: 'LOGIN_END'});
} 

function* loginSaga() {
  yield takeLatest('LOGIN_USER', loginUser);
}

export default loginSaga;