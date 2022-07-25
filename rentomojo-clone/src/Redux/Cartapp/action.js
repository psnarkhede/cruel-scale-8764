import axios from "axios";
import {
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

export const addCartItem = () => (dispatch) => {
  dispatch({ type: POST_DATA_TO_CART_LOADING });
  return axios
    .get("https://rento-mojo-masai.herokuapp.com/cartitems")
    .then((r) =>
      dispatch({ type: POST_DATA_TO_CARTS_SUCCESS, payload: r.data })
    )
    .catch((e) => dispatch({ type: POST_DATA_TO_CART_ERROR, payload: e }));

  // return {type:POST_DATA_TO_CARTS_SUCCESS}
};
