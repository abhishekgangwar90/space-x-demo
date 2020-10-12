/* eslint-disable import/prefer-default-export */
import axios from './index';

export const fetchResources = async (url) => {
  try {
    const response = await axios.get(url);
    return response;
  } catch (e) {
    console.log('error inside Fetch', e);
  }
};
