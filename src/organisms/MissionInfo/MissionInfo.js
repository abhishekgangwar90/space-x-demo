/* eslint-disable camelcase */
import { Grid } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import MissionCard from '../../molecules/MissionCard';

function MissionInfo({ missionData }) {
  return missionData.map((mission) => {
    const {
      links: { mission_patch_small = '' },
      launch_year = '',
      mission_id = '',
      launch_success = '',
      rocket: {
        first_stage: { cores = [] },
      },
    } = mission;
    return (
      <Grid xs={12} sm={12} md={3} lg={3} item key={mission.flight_number}>
        <MissionCard
          image={mission_patch_small}
          launchYear={launch_year}
          missionId={mission_id}
          successfulLaunch={launch_success}
          successfulLanding={(cores && cores[0].land_success) || 'N/A'}
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
