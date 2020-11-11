import { useContext } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import NotesContext from '../context/notes-context';

const Note = ({ note }) => {
  const { dispatch } = useContext(NotesContext);

  return (
    <ListItem>
      <ListItemIcon>
        <Checkbox
          onChange={(e) =>
            dispatch({
              type: 'TOGGLE_NOTE',
              id: note.id,
              checked: e.target.checked
            })
          }
        />
      </ListItemIcon>
      <ListItemText primary={note.title} secondary={note.body} />
      <ListItemSecondaryAction>
        <IconButton
          edge='end'
          onClick={() => dispatch({ type: 'REMOVE_NOTE', id: note.id })}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export { Note as default };
