import React from 'react';

import PropTypes from 'prop-types';
import { CardContainer } from './cardStyles';

function MissionCard({
  image,
  launchYear,
  missionId,
  successfulLaunch,
  successfulLanding,
}) {
  return (
    <CardContainer>
      <div>
        <img src={image} alt="mission" />
      </div>
      <div className="mission-details">
        <div className="text-container">
          <span>Mission Ids :</span>
          {(missionId && missionId.length > 0 && missionId.join('')) || 'N/A'}
        </div>
        <div className="text-container">
          <span>Launch Year : </span>
          {launchYear}
        </div>
        <div className="text-container">
          <span>Successful Launch: </span>
          {`${successfulLaunch}`}
        </div>
        <div className="text-container">
          <span>Successful Landing:</span>
          {`${successfulLanding === null ? 'N/A' : successfulLanding}`}
        </div>
      </div>
    </CardContainer>
  );
}

export default MissionCard;

MissionCard.propTypes = {
  image: PropTypes.string,
  launchYear: PropTypes.string,
  missionId: PropTypes.arrayOf(String),
  successfulLaunch: PropTypes.bool,
  successfulLanding: PropTypes.bool,
};

MissionCard.defaultProps = {
  image: '',
  launchYear: '',
  missionId: [],
  successfulLaunch: false,
  successfulLanding: false,
};
