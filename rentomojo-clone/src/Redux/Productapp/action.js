/*action*/

import axios from "axios";
import {
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
} from "./actiontypes";

export const getProducts = () => (dispatch) => {
  dispatch({ type: GET_PRODUCTS_REQUEST });

  return axios
    .get(" http://localhost:3000/furniture")
    .then((res) => {
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: res.data });
    })
    .catch((e) => {
      dispatch({ type: GET_PRODUCTS_FAILURE });
    });
};
