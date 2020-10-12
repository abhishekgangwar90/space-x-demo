/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

import { filterConfig } from './FiltersConfig';
import { useStyles } from './FiltersStyles';

function Filters({ onFilterClick, history }) {
  const config = filterConfig;
  const classes = useStyles();
  const [selectedState, setSelectedState] = React.useState('');

  /**
   * Takes care of toggling the url based on filter click
   * Sends a callback to parent component so data update can be done
   * @param {*} selectedId
   * @param {*} selectedVal
   * @param {*} selectedFilterKey
   */
  const handleFilterToggle = (selectedFilter, selectedFilterKey) => {
    const tempVal =
      selectedState === selectedFilter.id ? '' : selectedFilter.id;
    setSelectedState(tempVal);
    debugger;
    onFilterClick({
      id: tempVal,
      key: tempVal !== '' ? selectedFilterKey : '',
      value: tempVal !== '' ? selectedFilter.value : '',
    });
  };

  const renderFilter = (elm, filterKey) => {
    return (
      <Grid container spacing={1}>
        {elm.values.map((val) => {
          return (
            <Grid key={val.id} xs={6} item className={classes.chipContainer}>
              <div
                className={`${classes.chip} ${
                  selectedState === val.id ? 'active' : ''
                }`}
                size="medium"
                color="default"
                onClick={() => handleFilterToggle(val, filterKey)}
              >
                {`${val.value}`}
              </div>
            </Grid>
          );
        })}
      </Grid>
    );
  };

  return (
    <Grid container className={classes.filterContainer}>
      {config.filterValues.map((elm) => {
        return (
          <Grid className={classes.filter} container key={elm.id}>
            <div className={classes.filterTitle}>{elm.title}</div>
            {renderFilter(elm, elm.filterKey)}
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Filters;

Filters.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
  onFilterClick: PropTypes.func.isRequired,
};
