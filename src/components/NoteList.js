import { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Note from './Note';
import AppContext from '../context';

const useStyles = makeStyles((theme) => ({
  list: {
    width: '100%'
  },
  paper: {
    marginTop: theme.spacing(1.5),
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column'
  },
  grid: {
    paddingTop: theme.spacing(2)
  }
}));

const NoteList = () => {
  const { app } = useContext(AppContext);

  const classes = useStyles();

  return (
    <>
      {app.notes.length === 0 ? (
        <Grid item className={classes.grid}>
          <List className={classes.list}>
            <Paper className={classes.paper}>
              <Typography variant='body2' display='block' color='textSecondary'>
                There is no note here.
              </Typography>
            </Paper>
          </List>
        </Grid>
      ) : (
        <Grid item className={classes.grid}>
          <List className={classes.list}>
            {app.notes.map((note) => (
              <Note key={note.id} note={note} />
            ))}
          </List>
        </Grid>
      )}
    </>
  );
};

export { NoteList as default };
