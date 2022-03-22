import {
  FETCH_COMMENTS,
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_FAIL,
  FETCH_COMMENTS_SUCCESS,
} from "./types";

export const fetchCommentsSuccess = (comments) => {
  return {
    type: FETCH_COMMENTS_SUCCESS,
    payload: comments,
  };
};
export const fetchCommentsFailure = (error) => {
  return {
    type: FETCH_COMMENTS_FAIL,
    payload: error,
  };
};
export const fetchCommentsRequest = () => {
  return {
    type: FETCH_COMMENTS_REQUEST,
  };
};

export const fetchComments = () => {
  return (dispatch) => {
    dispatch(fetchCommentsRequest);
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((comments) => dispatch(fetchCommentsSuccess(comments)))
      .catch((error) => dispatch(fetchCommentsFailure(error)));
  };
};
