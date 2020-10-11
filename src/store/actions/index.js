/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { fetchResources } from '../../api/fetchResource';
// import { fetchResources } from '../../api/fetchResource';
import {
  FETCH_RESOURCE,
  FETCH_RESOURCE_FAILURE,
  FETCH_RESOURCE_SUCCESS,
} from '../constants';

export const fetchMissionData = () => async (dispatch) => {
  try {
    const res = await fetchResources('launches?limit=100');
    dispatch({
      type: FETCH_RESOURCE,
      payload: res,
    });
  } catch (e) {
    console.log('inside action ', e);
  }
};
