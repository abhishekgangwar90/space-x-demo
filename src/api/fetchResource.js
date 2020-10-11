/* eslint-disable import/prefer-default-export */
import axios from './index';

export const fetchResources = async () => {
  try {
    const response = await axios.get(`launches?limit=100`);
    return response;
  } catch (e) {
    console.log('error inside Fetch', e);
  }
};
