import { all, put, takeLatest, delay } from 'redux-saga/effects';
// import { all, call, put, takeLatest } from 'redux-saga/effects';

import {
  failure,
  loadDataSuccess,
  loadOneRequestSuccess,
  deleteOneRequestSuccess,
  deleteOneRequestFail,
  editOneRequestSuccess,
  editOneRequestFail,
  addOneRequestSuccess,
  addOneRequestFail,
} from '../actions/index';
import actionTypes from '../actions/actionTypes';
// fake
import { getDBFull, getOne, addOne, deleteOne, editOne } from '../../fakeDb/sampleData';
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

function* addOneRequest(form) {
  const { data } = form;
  try {
    // const { status } = yield fetch(`https://simple-blog-api.crew.red/posts`, {
    //   method: 'POST',
    //   mode: 'cors',
    //   body: JSON.stringify(form.data),
    // });
    // if (status === 201) {
    //   yield put(sendDataSuccess(true));
    // }
    const { dataRes } = addOne(data);
    yield put(addOneRequestSuccess(dataRes));
  } catch (error) {
    yield put(addOneRequestFail(false));
  }
}

function* deleteOneRequest(params) {
  const { id } = params;
  try {
    // const { status, data } = yield call(fetch('https://simple-blog-api.crew.red/posts'));
    yield delay(1000);
    // yield fetch(`https://simple-blog-apisdfsdf.crew.red/posts`);
    deleteOne(id);
    yield put(deleteOneRequestSuccess(id));
    // }
  } catch (err) {
    // console.error(err);
    yield put(deleteOneRequestFail());
  }
}
function* editOneRequest(params) {
  const { data, id } = params;
  try {
    // const { status, data } = yield call(fetch('https://simple-blog-api.crew.red/posts'));
    yield delay(1000);
    // yield fetch(`https://simple-blog-apisdfsdf.crew.red/posts`);
    const resData = editOne(data, id);
    yield put(editOneRequestSuccess(resData, id));
    // }
  } catch (err) {
    console.error(err);
    yield put(editOneRequestFail());
  }
}

function* rootSaga() {
  yield all([
    takeLatest(actionTypes.ADD_ONE_REQUEST, addOneRequest),
    takeLatest(actionTypes.LOAD_DATA, loadDataSaga),
    takeLatest(actionTypes.LOAD_ONE_REQUEST, loadOneRequest),
    takeLatest(actionTypes.DELETE_ONE_REQUEST, deleteOneRequest),
    takeLatest(actionTypes.EDIT_ONE_REQUEST, editOneRequest),
  ]);
}

export default rootSaga;
