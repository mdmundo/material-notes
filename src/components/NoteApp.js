import { useEffect, useReducer } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import EventNoteIcon from '@material-ui/icons/EventNote';
import Typography from '@material-ui/core/Typography';
import notesReducer from '../reducers/notes';
import NotesContext from '../context/notes-context';
import NoteList from './NoteList';
import AddNoteForm from './AddNoteForm';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2)
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  upper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}));

const NoteApp = () => {
  const [notes, dispatch] = useReducer(notesReducer, []);

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('notes'));

    if (notes) {
      dispatch({ type: 'POPULATE_NOTES', notes });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const classes = useStyles();

  return (
    <NotesContext.Provider value={{ notes, dispatch }}>
      <Container component='main' className={classes.root} maxWidth='xs'>
        <CssBaseline />
        <div className={classes.upper}>
          <Avatar className={classes.avatar}>
            <EventNoteIcon />
          </Avatar>
          <Typography component='h1' variant='h3'>
            Notes
          </Typography>
          <AddNoteForm />
        </div>
        <NoteList />
      </Container>
    </NotesContext.Provider>
  );
};

export { NoteApp as default };
