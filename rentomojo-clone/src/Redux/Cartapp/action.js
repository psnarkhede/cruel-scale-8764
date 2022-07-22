import axios from "axios"
import { POST_DATA_TO_CARTS_SUCCESS, POST_DATA_TO_CART_ERROR, POST_DATA_TO_CART_LOADING } from "./actiontypes"

/*action*/
export const postdatatocartapi = (data) => (dispatch) => {
    dispatch({type:POST_DATA_TO_CART_LOADING})

    axios.post("http://localhost:8080/cartitems",data)
    .then(() => {
        axios.get("http://localhost:8080/cartitems")
        .then((res) => dispatch({type:POST_DATA_TO_CARTS_SUCCESS, payload:res.data}))
        .then(() => dispatch({type:POST_DATA_TO_CART_ERROR}))
    })
}