import { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Note from './Note';
import NotesContext from '../context/notes-context';

const useStyles = makeStyles((theme) => ({
  list: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column'
  },
  grid: {
    paddingTop: theme.spacing(3)
  },
  depositContext: {
    flex: 1
  }
}));

const NoteList = () => {
  const { notes } = useContext(NotesContext);

  const classes = useStyles();

  return (
    <Grid item className={classes.grid}>
      <Paper className={classes.paper}>
        {notes.length === 0 ? (
          <div>
            <Typography component='p' variant='h4'>
              Empty
            </Typography>
            <Typography
              color='textSecondary'
              className={classes.depositContext}>
              There is no note here
            </Typography>
          </div>
        ) : (
          <List className={classes.list}>
            {notes.map((note, index) =>
              index === 0 ? (
                <Note key={note.id} note={note} />
              ) : (
                <>
                  <Divider variant='inset' component='li' />
                  <Note key={note.id} note={note} />
                </>
              )
            )}
          </List>
        )}
      </Paper>
    </Grid>
  );
};

export { NoteList as default };