/* eslint-disable import/prefer-default-export */
import { fetchResources } from '../../api/fetchResource';
import {
  FETCH_RESOURCE,
  FETCH_RESOURCE_FAILURE,
  FETCH_RESOURCE_SUCCESS,
} from '../constants';

export const fetchMissionData = (url) => async (dispatch) => {
  dispatch({
    type: FETCH_RESOURCE,
  });
  try {
    const res = await fetchResources(`launches?limit=4${url ? `&${url}` : ''}`);
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
