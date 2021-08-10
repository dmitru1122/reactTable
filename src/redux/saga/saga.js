import { all, put, takeLatest, delay } from 'redux-saga/effects';
// import { all, call, put, takeLatest } from 'redux-saga/effects';

import { failure, loadDataSuccess, sendDataSuccess } from '../actions/index';
import actionTypes from '../actions/actionTypes';
// fake
import { headerData, rowData } from '../../fakeDb/sampleData';
// fake

function* loadDataSaga() {
  try {
    // const { status, data } = yield call(fetch('https://simple-blog-api.crew.red/posts'));
    yield delay(3000);
    const data = { headerData, rowData };
    console.log(data);
    yield put(loadDataSuccess(data));
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

function* rootSaga() {
  yield all([takeLatest(actionTypes.SEND_DATA, sendDataSaga), takeLatest(actionTypes.LOAD_DATA, loadDataSaga)]);
}

export default rootSaga;
