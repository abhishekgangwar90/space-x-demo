import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { CardContainer } from './cardStyles';

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function MissionCard({
  image,
  launchYear,
  missionId,
  successfulLaunch,
  successfulLanding,
}) {
  const classes = useStyles();
  return (
    <CardContainer className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image || ''}
          title="mission image"
        />
        <CardContent>
          <Typography gutterBottom variant="subtitle1">
            Mission Ids :
            {(missionId && missionId.length > 0 && missionId.join('')) || 'N/A'}
          </Typography>
          <Typography variant="subtitle1">
            Launch Year : {launchYear}
          </Typography>
          <Typography gutterBottom variant="subtitle1">
            Successful Launch: {`${successfulLaunch}`}
          </Typography>
          <Typography gutterBottom variant="subtitle1">
            Successful Landing: {`${successfulLanding}`}
          </Typography>
        </CardContent>
      </CardActionArea>
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
