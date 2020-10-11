/* eslint-disable import/prefer-default-export */
import axios from './index';

export const fetchResources = async () => {
  const response = await axios.get(`launches?limit=100`);
  return response;
};
