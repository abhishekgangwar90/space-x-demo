/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

import { filterConfig } from './FiltersConfig';
import { FilterContainer, FilterContent, CustomLink } from './FiltersStyles';

function Filters({ selectedFilter }) {
  const config = filterConfig;

  /**
   * Renders Filters based on the config provided
   * @param {*} elm
   */
  const renderFilter = (elm) => {
    return (
      <div className="filter-row">
        {elm.values.map((val) => {
          return (
            <div key={val.id} className="filter">
              <CustomLink
                isActive={selectedFilter === val.link}
                to={selectedFilter === val.link ? '' : val.link}
              >
                {`${val.value}`}
              </CustomLink>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <FilterContainer>
      {config.filterValues.map((elm) => {
        return (
          <FilterContent key={elm.id}>
            <div className="title">{elm.title}</div>
            {renderFilter(elm, elm.filterKey)}
          </FilterContent>
        );
      })}
    </FilterContainer>
  );
}

export default Filters;

Filters.propTypes = {
  selectedFilter: PropTypes.string.isRequired,
};
