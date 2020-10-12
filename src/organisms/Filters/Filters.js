/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

import { filterConfig } from './FiltersConfig';
import { useStyles, CustomLink } from './FiltersStyles';

function Filters({ selectedFilter }) {
  const config = filterConfig;
  const classes = useStyles();

  /**
   * Renders Filters based on the config provided
   * @param {*} elm
   */
  const renderFilter = (elm) => {
    return (
      <Grid container spacing={1}>
        {elm.values.map((val) => {
          return (
            <Grid key={val.id} xs={6} item className={classes.chipContainer}>
              <CustomLink
                isActive={selectedFilter === val.link}
                to={selectedFilter ? '' : val.link}
              >
                {`${val.value}`}
              </CustomLink>
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
  selectedFilter: PropTypes.string.isRequired,
};
