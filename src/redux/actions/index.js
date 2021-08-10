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

export function loadDataSuccess(data) {
  return {
    type: actionTypes.LOAD_DATA_SUCCESS,
    data,
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
