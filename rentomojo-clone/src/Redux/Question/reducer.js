import { DELETE_QUESTION_ERROR, DELETE_QUESTION_LOADING, DELETE_QUESTION_SUCCESS, GET_QUESTION_ERROR, GET_QUESTION_LOADING, GET_QUESTION_SUCCESS, POST_QUESTION_ERROR, POST_QUESTION_LOADING, POST_QUESTION_SUCCESS } from "./actiontype"

let initialstate = {
    isLoading:false,
    questions:[],
    isError:false
}

export const questionreducer = (state=initialstate, action) => {
    switch (action.type) {
      case GET_QUESTION_LOADING: {
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      }

      case GET_QUESTION_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          questions: action.payload,
          isError: false,
        };
      }

      case GET_QUESTION_ERROR: {
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      }

      case POST_QUESTION_LOADING: {
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      }

      case POST_QUESTION_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          questions: action.payload,
          isError: false,
        };
      }

      case POST_QUESTION_ERROR: {
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      }

      case DELETE_QUESTION_LOADING: {
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      }

      case DELETE_QUESTION_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          questions: action.payload,
          isError: false,
        };
      }

      case DELETE_QUESTION_ERROR: {
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