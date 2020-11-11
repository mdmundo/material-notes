import { useContext } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '@material-ui/core/Tooltip';
import NotesContext from '../context/notes-context';

const Note = ({ note }) => {
  const { dispatch } = useContext(NotesContext);

  return (
    <ListItem>
      <ListItemIcon>
        <Tooltip title='Mark this note' placement='left'>
          <Checkbox
            checked={note.checked}
            onChange={(e) =>
              dispatch({
                type: 'TOGGLE_NOTE',
                id: note.id,
                checked: e.target.checked
              })
            }
          />
        </Tooltip>
      </ListItemIcon>
      <ListItemText primary={note.title} secondary={note.body} />
      <ListItemSecondaryAction>
        <Tooltip title='Delete this note' placement='right'>
          <IconButton
            edge='end'
            onClick={() => dispatch({ type: 'REMOVE_NOTE', id: note.id })}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export { Note as default };
