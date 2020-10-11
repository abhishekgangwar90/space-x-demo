import { Grid } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import MissionCard from '../../molecules/MissionCard';

function MissionInfo({ missionData }) {
  return missionData.map((mission) => {
    return (
      <Grid xs={12} sm={12} md={3} lg={3} item key={mission.flight_number}>
        <MissionCard
          image={mission?.links?.mission_patch_small}
          launchYear={mission?.launch_year}
          missionId={mission?.mission_id}
          successfulLaunch={`${mission?.launch_success}`}
          successfulLanding={`${mission?.launch_landing || 'N/A'}`}
        />
      </Grid>
    );
  });
}

MissionInfo.defaultProps = {
  missionData: [],
};

MissionInfo.propsTypes = {
  missionData: PropTypes.arrayOf(Object),
};

export default MissionInfo;
