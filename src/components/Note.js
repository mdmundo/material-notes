import { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import NotesContext from '../context/notes-context';
import { startRemoveNote, startToggleNote } from '../actions/notes';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1.5),
    padding: theme.spacing(0.5),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column'
  }
}));

const Note = ({ note }) => {
  const { dispatch } = useContext(NotesContext);
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <ListItem>
        <ListItemIcon>
          <Tooltip title='Mark this note' placement='left'>
            <Checkbox
              checked={note.checked}
              onChange={(e) =>
                dispatch(
                  startToggleNote({ id: note.id, checked: e.target.checked })
                )
              }
            />
          </Tooltip>
        </ListItemIcon>
        <ListItemText
          primary={note.title}
          secondary={note.body.split('\n').map((str, index) => (
            <Typography key={index}>{str}</Typography>
          ))}
        />
        <ListItemSecondaryAction>
          <Tooltip title='Delete this note' placement='right'>
            <IconButton
              edge='end'
              onClick={() => dispatch(startRemoveNote({ id: note.id }))}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </ListItemSecondaryAction>
      </ListItem>
    </Paper>
  );
};

export { Note as default };
