import {
  FETCH_COMMENTS,
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_FAIL,
  FETCH_COMMENTS_SUCCESS,
} from "./types";

const fetchComments = () => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/comments");
  };
};
