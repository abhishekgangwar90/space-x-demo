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

export const missionReducers = (state = [], action) => {
  switch (action.type) {
    case FETCH_RESOURCE: {
      return action.payload.data;
    }

    case FETCH_RESOURCE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: action.payload.data,
      };
    }

    case FETCH_RESOURCE_FAILURE: {
      return 'Error Came';
    }

    default:
      return state;
  }
};
