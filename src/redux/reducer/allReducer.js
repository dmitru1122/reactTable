import actionTypes from '../actions/actionTypes';

export const exampleInitialState = {
  error: null,
  lastUpdate: 0,
  requestData: { headerData: null, rowData: null },
  placeholderData: null,
  sendDataSuccess: null,
};

const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    // case HYDRATE:
    //   return { ...state, ...action.payload };

    case actionTypes.FAILURE:
      return {
        ...state,
        ...{ error: action.error },
      };

    case actionTypes.LOAD_DATA_SUCCESS:
      return {
        ...state,
        ...{ requestData: action.data },
        ...{ lastUpdate: state.lastUpdate + 1 },
      };
    case actionTypes.SEND_DATA_SUCCESS:
      return {
        ...state,
        ...{ sendDataSuccess: action.data },
      };

    default:
      return state;
  }
};

export default reducer;
