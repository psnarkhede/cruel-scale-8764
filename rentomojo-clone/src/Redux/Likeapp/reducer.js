import {
  ADD_TO_LIKE_ERROR,
  ADD_TO_LIKE_LOADING,
  ADD_TO_LIKE_SUCCESS,
  GET_FROM_LIKE_ERROR,
  GET_FROM_LIKE_LOADING,
  GET_FROM_LIKE_SUCCESS,
  REMOVE_FROM_LIKE_ERROR,
  REMOVE_FROM_LIKE_LOADING,
} from "./actiontype";

const initialstate = {
  isLoading: false,
  isError: false,
  likeditems: [],
};

export const likereducer = (state = initialstate, action) => {
  switch (action.type) {
    case GET_FROM_LIKE_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case GET_FROM_LIKE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        likeditems: action.payload,
      };
    }

    case GET_FROM_LIKE_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case ADD_TO_LIKE_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case ADD_TO_LIKE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        likeditems: action.payload,
      };
    }

    case ADD_TO_LIKE_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case REMOVE_FROM_LIKE_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case REMOVE_FROM_LIKE_LOADING: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        likeditems: action.payload,
      };
    }

    case REMOVE_FROM_LIKE_ERROR: {
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
};
