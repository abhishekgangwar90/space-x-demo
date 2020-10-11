/* eslint-disable import/prefer-default-export */
import {
  FETCH_RESOURCE,
  FETCH_RESOURCE_FAILURE,
  FETCH_RESOURCE_SUCCESS,
} from '../constants';

const initialState = {
  isLoading: false,
  data: [],
  error: null,
};

export const missionReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RESOURCE: {
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    }
    case FETCH_RESOURCE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    }

    case FETCH_RESOURCE_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    }

    default:
      return state;
  }
};
