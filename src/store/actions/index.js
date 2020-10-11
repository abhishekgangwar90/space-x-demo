/* eslint-disable import/prefer-default-export */
import { fetchResources } from '../../api/fetchResource';
import {
  FETCH_RESOURCE,
  FETCH_RESOURCE_FAILURE,
  FETCH_RESOURCE_SUCCESS,
} from '../constants';

export const fetchMissionData = () => async (dispatch) => {
  dispatch({
    type: FETCH_RESOURCE,
  });
  try {
    const res = await fetchResources('launches?limit=100');
    dispatch({
      type: FETCH_RESOURCE_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: FETCH_RESOURCE_FAILURE,
      payload: { error: e },
    });
  }
};
