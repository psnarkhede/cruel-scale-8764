/*reducer*/

import { DELETE_DATA_FROM_CART_ERROR, DELETE_DATA_FROM_CART_LOADING, DELETE_DATA_FROM_CART_SUCCESS, GET_DATA_FOR_CART_ERROR, GET_DATA_FOR_CART_LOADING, GET_DATA_FOR_CART_SUCCESS, POST_DATA_TO_CARTS_SUCCESS, POST_DATA_TO_CART_ERROR, POST_DATA_TO_CART_LOADING } from "./actiontypes"

const initialstate = {
    isLoading:false,
    isError:false,
    cartdata:[]
}

export const cartreducer = (state = initialstate, action) => {
    switch (action.type) {
      case POST_DATA_TO_CART_LOADING: {
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      }

      case POST_DATA_TO_CARTS_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          isError: false,
          cartdata: action.payload,
        };
      }

      case POST_DATA_TO_CART_ERROR: {
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      }

      case GET_DATA_FOR_CART_LOADING: {
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      }

      case GET_DATA_FOR_CART_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          isError: false,
          cartdata: action.payload,
        };
      }

      case GET_DATA_FOR_CART_ERROR: {
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      }

      case DELETE_DATA_FROM_CART_LOADING: {
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      }

      case DELETE_DATA_FROM_CART_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          isError: false,
          cartdata: action.payload,
        };
      }

      case DELETE_DATA_FROM_CART_ERROR: {
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      }

      default: {
        return {
          ...state,
        };
      }
    }
}