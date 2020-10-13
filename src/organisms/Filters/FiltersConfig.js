/* eslint-disable import/prefer-default-export */
export const filterConfig = {
  title: 'Select Filter',
  filterValues: [
    {
      id: 1,
      title: 'Launch Year',
      filterKey: 'launch_year',
      values: [
        { id: 0, value: 2006, link: '?launch_year=2006' },
        { id: 1, value: 2007, link: '?launch_year=2007' },
        { id: 2, value: 2008, link: '?launch_year=2008' },
        { id: 3, value: 2009, link: '?launch_year=2009' },
        { id: 4, value: 2010, link: '?launch_year=2010' },
        { id: 5, value: 2011, link: '?launch_year=2011' },
        { id: 6, value: 2012, link: '?launch_year=2012' },
        { id: 7, value: 2013, link: '?launch_year=2013' },
        { id: 8, value: 2014, link: '?launch_year=2014' },
        { id: 9, value: 2015, link: '?launch_year=2015' },
        { id: 10, value: 2016, link: '?launch_year=2016' },
        { id: 11, value: 2017, link: '?launch_year=2017' },
        { id: 12, value: 2018, link: '?launch_year=2018' },
        { id: 13, value: 2019, link: '?launch_year=2019' },
        { id: 14, value: 2020, link: '?launch_year=2020' },
      ],
    },
    {
      id: 2,
      title: 'Successful Launch',
      filterKey: 'launch_success',
      values: [
        {
          id: 15,
          value: true,
          link: '?launch_success=true',
        },
        {
          id: 16,
          value: false,
          link: '?launch_success=false',
        },
      ],
    },
    {
      id: 3,
      title: 'Successful Landing',
      filterKey: 'land_success',
      values: [
        {
          id: 17,
          value: true,
          link: '?land_success=true',
        },
        {
          id: 18,
          value: false,
          link: '?land_success=false',
        },
      ],
    },
  ],
};
