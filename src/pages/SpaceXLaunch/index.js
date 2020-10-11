import { connect } from 'react-redux';
import SpaceXLaunch from './SpaceXLaunch';
import { fetchMissionData } from '../../store/actions';

const mapStateToProps = (state) => {
  return {
    resources: state.missionData || [],
  };
};

const dispatchActions = {
  fetchMissionData,
};

export const loadMissionData = (store) => {
  return store.dispatch(fetchMissionData());
};
export default connect(mapStateToProps, dispatchActions)(SpaceXLaunch);
