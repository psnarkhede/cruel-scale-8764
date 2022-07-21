/* reducer */

import { GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "./actiontypes"





const initialState={
    data:[],
    isLoading:false,
    isError:false,

}

export const reducer=(state=initialState,{type,payload})=>{


    switch(type)
    {   

        case GET_PRODUCTS_REQUEST:{
            return {
                ...state,isLoading:true
            }
        }

        case GET_PRODUCTS_SUCCESS:{
            return{
                ...state, isLoading:false,data:payload
            }
        }
        case GET_PRODUCTS_FAILURE:{
            return{
                ...state,isLoading:false,isError:true
            }
        }
        default:{
            return state
        }
    }
}