import { Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { fetchResources } from '../../api/fetchResource';

import Filters from '../../organisms/Filters/Filters';
import MissionInfo from '../../organisms/MissionInfo/MissionInfo';
import AppHeader from '../../atoms/AppHeader';
import Footer from '../../atoms/Footer';

import { useStyles } from './SpaceXLaunchStyles';

function SpaceXLaunch({ title }) {
  const classes = useStyles();
  let { id } = useParams();

  const [resources, updateState] = React.useState([]);
  const [missionData, setMissionData] = React.useState([]);

  const fetchData = async () => {
    const response = await fetchResources('launches?limit=100');
    updateState(response.data);
    setMissionData(response.data);
  };

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
    setMissionData(
      selectedFilter.key !== ''
        ? resources.filter((elm) => {
            return elm[selectedFilter.key] === `${selectedFilter.value}`;
          })
        : resources
    );
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
      <AppHeader title={'Space-x Launch Schedule'} />
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
