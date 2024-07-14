
import {
  GET_GRANTS,
  GET_GRANT,
  ADD_GRANT,
  DELETE_GRANT,
  UPDATE_GRANT,
  GRANT_ERROR,
} from '../actions/types';

const initialState = {
  grants: [],
  grant: null,
  loading: true,
  error: {},
};

const grantReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_GRANTS:
      return {
        ...state,
        grants: payload,
        loading: false,
      };
    case GET_GRANT:
      return {
        ...state,
        grant: payload,
        loading: false,
      };
    case ADD_GRANT:
      return {
        ...state,
        grants: [payload, ...state.grants],
        loading: false,
      };
    case DELETE_GRANT:
      return {
        ...state,
        grants: state.grants.filter((grant) => grant._id !== payload),
        loading: false,
      };
    case UPDATE_GRANT:
      return {
        ...state,
        grants: state.grants.map((grant) =>
          grant._id === payload._id ? payload : grant
        ),
        loading: false,
      };
    case GRANT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default grantReducer;
