/* reducer */

import {
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
} from "./actiontypes";

const initialState = {
  isLoading: false,
  isError: false,
  data: [],
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
    default: {
      return state;
    }
  }
};
