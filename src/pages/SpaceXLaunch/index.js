import { connect } from 'react-redux';
import SpaceXLaunch from './SpaceXLaunch';
import { fetchMissionData } from '../../store/actions';

const mapStateToProps = ({ missionData }) => {
  const { data = [] } = missionData;
  return {
    resources: data,
  };
};

const dispatchActions = {
  fetchMissionData,
};

export const loadMissionData = (store, queryParams) => {
  const url = Object.keys(queryParams)
    .map((key) => `${key}=${queryParams[key]}`)
    .join('');
  return store.dispatch(fetchMissionData(url));
};
export default connect(mapStateToProps, dispatchActions)(SpaceXLaunch);
