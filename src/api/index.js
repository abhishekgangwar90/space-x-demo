import axios from 'axios';
import https from 'https';
import { appConfig } from '../config/appConfig';

export default axios.create({
  baseURL: appConfig.baseURL,
  withCredentials: false,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
    requestCert: false,
    agent: false,
  }),
});

// https.globalAgent.options.rejectUnauthorized = false;
