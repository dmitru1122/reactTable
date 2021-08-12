import actionTypes from './actionTypes';

export function failure(error) {
  return {
    type: actionTypes.FAILURE,
    error,
  };
}

export function loadData() {
  return { type: actionTypes.LOAD_DATA };
}

export function loadDataSuccess(data, id) {
  return {
    type: actionTypes.LOAD_DATA_SUCCESS,
    data,
    id,
  };
}

export function sendData(data) {
  return {
    type: actionTypes.SEND_DATA,
    data,
  };
}

export function sendDataSuccess(data) {
  return {
    type: actionTypes.SEND_DATA_SUCCESS,
    data,
  };
}

export function loadOneRequest(id) {
  return { type: actionTypes.LOAD_ONE_REQUEST, id };
}

export function loadOneRequestSuccess(data, id) {
  return {
    type: actionTypes.LOAD_ONE_REQUEST_SUCCESS,
    data,
    id,
  };
}

export function deleteOneRequest(id) {
  return { type: actionTypes.DELETE_ONE_REQUEST, id };
}
export function deleteOneRequestReset() {
  return { type: actionTypes.DELETE_ONE_REQUEST_RESET };
}

export function deleteOneRequestSuccess(id) {
  return { type: actionTypes.DELETE_ONE_REQUEST_SUCCESS, id };
}
export function deleteOneRequestFail() {
  return { type: actionTypes.DELETE_ONE_REQUEST_FAIL };
}
