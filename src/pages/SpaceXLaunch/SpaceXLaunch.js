import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';

import Filters from '../../organisms/Filters/Filters';
import MissionInfo from '../../organisms/MissionInfo/MissionInfo';
import AppHeader from '../../atoms/AppHeader';
import Footer from '../../atoms/Footer';

import { Container, Dashboard, Grid } from './SpaceXLaunchStyles';
import { getFilteredData } from './SpaceXLaunchUtils';

function SpaceXLaunch({ fetchMissionData, history, resources }) {
  const { id } = useParams();

  const [missionData, setMissionData] = React.useState([]);
  const [selectedFilter, setSelectedFilter] = React.useState('');

  useEffect(() => {
    if (resources && resources.length === 0) {
      fetchMissionData();
    }
  }, [fetchMissionData]);

  useEffect(() => {
    setMissionData(resources);
  }, [resources]);

  useEffect(() => {
    setSelectedFilter(id || '');
    if (id) {
      const filterKey = id.split('=')[0];
      let filterValue = id.split('=')[1];

      if (filterValue === 'false' || filterValue === 'true') {
        filterValue = JSON.parse(filterValue);
      } else {
        filterValue = parseInt(filterValue, 10);
      }
      setMissionData(
        getFilteredData(resources, { key: filterKey, value: filterValue })
      );
    }
  }, [id, resources]);

  const renderFilters = () => {
    return <Filters history={history} selectedFilter={selectedFilter} />;
  };

  const renderMissionInfo = () => {
    return <MissionInfo missionData={missionData} />;
  };

  return (
    <Container>
      <AppHeader title="Space-x Launch Schedule" />
      <Dashboard>
        <Grid>
          <div className="column">{renderFilters()}</div>
          <div className="content"> {renderMissionInfo()}</div>
        </Grid>
      </Dashboard>
      <Footer />
    </Container>
  );
}

export default SpaceXLaunch;

SpaceXLaunch.propTypes = {
  resources: PropTypes.arrayOf(Object),
  fetchMissionData: PropTypes.func,
  history: PropTypes.instanceOf(Object).isRequired,
};

SpaceXLaunch.defaultProps = {
  resources: [],
  fetchMissionData: () => {},
};
