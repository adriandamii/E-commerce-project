import { GET_ERRORS } from "../constants/userConstants";

const initialState = {};

const errorReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;
    default:
      return state;
  }
}

export default errorReducers;


