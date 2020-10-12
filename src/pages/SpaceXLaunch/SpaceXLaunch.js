import { Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useParams } from 'react-router';

import Filters from '../../organisms/Filters/Filters';
import MissionInfo from '../../organisms/MissionInfo/MissionInfo';
import AppHeader from '../../atoms/AppHeader';
import Footer from '../../atoms/Footer';

import { useStyles } from './SpaceXLaunchStyles';
import { getFilteredData } from './SpaceXLanchUtils';

function SpaceXLaunch({ fetchMissionData, resources }) {
  const classes = useStyles();
  const { id } = useParams();

  const [missionData, setMissionData] = React.useState([]);

  useEffect(() => {
    fetchMissionData();
  }, [fetchMissionData]);

  useEffect(() => {
    setMissionData(resources);
  }, [resources]);

  useEffect(() => {
    // if (id === "all" || resources.length === 0) {
    // fetchData();
    // } else {
    //   let filterKey = id.split("=")[0];
    //   let filterValue = id.split("=")[1];
    //   if (filterValue === "false") {
    //     filterValue = false;
    //   }
    //   if (filterValue === "true") {
    //     filterValue = true;
    //   }
    //   setMissionData(
    //     resources.filter((elm) => {
    //       return elm[filterKey] === filterValue;
    //     })
    //   );
    // }
  }, [id]);

  const handleFilterSelection = (selectedFilter) => {
    setMissionData(getFilteredData(resources, selectedFilter));
  };

  const renderFilters = () => {
    return (
      <Grid xs={12} sm={6} md={3} lg={3} item>
        <Filters onFilterClick={handleFilterSelection} />
      </Grid>
    );
  };

  const renderMissionInfo = () => {
    return (
      <Grid xs={12} sm={6} md={9} lg={9} item>
        <Grid container spacing={2}>
          <MissionInfo missionData={missionData} />
        </Grid>
      </Grid>
    );
  };

  return (
    <div className={classes.container}>
      <AppHeader title="Space-x Launch Schedule" />
      <div className={classes.dashboard}>
        <Grid direction="row" spacing={2} container>
          {renderFilters()}
          {renderMissionInfo()}
        </Grid>
      </div>
      <Footer />
    </div>
  );
}

export default SpaceXLaunch;
