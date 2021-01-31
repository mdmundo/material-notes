import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import ListAltRoundedIcon from '@material-ui/icons/ListAltRounded';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { useAuthState } from 'react-firebase-hooks/auth';
import AddNoteForm from './AddNoteForm';
import NoteList from './NoteList';
import Login from './Login';
import { firebase } from '../firebase';
import Loading from './Loading';

const Copyright = () => {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Created by '}
      <Link color='inherit' href='https://github.com/mdmundo'>
        Edmundo Paulino
      </Link>
      {'.'}
    </Typography>
  );
};

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
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  upper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[800]
  }
}));

const NoteApp = () => {
  const [user, loading, error] = useAuthState(firebase.auth());

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component='main' className={classes.main} maxWidth='xs'>
        <div className={classes.upper}>
          <Avatar className={classes.avatar}>
            <ListAltRoundedIcon />
          </Avatar>
          <Typography component='h1' variant='h3'>
            Notes
          </Typography>
        </div>
        {user ? (
          <>
            <AddNoteForm />
            <NoteList />
          </>
        ) : loading ? (
          <Loading text='Loading User' />
        ) : (
          <Login />
        )}
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth='sm'>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
};

export { NoteApp as default };
