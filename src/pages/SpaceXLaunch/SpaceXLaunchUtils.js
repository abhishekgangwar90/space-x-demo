/* eslint-disable import/prefer-default-export */

/**
 * Returns filtered Data based on selected Filter values
 * @param {*} resources
 * @param {*} selectedFilter
 */
export const getFilteredData = (resources, selectedFilter) => {
  const tempValue =
    typeof selectedFilter.value !== 'boolean'
      ? `${selectedFilter.value}`
      : selectedFilter.value;

  return selectedFilter.key !== ''
    ? resources.filter((elm) => {
        if (selectedFilter.key === 'land_success') {
          return (
            elm?.rocket?.first_stage?.cores[0]?.land_success ===
            selectedFilter.value
          );
        }
        return elm[selectedFilter.key] === tempValue;
      })
    : resources;
};
