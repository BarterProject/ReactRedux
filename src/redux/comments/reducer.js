import {
  FETCH_COMMENTS,
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_FAIL,
  FETCH_COMMENTS_SUCCESS,
} from "./types";

const initialState = {
  items: [],
};
const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default commentsReducer;
