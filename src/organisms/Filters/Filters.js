/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { Grid } from '@material-ui/core';

import { filterConfig } from './FiltersConfig';
import { useStyles } from './FiltersStyles';

function Filters({ onFilterClick }) {
  const config = filterConfig;
  const classes = useStyles();
  const [selectedState, setSelectedState] = React.useState('');

  const handleFilterToggle = (selectedId, selectedVal, selectedFilterKey) => {
    const tempVal = selectedState === selectedId ? '' : selectedId;
    setSelectedState(tempVal);
    onFilterClick({
      id: tempVal,
      key: tempVal !== '' ? selectedFilterKey : '',
      value: tempVal !== '' ? selectedVal : '',
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
                onClick={() => handleFilterToggle(val.id, val.value, filterKey)}
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
