import { all, put, takeLatest, delay } from 'redux-saga/effects';
// import { all, call, put, takeLatest } from 'redux-saga/effects';

import {
  failure,
  loadDataSuccess,
  loadOneRequestSuccess,
  deleteOneRequestSuccess,
  deleteOneRequestFail,
  // editOneRequestSuccess,
  editOneRequestFail,
  // addOneRequestSuccess,
  addOneRequestFail,
} from '../actions/index';
import actionTypes from '../actions/actionTypes';
// fake
import { getDBFull, getOne, addOne, deleteOne, editOne } from './methods';
// fake

function* reloadDB() {
  const data = yield getDBFull();
  yield put(loadDataSuccess(data));
}

function* loadDataSaga() {
  try {
    // const { status, data } = yield call(fetch('https://simple-blog-api.crew.red/posts'));
    yield delay(2000);
    yield reloadDB();
    // const data = yield getDBFull();
    // yield put(loadDataSuccess());
    // }
  } catch (err) {
    yield put(failure(err));
  }
}

function* loadOneRequest(params) {
  const { id } = params;
  try {
    yield delay(2000);
    const data = getOne(id);
    yield put(loadOneRequestSuccess(data, id));
  } catch (err) {
    yield put(failure(err));
  }
}

function* addOneRequest(form) {
  const { data } = form;
  try {
    yield addOne(data);
    yield reloadDB();
  } catch (error) {
    console.error(error);
    yield put(addOneRequestFail(false));
  }
}

function* deleteOneRequest(params) {
  const { id } = params;
  try {
    yield delay(1000);
    deleteOne(id);
    yield reloadDB();
    yield put(deleteOneRequestSuccess());
    // }
  } catch (err) {
    // console.error(err);
    yield put(deleteOneRequestFail());
  }
}
function* editOneRequest(params) {
  const { data, id } = params;
  try {
    yield delay(1000);
    yield editOne(data, id);
    // reload fullRequestInfo, without this action after edit we have old data in redux
    const dataResponse = getOne(id);
    yield put(loadOneRequestSuccess(dataResponse, id));
    yield reloadDB();
  } catch (err) {
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
