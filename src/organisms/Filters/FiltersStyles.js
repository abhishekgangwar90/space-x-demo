import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  filterContainer: {
    backgroundColor: 'white',
    padding: theme.spacing(2),
  },
  filter: {
    paddingBottom: '20px',
  },
  filterTitle: {
    display: 'flex',
    flex: '1',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
    marginBottom: '10px',
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#272c34',
    margin: '7% 0 10% 0',
  },
  chipContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  chip: {
    padding: '10px 40px',
    fontSize: '18px',
    color: '#272c34',
    backgroundColor: '#e6e6e6',
    borderRadius: '10px',
    cursor: 'pointer',

    '&.active': {
      color: '#fff',
      backgroundColor: '#272c34',
    },
  },
}));
