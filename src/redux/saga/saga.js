import { all, put, takeLatest, delay } from 'redux-saga/effects';
// import { all, call, put, takeLatest } from 'redux-saga/effects';

import {
  failure,
  loadDataSuccess,
  sendDataSuccess,
  loadOneRequestSuccess,
  deleteOneRequestSuccess,
  deleteOneRequestFail,
} from '../actions/index';
import actionTypes from '../actions/actionTypes';
// fake
import { getDBFull, getOne, deleteOne } from '../../fakeDb/sampleData';
// fake

function* loadDataSaga() {
  try {
    // const { status, data } = yield call(fetch('https://simple-blog-api.crew.red/posts'));
    yield delay(2000);
    const data = getDBFull();
    yield put(loadDataSuccess(data));
    // }
  } catch (err) {
    yield put(failure(err));
  }
}

function* loadOneRequest(params) {
  const { id } = params;
  try {
    // const { status, data } = yield call(fetch('https://simple-blog-api.crew.red/posts'));
    yield delay(2000);
    const data = getOne(id);
    yield put(loadOneRequestSuccess(data, id));
    // }
  } catch (err) {
    yield put(failure(err));
  }
}

function* sendDataSaga(form) {
  try {
    const { status } = yield fetch(`https://simple-blog-api.crew.red/posts`, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(form.data),
    });
    if (status === 201) {
      yield put(sendDataSuccess(true));
    }
  } catch (error) {
    yield put(sendDataSuccess(false));
  }
}

function* deleteOneRequest(params) {
  const { id } = params;
  try {
    // const { status, data } = yield call(fetch('https://simple-blog-api.crew.red/posts'));
    yield delay(5000);
    yield fetch(`https://simple-blog-apisdfsdf.crew.red/posts`);
    deleteOne(100);
    yield put(deleteOneRequestSuccess(id));
    // }
  } catch (err) {
    // console.error(err);
    yield put(deleteOneRequestFail());
  }
}

function* rootSaga() {
  yield all([
    takeLatest(actionTypes.SEND_DATA, sendDataSaga),
    takeLatest(actionTypes.LOAD_DATA, loadDataSaga),
    takeLatest(actionTypes.LOAD_ONE_REQUEST, loadOneRequest),
    takeLatest(actionTypes.DELETE_ONE_REQUEST, deleteOneRequest),
  ]);
}

export default rootSaga;
