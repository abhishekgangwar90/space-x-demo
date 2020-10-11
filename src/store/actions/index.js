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
  fetchResources()
    .then((res) => {
      dispatch({
        type: FETCH_RESOURCE_SUCCESS,
        payload: res,
      });
    })
    .catch((e) => {
      dispatch({
        type: FETCH_RESOURCE_FAILURE,
        payload: e,
      });
    });
};
