/*action*/

import axios from "axios"
import { GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "./actiontypes"




export const getProducts=(payload)=>(dispatch)=>{
    dispatch({type:GET_PRODUCTS_REQUEST})

    return axios.get(" http://localhost:8080/Furniture").then((res)=>{
        dispatch({type:GET_PRODUCTS_SUCCESS,payload:res.data})
        console.log(res.data)
    }).catch((e)=>{
        dispatch({type:GET_PRODUCTS_FAILURE})
    })
}