import { ADD_TO_LIKE_ERROR, ADD_TO_LIKE_LOADING, ADD_TO_LIKE_SUCCESS, REMOVE_FROM_LIKE_ERROR, REMOVE_FROM_LIKE_LOADING, REMOVE_FROM_LIKE_SUCCESS } from "./actiontype";
import axios from "axios";

export const addtolikeapi = (data) => (dispatch) =>{
    dispatch({type:ADD_TO_LIKE_LOADING})

    axios.post("http://localhost:8080/likeditems",data)
    .then((res) => dispatch({type:ADD_TO_LIKE_SUCCESS,payload:res.data}))
    .then((res) => dispatch({type:ADD_TO_LIKE_ERROR}))

}

export const removefromlikeapi = (id) => (dispatch) => {
  dispatch({ type: REMOVE_FROM_LIKE_LOADING });

  axios
    .delete(`http://localhost:8080/likeditems/${id}`)
    .then(() =>{
        axios.get("http://localhost:8080/likeditems")
        .then((res) => dispatch({type:REMOVE_FROM_LIKE_SUCCESS, payload:res.data}))
        .then(() => dispatch({type:REMOVE_FROM_LIKE_ERROR}))
    } )
};