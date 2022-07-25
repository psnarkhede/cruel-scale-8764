import {
  ADD_TO_LIKE_ERROR,
  ADD_TO_LIKE_LOADING,
  ADD_TO_LIKE_SUCCESS,
  GET_FROM_LIKE_ERROR,
  GET_FROM_LIKE_LOADING,
  GET_FROM_LIKE_SUCCESS,
  REMOVE_FROM_LIKE_ERROR,
  REMOVE_FROM_LIKE_LOADING,
  REMOVE_FROM_LIKE_SUCCESS,
} from "./actiontype";
import axios from "axios";

export const getlikeitemapi = () => (dispatch) => {
  dispatch({ type: GET_FROM_LIKE_LOADING });

  axios
    .get("https://rento-mojo-masai.herokuapp.com/likeditems")
    .then((res) => dispatch({ type: GET_FROM_LIKE_SUCCESS, payload: res.data }))
    .then(() => dispatch({ type: GET_FROM_LIKE_ERROR }));
};

export const addtolikeapi = (data) => (dispatch) => {
  dispatch({ type: ADD_TO_LIKE_LOADING });

  axios
    .post("https://rento-mojo-masai.herokuapp.com/likeditems", data)
    .then(() => {
      axios
        .get("https://rento-mojo-masai.herokuapp.com/likeditems")
        .then((res) =>
          dispatch({ type: ADD_TO_LIKE_SUCCESS, payload: res.data })
        )
        .then(() => dispatch({ type: ADD_TO_LIKE_ERROR }));
    });
};

export const removefromlikeapi = (id) => (dispatch) => {
  dispatch({ type: REMOVE_FROM_LIKE_LOADING });

  axios
    .delete(`https://rento-mojo-masai.herokuapp.com/likeditems/${id}`)
    .then(() => {
      axios
        .get("https://rento-mojo-masai.herokuapp.com/likeditems")
        .then((res) =>
          dispatch({ type: REMOVE_FROM_LIKE_SUCCESS, payload: res.data })
        )
        .then(() => dispatch({ type: REMOVE_FROM_LIKE_ERROR }));
    });
};
