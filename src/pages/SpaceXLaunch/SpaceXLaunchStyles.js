import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  dashboard: {
    minHeight: 'inherit',
    padding: theme.spacing(2),
  },
  container: {
    flexGrow: 1,
    minHeight: 'inherit',
    width: '100%',
    backgroundColor: '#e6e6e6',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
