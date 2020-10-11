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

export const loadMissionData = () => {
  console.log('basic setup');
};
export default connect(mapStateToProps, dispatchActions)(SpaceXLaunch);
