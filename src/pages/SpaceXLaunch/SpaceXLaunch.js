import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router';

import Filters from '../../organisms/Filters/Filters';
import MissionInfo from '../../organisms/MissionInfo/MissionInfo';
import AppHeader from '../../atoms/AppHeader';
import Footer from '../../atoms/Footer';

import { Container, Dashboard, Grid } from './SpaceXLaunchStyles';
import { getFilteredData } from './SpaceXLaunchUtils';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const getQueryParams = (paramDetails) => {
  const firstIterator = paramDetails.entries().next();
  if (firstIterator && firstIterator.value && firstIterator.value.length > 0) {
    return `${firstIterator.value[0]}=${firstIterator.value[1]}`;
  }
  return '';
};

function SpaceXLaunch({ fetchMissionData, history, resources }) {
  // const { id } = useParams();
  const paramDetails = useQuery();
  const queryParams = getQueryParams(paramDetails);

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
    setSelectedFilter(queryParams);
    if (queryParams) {
      const filterKey = queryParams.split('=')[0];
      let filterValue = queryParams.split('=')[1];

      if (filterValue === 'false' || filterValue === 'true') {
        filterValue = JSON.parse(filterValue);
      } else {
        filterValue = parseInt(filterValue, 10);
      }
      setMissionData(
        getFilteredData(resources, { key: filterKey, value: filterValue })
      );
    } else {
      setMissionData(resources);
    }
  }, [queryParams, resources]);

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
