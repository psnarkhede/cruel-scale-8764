/*action*/

import axios from "axios";
import {
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
} from "./actiontypes";

export const getProducts = (category) => (dispatch) => {
  dispatch({ type: GET_PRODUCTS_REQUEST });

  return axios
    .get(` http://localhost:8080/${category}`)
    .then((res) => {
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: res.data });
    })
    .catch((e) => {
      dispatch({ type: GET_PRODUCTS_FAILURE });
    });
};
