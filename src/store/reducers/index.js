import { combineReducers } from 'redux';
import { missionReducers } from './missionReducer';

export default combineReducers({
  missionData: missionReducers,
});
