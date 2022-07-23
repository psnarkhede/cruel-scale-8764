/* reducer */

import {
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_SINGLEPRODUCT_ERROR,
  GET_SINGLEPRODUCT_LOADING,
  GET_SINGLEPRODUCT_SUCCESS,
} from "./actiontypes";

const initialState = {
  isLoading: false,
  isError: false,
  data: [],
  newproduct:[]
};
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case GET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        data: payload,
        isLoading: false,
      };
    }

    case GET_PRODUCTS_FAILURE: {
      return {
        ...state,
        isError: true,
      };
    }

    case GET_SINGLEPRODUCT_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case GET_SINGLEPRODUCT_SUCCESS: {

      return {
        ...state,
        isLoading: false,
        isError: false,
        newproduct: payload,
      };
    }

    case GET_SINGLEPRODUCT_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    default: {
      return state;
    }
  }
};
