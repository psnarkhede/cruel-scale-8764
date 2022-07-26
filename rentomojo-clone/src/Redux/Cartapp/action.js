import axios from "axios";
import {
  DELETE_DATA_FROM_CART_ERROR,
  DELETE_DATA_FROM_CART_LOADING,
  DELETE_DATA_FROM_CART_SUCCESS,
  GET_DATA_FOR_CART_ERROR,
  GET_DATA_FOR_CART_LOADING,
  GET_DATA_FOR_CART_SUCCESS,
  POST_DATA_TO_CARTS_SUCCESS,
  POST_DATA_TO_CART_ERROR,
  POST_DATA_TO_CART_LOADING,
} from "./actiontypes";

/*action*/
export const postdatatocartapi = (data) => (dispatch) => {
  dispatch({ type: POST_DATA_TO_CART_LOADING });
  console.log("data", data);
  axios
    .post("https://rento-mojo-masai.herokuapp.com/cartitems", data)
    .then(() => {
      axios
        .get("https://rento-mojo-masai.herokuapp.com/cartitems")
        .then((res) =>
          dispatch({ type: POST_DATA_TO_CARTS_SUCCESS, payload: res.data })
        )
        .catch(() => dispatch({ type: POST_DATA_TO_CART_ERROR }));
    });
};

// add cart item data

export const getdataforcartapi = () => (dispatch) => {
  dispatch({ type: GET_DATA_FOR_CART_LOADING });
 
  axios
    .get("https://rento-mojo-masai.herokuapp.com/cartitems")
    .then((res) =>
      dispatch({ type: GET_DATA_FOR_CART_SUCCESS, payload: res.data })
    )
    .catch((e) => dispatch({ type: GET_DATA_FOR_CART_ERROR, payload: e }));

  // return {type:POST_DATA_TO_CARTS_SUCCESS}
};

export const deletecartitemapi = (id) => (dispatch) => {
  dispatch({type:DELETE_DATA_FROM_CART_LOADING})

  axios.delete(`https://rento-mojo-masai.herokuapp.com/cartitems/${id}`)
  .then((res) => {
    axios
      .get("https://rento-mojo-masai.herokuapp.com/cartitems")
      .then((res) =>
        dispatch({ type: DELETE_DATA_FROM_CART_SUCCESS, payload: res.data })
      )
      .catch((e) => dispatch({ type: DELETE_DATA_FROM_CART_ERROR, payload: e }));
  })
}
