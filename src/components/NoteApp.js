// import { useEffect, useReducer } from 'react';
// import notesReducer from '../reducers/notes';
// import NoteList from './NoteList';
// import AddNoteForm from './AddNoteForm';
// import NotesContext from '../context/notes-context';

// const NoteApp = () => {
//   const [notes, dispatch] = useReducer(notesReducer, []);

//   useEffect(() => {
//     const notes = JSON.parse(localStorage.getItem('notes'));

//     if (notes) {
//       dispatch({ type: 'POPULATE_NOTES', notes });
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('notes', JSON.stringify(notes));
//   }, [notes]);

//   return (
//     <NotesContext.Provider value={{ notes, dispatch }}>
//       <h1>Notes</h1>
//       <NoteList />
//       <AddNoteForm />
//     </NotesContext.Provider>
//   );
// };

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import DeleteIcon from '@material-ui/icons/Delete';
import Divider from '@material-ui/core/Divider';
import EventNoteIcon from '@material-ui/icons/EventNote';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2)
  },
  list: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: 'inline'
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  upper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  grid: {
    paddingTop: theme.spacing(3)
  }
}));

const AlignItemsList = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container component='main' className={classes.main} maxWidth='xs'>
        <CssBaseline />
        <div className={classes.upper}>
          <Avatar className={classes.avatar}>
            <EventNoteIcon />
          </Avatar>
          <Typography component='h1' variant='h3'>
            Notes
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant='outlined'
              margin='normal'
              fullWidth
              id='title'
              label='Title'
              name='title'
              autoComplete='off'
              autoFocus
            />
            <TextField
              variant='outlined'
              margin='normal'
              fullWidth
              name='body'
              label='Body'
              type='body'
              id='body'
              autoComplete='off'
              multiline
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}>
              Add Note
            </Button>
          </form>
        </div>
        <Grid item className={classes.grid}>
          <Paper className={classes.paper}>
            <List className={classes.list}>
              <ListItem>
                <ListItemIcon>
                  <Checkbox />
                </ListItemIcon>
                <ListItemText
                  primary='Note title'
                  secondary='Note body, body, body, body, body, body, body, body, body, body, body, body, body'
                />
                <ListItemSecondaryAction>
                  <IconButton edge='end' aria-label='delete'>
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <Divider variant='inset' component='li' />
              <ListItem>
                <ListItemIcon>
                  <Checkbox />
                </ListItemIcon>
                <ListItemText
                  primary='Note title'
                  secondary='Note body, body, body, body, body, body, body, body, body, body, body, body, body'
                />
                <ListItemSecondaryAction>
                  <IconButton edge='end' aria-label='delete'>
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <Divider variant='inset' component='li' />
              <ListItem>
                <ListItemIcon>
                  <Checkbox />
                </ListItemIcon>
                <ListItemText
                  primary='Note title'
                  secondary='Note body, body, body, body, body, body, body, body, body, body, body, body, body'
                />
                <ListItemSecondaryAction>
                  <IconButton edge='end' aria-label='delete'>
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Container>
    </div>
  );
};

export { AlignItemsList as default };
