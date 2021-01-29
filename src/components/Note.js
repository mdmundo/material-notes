import { makeStyles } from '@material-ui/core/styles';
import { formatRelative } from 'date-fns';
import Avatar from '@material-ui/core/Avatar';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import DragHandleIcon from '@material-ui/icons/DragHandle';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import { useAuthState } from 'react-firebase-hooks/auth';
import database, { firebase } from '../firebase';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1.5),
    padding: theme.spacing(0.5),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column'
  },
  italic: {
    fontStyle: 'italic',
    fontSize: theme.spacing(1)
  }
}));

const Note = ({ note }) => {
  const [user, loadingAuth, errorAuth] = useAuthState(firebase.auth());

  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <ListItem>
        <ListItemIcon>
          <DragIndicatorIcon />
        </ListItemIcon>
        <ListItemText disableTypography>
          <>
            <Typography variant='body1'>{note.title}</Typography>
            {note.body.split('\n').map((str, index) => (
              <Typography key={index} color='textSecondary' variant='body1'>
                {str || '\u00A0'}
              </Typography>
            ))}
            <Typography
              color='textSecondary'
              variant='caption'
              className={classes.italic}>
              {formatRelative(note.createdAt, new Date())}
            </Typography>
          </>
        </ListItemText>
        <ListItemSecondaryAction>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Tooltip title='Delete this note' placement='bottom-end'>
                <IconButton
                  edge='end'
                  onClick={() =>
                    database.ref(`users/${user.uid}/notes/${note.key}`).remove()
                  }>
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item xs={6}>
              <Tooltip
                title={note.checked ? 'Uncheck this note' : 'Check this note'}
                placement='bottom-start'>
                <IconButton
                  edge='end'
                  onClick={(e) =>
                    database
                      .ref(`users/${user.uid}/notes/${note.key}`)
                      .update({ checked: !note.checked })
                  }>
                  {note.checked ? (
                    <CheckBoxIcon />
                  ) : (
                    <CheckBoxOutlineBlankIcon />
                  )}
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </ListItemSecondaryAction>
      </ListItem>
    </Paper>
  );
};

export { Note as default };
