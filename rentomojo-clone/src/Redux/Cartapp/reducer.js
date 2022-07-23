/*reducer*/

import { POST_DATA_TO_CARTS_SUCCESS, POST_DATA_TO_CART_ERROR, POST_DATA_TO_CART_LOADING } from "./actiontypes"

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
          cartdata:action.payload
        };
      }

      case POST_DATA_TO_CART_ERROR: {
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