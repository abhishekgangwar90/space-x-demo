import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
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
    <Card className={classes.root}>
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
    </Card>
  );
}

export default MissionCard;
