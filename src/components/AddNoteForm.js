import { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import NotesContext from '../context/notes-context';
import { startAddExpense } from '../actions/notes';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const AddNoteForm = () => {
  const { dispatch } = useContext(NotesContext);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [titleHelper, setTitleHelper] = useState('');
  const [bodyHelper, setBodyHelper] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [bodyError, setBodyError] = useState(false);

  const addNote = (e) => {
    e.preventDefault();

    setTitleError(!title);
    setBodyError(!body);
    setTitleHelper(title ? '' : 'Title can not be empty.');
    setBodyHelper(body ? '' : 'Body can not be empty.');

    if (title && body) {
      dispatch(startAddExpense({ title, body }));
      setTitle('');
      setBody('');
    }
  };

  const classes = useStyles();

  return (
    <form className={classes.form} onSubmit={addNote} noValidate>
      <TextField
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        error={titleError}
        helperText={titleHelper}
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
        value={body}
        onChange={(e) => setBody(e.target.value)}
        error={bodyError}
        helperText={bodyHelper}
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
  );
};

export { AddNoteForm as default };
