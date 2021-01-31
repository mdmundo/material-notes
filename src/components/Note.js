import { makeStyles } from '@material-ui/core/styles';
import { formatDistanceToNowStrict } from 'date-fns';
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
import CheckIcon from '@material-ui/icons/Check';
import BrushIcon from '@material-ui/icons/Brush';
import { red, orange, green, blue, purple } from '@material-ui/core/colors';
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
  },
  high: {
    color: theme.palette.getContrastText(red[900]),
    backgroundColor: red[900]
  },
  significant: {
    color: theme.palette.getContrastText(orange[800]),
    backgroundColor: orange[800]
  },
  neutral: {
    color: theme.palette.getContrastText(green[600]),
    backgroundColor: green[600]
  },
  reduced: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500]
  },
  low: {
    color: theme.palette.getContrastText(purple[300]),
    backgroundColor: purple[300]
  },
  break: {
    wordBreak: 'normal',
    overflowWrap: 'anywhere'
  },
  item: {
    minHeight: theme.spacing(18)
  }
}));

const Note = ({ note }) => {
  const tags = ['high', 'significant', 'neutral', 'reduced', 'low'];
  const [user, loadingAuth, errorAuth] = useAuthState(firebase.auth());

  const setImportance = () => {
    database
      .ref(`users/${user.uid}/notes/${note.key}`)
      .update({ importance: (note.importance + 1) % 5 });
  };

  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <ListItem className={classes.item}>
        <ListItemIcon>
          <Avatar className={classes[tags[note.importance]]}>
            {!!note.checked && <CheckIcon />}
          </Avatar>
        </ListItemIcon>
        <ListItemText disableTypography>
          <>
            <Typography variant='body1' className={classes.break}>
              {note.title}
            </Typography>
            {note.body.split('\n').map((str, index) => (
              <Typography
                key={index}
                color='textSecondary'
                variant='body1'
                className={classes.break}>
                {str || '\u00A0'}
              </Typography>
            ))}
            <Typography
              color='textSecondary'
              variant='caption'
              className={classes.italic}>
              {formatDistanceToNowStrict(note.createdAt)}
            </Typography>
          </>
        </ListItemText>
        <ListItemSecondaryAction>
          <Grid
            container
            direction='column'
            justify='space-around'
            alignItems='center'>
            <Grid item xs={4}>
              <Tooltip title='Delete' placement='right'>
                <IconButton
                  onClick={() =>
                    database.ref(`users/${user.uid}/notes/${note.key}`).remove()
                  }>
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item xs={4}>
              <Tooltip
                title={note.checked ? 'Uncheck' : 'Check'}
                placement='right'>
                <IconButton
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
            <Grid item xs={4}>
              <Tooltip title='Tag' placement='right'>
                <IconButton onClick={setImportance}>
                  <BrushIcon />
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
